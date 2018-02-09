import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
  <div>

  <header>
    <ul className="main-nav desktop">
      <li><NavLink exact to="/"><span>Projects</span></NavLink></li>
      <li><NavLink to="/skills"><span>Skills</span></NavLink></li>
      <h1 className="name">Blake Harris</h1>
      <li><NavLink to="/about"><span>About Me</span></NavLink></li>
      <li><NavLink to="/contact"><span>Contact</span></NavLink></li>
    </ul>

  </header>
  </div>
);

export default Header;
