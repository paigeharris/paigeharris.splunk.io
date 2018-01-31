import React, { Component } from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';

import Header from './Header.js';
import Contact from './Contact.js';
import About from './About.js';
import Project from './Project.js';
import Projects from './Projects.js';
import Skills from './Skills.js';

class App extends Component {
  render() {
    return (
      <HashRouter >
        <div className="container">
          <Header />
          <Route exact path="/" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/project/:page" component={Project}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/skills" component={Skills}/>

        </div>
      </HashRouter>
    );
  }
}

export default App;
