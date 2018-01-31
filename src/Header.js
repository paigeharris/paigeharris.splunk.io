import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to="/portfolio">Home</NavLink></li>
      <li><NavLink to="/portfolio/about">About</NavLink></li>
      <li><NavLink to="/portfolio/projects">Projects</NavLink></li>
      <li><NavLink to="/portfolio/contact">Contact</NavLink></li>



    </ul>
  </header>
);

export default Header;
