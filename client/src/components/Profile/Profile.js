import React from 'react';
import { useAppContext } from '../../store';
import { useLoginCheck } from '../../utils/setAuthToken';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

    const [authState, appDispatch] = useAppContext();

    const avatarName = `${authState.user.first_name} ${authState.user.last_name}`;

    useLoginCheck(appDispatch);

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                <Avatar alt={avatarName} src="/broken-image.jpg" className={classes.blue} />
                <WhiteTextTypography component="h1" variant="h5">
                    Profile
                </WhiteTextTypography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={4}>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                id="standard-read-only-input"
                                label="First Name"
                                defaultValue={authState.user.first_name}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            id="standard-read-only-input"
                            label="Last Name"
                            defaultValue={authState.user.last_name}
                            InputProps={{
                                readOnly: true,
                            }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            id="standard-read-only-input"
                            label="Email"
                            defaultValue={authState.user.email}
                            InputProps={{
                                readOnly: true,
                            }}
                            />
                        </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
    );
}