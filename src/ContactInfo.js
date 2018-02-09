import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function ContactInfo(props) {
  
  return (
      <Paper className="contactPaper" elevation={5}>
        <Typography variant="headline" component="h1">
          Contact Info
        </Typography>
        <br></br>
        <form className="messageForm" noValidate autoComplete="off">
          <TextField
            label="Name"
            className="infoForm"
            value="Blake Harris"
            margin="normal"
          />

          <TextField
            label="Phone Number"
            className="infoForm"
            value="303-618-5741"
            margin="normal"
          />

          <TextField
            label="Email"
            className="infoForm"
            value="harrisblake85@gmail.com"
            margin="normal"
          />
        </form>



      </Paper>

  );
}

ContactInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactInfo);
