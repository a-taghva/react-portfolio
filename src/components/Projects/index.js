import React, { useState } from 'react';
import Project from '../Project';

function Projects() {
  const [ projects ] = useState([
    {
      title: 'Taskmaster Pro',
      src: 'taskmaster-pro',
      description: 'Javascript/jQuery',
      link: 'https://a-taghva.github.io/taskmaster-pro',
    },
    {
      title: 'Zookeeper',
      src: 'zookeeper',
      description: 'Node/Express/Heroku',
      link: 'https://dry-plateau-86771.herokuapp.com',
    },
    {
      title: 'Git it Done!',
      src: 'git-it-done',
      description: 'JavaScript/CSS',
      link: 'https://a-taghva.github.io/git-it-done',
    },
    {
      title: 'Run Buddy',
      src: 'run-buddy',
      description: 'HTML/CSS',
      link: 'https://a-taghva.github.io/run-buddy',
    },
    {
      title: 'Simply Unused',
      src: 'simply-unused',
      description: 'Node/JavaScript/MySQL',
      link: 'http://simply-unused.herokuapp.com',
    },
    {
      title: 'Calculator',
      src: 'calculator',
      description: 'JavaScript/HTML',
      link: '#',
    },
    {
      title: 'LED Wall',
      src: 'led-wall',
      description: 'Node/MySQL',
      link: '#',
    },
    {
      title: 'Surf Report',
      src: 'surf-report',
      description: 'JavaScript/MongoDB',
      link: '#',
    },
    {
      title: 'Poke Parte',
      src: 'poke-parte',
      description: 'JavaScript/HTML/CSS',
      link: 'https://damn-ma-6.github.io/Poke-Parte',
    }
  ]);

  return(
    // <div>
    //   {projects.map(project => (
    //     <Project key={project.title} project={project} />
    //   ))}
    // </div>
    <section id="projects">
      <h2 class="section-title">Projects</h2>
      <div class="projects">

        {projects.map(project => (
          <Project project={project} key={project.title} />
        ))}

        {/* <div class="grid-item task-m-p">
          <a href="http://simply-unused.herokuapp.com">
            <div  class="project-img taskmaster-pro"></div>
            <div class="project-caption">
              <h3>Taskmaster Pro</h3>
              <h4>JavaScript/jQuery</h4>
            </div>
          </a>
        </div> */}

      </div>
    </section> 
  )
}

export default Projects;