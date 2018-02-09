import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import {NavLink} from 'react-router-dom';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="burgermenu">
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          ☰
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >

        <NavLink exact to="/">
          <MenuItem onClick={this.handleClose}>
            <span>Projects</span>
        </MenuItem>
        </NavLink>

        <NavLink to="/skills">
          <MenuItem onClick={this.handleClose}>
            <span>Skills</span>
          </MenuItem>
          </NavLink>
          <NavLink to="/about">
          <MenuItem onClick={this.handleClose}>
            <span>About Me</span>
          </MenuItem>
          </NavLink>
          <NavLink to="/contact">
          <MenuItem onClick={this.handleClose}>
            <span>Contact</span>
          </MenuItem>
          </NavLink>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
