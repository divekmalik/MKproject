
import axios from 'axios';
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

  export default class SignUpc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { fname, lname, email, message} = this.state;
    await axios.post('https://u8ms5rcq1l.execute-api.us-east-1.amazonaws.com/test',
      { key1: `${fname}, ${lname}, ${email}, ${message} ` }
    );
  }

  render() {
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Your Thoughts of COVID-19 Life
        </Typography>
        <form onSubmit={this.handleSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="fname"
                type= "text"
                onChange={this.handleChange}
                value={this.state.fname}
                variant="outlined"
                required
                fullWidth
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
                name="lname"
                type = "text"
                onChange={this.handleChange}
                value={this.state.lname}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                type = "text"
                onChange={this.handleChange}
                value={this.state.email}
                label="Email Address"
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
                name="message"
                label="Message"
                type="text"
                onChange={this.handleChange}
                value={this.state.message}
                id="Message"
                rows={4}
                autoComplete="message"
              />
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className= "submit">
            Submit
          </Button>
          </Grid>
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>
      
    </Container>
    //   <div>
    //     <form onSubmit={this.handleSubmit}>
    //       <label>Name:</label>
    //       <input
    //         type="text"
    //         name="name"
    //         onChange={this.handleChange}
    //         value={this.state.name}
    //       />

    //       <label>Message:</label>
    //       <input
    //         type="text"
    //         name="message"
    //         onChange={this.handleChange}
    //         value={this.state.message}
    //       />

    //       <button type="submit">Send</button>
    //     </form>
    //   </div>
    );
  }
}