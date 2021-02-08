import React, { useContext, useState } from 'react';
import { Context } from '../../context';
import firebase from '../../firebase';
import { toast } from "react-toastify";

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
    let { user } = state;

    if (user === null) {
      user = sessionStorage.getItem("currentUser");
    };

    const [loading, setLoading] = useState(false); 
    const [name, setName] = useState(user ? user.name : "")

    const onChange = (event) => {
      setName(event.target.value);
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const currentUser = firebase.auth().currentUser;
      console.log("USER OBJECT =======> ", currentUser);
      currentUser.updateProfile({
        displayName: name,
      }).then(function() {
        toast.dark("Name successfully updated")
        setLoading(false)
      }).catch(function(error) {
        toast.dark(error)
        setLoading(false)
      });
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
                        <Grid item xs={6} sm={6}>
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