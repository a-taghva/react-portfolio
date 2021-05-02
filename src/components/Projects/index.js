import React, { useState } from 'react';

function Projects() {
  const [ projects ] = useState([
    {
      title: 'Taskmaster Pro',
      src: '',
      description: 'Javascript/jQuery'
    },
    {
      title: 'Zookeeper',
      src: '',
      description: 'Node/Express/Heroku'
    },
    {
      title: 'Git it Done!',
      src: '',
      description: 'JavaScript/CSS'
    },
    {
      title: 'Run Buddy',
      src: 'HTML/CSS',
      description: ''
    },
    {
      title: 'Simply Unused',
      src: '',
      description: 'Node/JavaScript/MySQL'
    },
  ]);

  return(
    <div>
      {projects.map(project => (
        <div key={project.title}>{project.title}</div>
      ))}
    </div>
  )
}

export default Projects;