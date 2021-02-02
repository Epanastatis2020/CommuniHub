import React, { useState } from 'react';
import { GET_ERRORS, SET_CURRENT_USER } from '../../services/actions/types';
import { useAppContext } from '../../store';
import { loginUser } from '../../utils/userFunctions';
import { setAuthToken } from '../../utils/setAuthToken';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        CommuniHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: '../../assets/images/Communihub.PNG',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
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

export default function Login() {
  const classes = useStyles();

  const history = useHistory();

  const [formState, setFormState] = useState({
      email: '',
      password: '',
  });

  const [, appDispatch ] = useAppContext();

  const onChange = (e) => {
      setFormState({
          ...formState,
          [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const user = {
          email: formState.email,
          password: formState.password,
      };
      try {
          const response = await loginUser(user);
          // Set token to localStorage
          const token = response.data;
          // Set token to Auth header
          setAuthToken(token);
          // Decode token to get user data
          const decodedToken = jwt_decode(token);
          // Set current user
          appDispatch({ type: SET_CURRENT_USER, payload: decodedToken });
          history.push('/dashboard');
      } catch (error) {
          appDispatch({
              type: GET_ERRORS,
              payload: error,
          });
      }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <WhiteTextTypography component="h1" variant="h5">
            Sign in
          </WhiteTextTypography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={onChange}
              value={formState.email}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChange}
              value={formState.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}