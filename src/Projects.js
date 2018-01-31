import React from 'react';
import { NavLink } from 'react-router-dom';
import Project from './Project.js'

const Projects = (props) => {
  let projects = props.projects || [];
  projects = projects.map((project) => {
    return(
      <NavLink key={project._id} to={"/projects/"+project._id}>
        <project
          subclass = "sub_gallery"
          project = {project}
          />
      </NavLink>


    )
  });

  return (
    <div>
    <h1>Projects</h1>
    <h2>Oh no</h2>
    {projects}
    </div>
  )
}

export default Projects
