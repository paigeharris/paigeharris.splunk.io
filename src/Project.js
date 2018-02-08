import React from 'react';

const Project = (props) => {
  const project = props.project;
  return(
    <div className="project">
      <a  href={project.live_link} target="_blank">
      <img src={project.img} alt="Project Img"/>
      </a>
      <div className="hide">
        <h1 className="projecth1">{project.name}</h1>
        <h2><strong>Roles: </strong>{project.roles}</h2>
        <h2 >{project.desc}</h2>
        {project.backend_link &&
          <div className="backend_links">
              <h3>{project.backend_link}</h3>
          </div>
        }
      </div>
      </div>
  )
}

export default Project;
