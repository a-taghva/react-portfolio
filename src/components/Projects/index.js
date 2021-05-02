import React, { useState } from 'react';
import Project from '../Project';

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
        <Project key={project.title} project={project} />
      ))}
    </div>
  )
}

export default Projects;