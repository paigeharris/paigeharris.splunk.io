import React from 'react';
import Project from './Project.js'

const Projects = (props) => {
  let projects = [
    {
      name : "Mile High Drone",
      roles: "Full Stack Solo",
      img:"https://i.imgur.com/rHUuImb.png",
      desc:"Website for a Denver drone service, contact, gallery, etc",
      technologies :["NodeJs","React","Express","JS","HTML","CSS"],
      live_link:"http://www.blakeharris.com/dronestore/",
      live_repo:"https://github.com/harrisblake85/dronestore",
      backend_link:"https://tooliebox-api.herokuapp.com/",
      backend_repo:"https://github.com/harrisblake85/tooliebox_api",
      sep_backend:true
    },
  {
    name : "ToolieBox",
    roles: "Backend, Tool & Tag",
    img:"https://i.imgur.com/oPkxcdg.png",
    desc:"Find code snippets by language or technology!",
    technologies :["Ruby on Rails","Angular","Angular Materials","JS","HTML","CSS"],
    live_link:"https://tooliebox.herokuapp.com/",
    live_repo:"https://github.com/tg970/tooliebox_frontend",
    backend_link:"https://tooliebox-api.herokuapp.com/",
    backend_repo:"https://github.com/harrisblake85/tooliebox_api",
    sep_backend:true
  },
  {
    name : "Creatives For A Cause",
    roles: "Full Stack Solo",
    img:"https://i.imgur.com/aUuRkOY.png",
    desc:"T-Shirt Commerce Store With User Submitted Designs!",
    technologies :["NodeJs","Express","React","JS","HTML","CSS"],
    live_link:"https://creativesforacause.herokuapp.com/",
    live_repo:"https://github.com/harrisblake85/cfac-react",
    backend_link:"https://cfac-api.herokuapp.com/",
    backend_repo:"https://github.com/harrisblake85/creativesforacause_api",
    sep_backend:true
  },
  {
    name : "Profile Games",
    roles: "Full Stack, Game",
    img:"https://i.imgur.com/wLnAOZA.png",
    desc:"Play a Multiplayer Game With Your Friends",
    technologies :["Node.js","Express.js","MongoDB","Mongoose","Angular","JS","HTML","CSS"],
    live_link:"https://profile-games.herokuapp.com/",
    live_repo:"https://github.com/harrisblake85/profile-games",
    sep_backend:false
  },
  {
    name : "Finish Stories",
    roles: "Full Stack Solo",
    img:"https://i.imgur.com/ot9sKei.png",
    desc:"A Back and Forth Story Telling App!",
    technologies :["Node.js","Express.js","MongoDB","Mongoose","EJS","JS","HTML","CSS","JQuery"],
    live_link:"https://finish-stories.herokuapp.com/threads",
    live_repo:"https://github.com/harrisblake85/Finish-Stories",
    sep_backend:false
  },
  {
    name : "Economics The Game",
    roles: "Front End Solo",
    img:"https://i.imgur.com/jhzY3Cz.png",
    desc:"Compete Against The AI In A Game To Become Rich",
    technologies :["JS","HTML","CSS","JQuery"],
    live_link:"http://www.blakeharris.com/thegame/",
    live_repo:"https://github.com/harrisblake85/thegame",
    sep_backend:false
  }
];
  projects = projects.map((project) => {
    return(

        <Project
          key = {project.name}
          project = {project}
          />


    )
  });

  return (
    <div className="main-content">
      <span className="topspan">My Projects</span>
    <div className="projects">
    {projects}
  </div>
  </div>
  )
}

export default Projects


// <NavLink key={project.name} to={"/projects/"+project.name}>
// </NavLink>
