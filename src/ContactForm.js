import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import SendIcon from 'material-ui-icons/Send';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
   margin: theme.spacing.unit,
 },
 leftIcon: {
   marginRight: theme.spacing.unit,
 },
 rightIcon: {
   marginLeft: theme.spacing.unit,
 }

});


class ContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    multiline: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className="contactPaper" elevation={5}>
        <Typography variant="headline" component="h1">
          Contact Me
        </Typography>
        <br></br>

          <form className={classes.container +" messageForm"} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Name"
              className={classes.textField + " contactField"}
              value={this.state.name}
              placeholder="Your Name"
              onChange={this.handleChange('name')}
              margin="normal"
            />

            <TextField
              id="number"
              label="Phone Number"
              value={this.state.phone}
              placeholder="303 618 5741"
              onChange={this.handleChange('phone')}
              type="text"
              className={classes.textField + " contactField"}
              margin="normal"
            />

            <TextField
                id="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder="example@email.com"
                className={classes.textField + " contactField"}
                margin="normal"
              />

              <TextField
                id="message"
                label="Message"
                multiline
                rowsMax="5"
                value={this.state.message}
                placeholder="Your multi-line message"
                onChange={this.handleChange('message')}
                className={classes.textField + " contactField"}
                margin="normal"
              />

              <Button className={classes.button} variant="raised" color="primary">
                <SendIcon />
              </Button>

          </form>



      </Paper>

    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);
