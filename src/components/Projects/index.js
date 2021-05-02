import React, { useState } from 'react';
import Project from '../Project';

function Projects() {
  const [ projects ] = useState([
    {
      title: 'Taskmaster Pro',
      src: '',
      description: 'Javascript/jQuery',
      link: 'https://a-taghva.github.io/taskmaster-pro',
    },
    {
      title: 'Zookeeper',
      src: '',
      description: 'Node/Express/Heroku',
      link: 'https://dry-plateau-86771.herokuapp.com',
    },
    {
      title: 'Git it Done!',
      src: '',
      description: 'JavaScript/CSS',
      link: 'https://a-taghva.github.io/git-it-done',
    },
    {
      title: 'Run Buddy',
      src: '../../assets/images/run-buddy.png',
      description: 'HTML/CSS',
      link: 'https://a-taghva.github.io/run-buddy',
    },
    {
      title: 'Simply Unused',
      src: '',
      description: 'Node/JavaScript/MySQL',
      link: 'http://simply-unused.herokuapp.com',
    },
  ]);

  return(
    // <div>
    //   {projects.map(project => (
    //     <Project key={project.title} project={project} />
    //   ))}
    // </div>
    <section id="work">
      <h2 class="section-title">Work</h2>
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