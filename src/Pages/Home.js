
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { Component } from 'react';


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

export default function SignUp() {
  const classes = useStyles();

  function firstNameChange(e) {
    console.log(e.target.value);
  }

  function lastNameChange(e) {
    console.log(e.target.value);
  }

  function emailChange(e) {
    console.log(e.target.value);
  }
  function messageChange(e) {
    console.log(e.target.value);
  }

function clickHandler(e){
  console.log('submited')

}
       
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Your Thoughts of COVID-19 Life
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                onChange={firstNameChange}
                id="firstName"
                label="First Name"
                
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={lastNameChange}
                
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={emailChange}
                name="email"
                
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                multiline
                fullWidth
                name="Message"
                label="Message"
                type="text"
                id="message"
                onChange={messageChange}
                
                rows={4}
                autoComplete="message"
              />
            </Grid>
          <Button
            type="submit"
            onClick = {clickHandler}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Submit
          </Button>
          </Grid>
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}