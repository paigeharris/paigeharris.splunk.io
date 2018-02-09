import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { BottomNavigationAction } from 'material-ui/BottomNavigation';
import FavoriteIcon from 'material-ui-icons/Favorite';
import CallIcon from 'material-ui-icons/Call';
import CodeIcon from 'material-ui-icons/Code';
import FaceIcon from 'material-ui-icons/Face';
import {NavLink} from 'react-router-dom';


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
    return (
      <div className="phone-nav">
        <NavLink exact to="/">
          <BottomNavigationAction label="Projects" icon={<CodeIcon />} />
        </NavLink>

        <NavLink to="/skills">
          <BottomNavigationAction label="Skills" icon={<FavoriteIcon />} />
        </NavLink>

        <NavLink to="/about">
          <BottomNavigationAction label="About Me" icon={<FaceIcon />} />
        </NavLink>

        <NavLink to="/contact">
          <BottomNavigationAction label="Contact Me" icon={<CallIcon />} />
        </NavLink>

        </div>


    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
