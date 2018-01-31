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

  return (projects)
}

export default Projects
