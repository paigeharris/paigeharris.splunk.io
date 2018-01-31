import React from 'react';

const Project = (props) => {
  const project = props.project;
  return(
      <div key={project.name} className="project">
      <h1 className="projecth1">{project.name}</h1>
      <h2><strong>Roles: </strong>{project.roles}</h2>
      <a href={project.live_link} target="_blank">
      <img src={project.img} alt="Project Img"/>
      </a>
      <h2>{project.desc}</h2>
      <a href={project.live_link}>
        <h3>Live Site</h3>
      </a>

      <a href={project.live_repo}>
        <h3>Project GitHub</h3>
      </a>

      {project.backend_link &&
        <div className="backend_links">
          <a href={project.backend_link}>
            <h3>Live Backend</h3>
          </a>
          <a href={project.backend_repo}>
            <h3>Backend GitHub</h3>
          </a>
        </div>
      }


    </div>
  )
}

export default Project;
