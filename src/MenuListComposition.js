import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import {NavLink} from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
  },
  popperClose: {
    pointerEvents: 'none',
  },
};

class MenuListComposition extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper>
          <MenuList>
          <NavLink to="/projects">
            <MenuItem>Projects</MenuItem>
          </NavLink>

          <NavLink to="/skills">
            <MenuItem>Skills</MenuItem>
          </NavLink>

          <NavLink to="/about">
            <MenuItem>About Me</MenuItem>
          </NavLink>

          <NavLink to="/contact">
            <MenuItem>Contact</MenuItem>
          </NavLink>

          </MenuList>
        </Paper>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);
