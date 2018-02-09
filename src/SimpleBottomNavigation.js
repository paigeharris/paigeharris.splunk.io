import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import FavoriteIcon from 'material-ui-icons/Favorite';
import CallIcon from 'material-ui-icons/Call';
import CodeIcon from 'material-ui-icons/Code';
import FaceIcon from 'material-ui-icons/Face';


const styles = {
  root: {
    width: 300,
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root + " phone-nav"}
      >

      <Link to="/">
      <BottomNavigationAction label="Projects" icon={<CodeIcon />} />
      </Link>


      <Link to="/skills">
        <BottomNavigationAction label="Skills" icon={<FavoriteIcon />} />
      </Link>

      <Link to="/about">
        <BottomNavigationAction label="About Me" icon={<FaceIcon />} />
      </Link>

      <Link to="/contact">
        <BottomNavigationAction label="Contact Me" icon={<CallIcon />} />
      </Link>

      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
