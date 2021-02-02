import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser, getUsers } from '../../utils/userFunctions';
import { checkFormFields } from './checkFormFields';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

export default function Register() {
  const classes = useStyles();

  const history = useHistory();

    const [registerState, setRegisterState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        errors: {},
        formIsValid: true,
    });

    const handleValidation = () => {
        const [errors, formIsValid] = checkFormFields(registerState);
        setRegisterState({ ...registerState, errors, formIsValid });
    };

    const onChange = (event) => {
        setRegisterState({ ...registerState, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        let errors = {};
        handleValidation();
        event.preventDefault();
        const userData = {
            first_name: registerState.first_name,
            last_name: registerState.last_name,
            email: registerState.email,
            password: registerState.password,
        };
        if (registerState.formIsValid) {
            getUsers().then((data) => {
                console.log(data);
                var alreadyRegisteredUser = data
                    .find((element) => element.email === registerState.email)
                if (!alreadyRegisteredUser) {
                    registerUser(userData).then((res) => {
                        history.push('/login');
                    });
                    console.log('Form submitted');
                    console.log(userData);
                } else {
                    errors['email'] = 'Email already exists';
                    setRegisterState({ ...registerState, errors });
                }
            });
        } else {
            console.log('Form has errors.');
        }
    };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <WhiteTextTypography component="h1" variant="h5">
          Sign up
        </WhiteTextTypography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                autoFocus
                fullWidth
                id="firstName"
                label="First Name"
                name="first_name"
                onChange={onChange}
                required
                value={registerState.first_name}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                onChange={onChange}
                required
                value={registerState.last_name}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={onChange}
                required
                value={registerState.email}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="current-password"
                fullWidth
                id="password"
                label="Password"
                name="password"
                onChange={onChange}
                required
                type="password"
                value={registerState.password}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}