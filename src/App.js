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
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/project/:page" component={Project}/>
          <Route path="/contact" component={Contact}/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
