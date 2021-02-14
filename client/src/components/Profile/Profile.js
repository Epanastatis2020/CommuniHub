import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../context';
import firebase from '../../firebase';
import { toast } from "react-toastify";
import { updateUserName, getCurrentUserId } from '../../services/UserService';

//mUI imports
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(Typography);

  export default function Profile() {

    const classes = useStyles();
    
    const { state, dispatch } = useContext(Context);
    const [dbUserID, SetDbUserID] = useState(); 

    useEffect(() => {

      const fetchCurrentUserID = async ()  => {
        const CurrentUserId = await getCurrentUserId().catch((err) => {
          console.log(err);
          toast.dark(err);
        })
        // console.log("CurrentUserID here", CurrentUserId)
        SetDbUserID(CurrentUserId);
      };

      fetchCurrentUserID();
    }, []);

    let { user } = state;

    if (user === null) {
      user = JSON.parse(sessionStorage.getItem("currentUser"));
    };

    const [loading, setLoading] = useState(false); 
    const [name, setName] = useState(user ? user.name : "")

    const onChange = (event) => {
      setName(event.target.value);
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const currentUser = await firebase.auth().currentUser;
      currentUser.updateProfile({
        displayName: name,
      }).then(function() {
        toast.dark("Name successfully updated")
      }).catch(function(error) {
        toast.dark(error)
      });
      // console.log("DB USER ID HERE", dbUserID);
      // console.log("NAME", name);
      let payload = {
        name: name,
        _id: dbUserID
      }
      // console.log("THIS IS THE PAYLOAD", payload);
      const updateTheUserName = async (payload) => {
        !payload._id ? toast.err("the ID is not loaded yet") : await updateUserName(payload).catch((err) => {
          toast.dark(err.message);
        })
      }
      updateTheUserName(payload);
      setLoading(false);
    };

    const SubmitBtn = () => {
      return (
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Save Changes
      </Button>)
    }

    const LoadingBtn = () => {
      return (
        <CircularProgress />
      )
    }

    return (
              <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <div className={classes.paper}>
                  <Avatar alt={name} src="/broken-image.jpg" className={classes.blue} />
                  <WhiteTextTypography component="h1" variant="h5">
                      Profile
                  </WhiteTextTypography>
                      <form className={classes.form} noValidate onSubmit={onSubmit}>
                          <Grid container spacing={4}>
                          <Grid item xs={12}>
                              <TextField
                                autoComplete="name"
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                                onChange={onChange}
                                required
                                value={name}
                                variant="outlined"
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                              fullWidth
                              id="name"
                              label="Email"
                              defaultValue={user.email}
                              InputProps={{
                                readOnly: true,
                              }}
                              />
                          </Grid>
                          {loading ? <LoadingBtn /> : <SubmitBtn />}
                          </Grid>
                      </form>
                  </div>
              </Container>
      );
}