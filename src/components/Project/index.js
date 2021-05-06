import React from 'react';

function Project({ project }) {
  const { title, src, description, link, github } = project;

  return(
        <div class={`grid-item${ title === 'Taskmaster Pro' ? ' task-m-p' : '' }`}>
            <div  class={`project-img ${src}`}>
            </div>
            <div class="project-caption">
              <div class="project-links">
                <a href={link}><h3>{title}</h3></a>
                <a href={github}><i class="fa fa-github"></i></a>
              </div>
              <h4>{description}</h4>
            </div>
        </div>
  )
}

export default Project;