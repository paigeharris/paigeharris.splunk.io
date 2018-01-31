import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
  <div>
  <h1 className="name">Blake Harris</h1>
  <header>
    <ul className="main-nav">
      <li><NavLink to="/">About Me</NavLink></li>
      <li><NavLink to="/skills">Skills</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>




    </ul>
  </header>
  </div>
);

export default Header;
