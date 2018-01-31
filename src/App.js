import React, { Component } from 'react';
import {
  BrowserRouter,
  Route, Redirect
} from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import Project from './Project.js';
import Projects from './Projects.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/portfolio" component={Home}/>
          <Route path="/portfolio/about" component={About}/>
          <Route path="/portfolio/projects" component={Projects}/>
          <Route path="/portfolio/project/:page" component={Project}/>
          <Route path="/portfolio/contact" component={Contact}/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
