import React from 'react';

const Project = (props) => {
  const project = props.project;
  const subclass = props.subclass;
  return(
    <div className={subclass}>
      <h1>{project.title}</h1>
      <img alt={project.title} src={project.img}></img>
      <p>{project.desc}</p>
      <h3>{project.likes}</h3>
    </div>
  )
}

export default Project;
