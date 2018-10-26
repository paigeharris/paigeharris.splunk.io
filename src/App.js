import React, { Component } from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';

import Header from './Header.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Project from './Project.js';
import Skills from './Skills.js';
import About from './About.js';
import SimpleMenu from './SimpleMenu.js';
import SimpleBottomNavigation from './SimpleBottomNavigation.js';

class App extends Component {
  render() {
    return (
      <HashRouter >
        <div className="container">
          <Header />
          <SimpleMenu />
          <h1 className="phonename">Blake Harris</h1>
          <SimpleBottomNavigation />
          <Route exact path="/" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/project/:page" component={Project}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/skills" component={Skills}/>

        </div>
      </HashRouter>
    );
  }
}

export default App;
