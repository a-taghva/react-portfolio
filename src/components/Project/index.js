import React from 'react';

function Project({ project }) {
  const { title, src, description, link } = project;

  return(
        <div class={`grid-item${ title === 'Taskmaster Pro' ? ' task-m-p' : '' }`}>
          <a href={link}>
            <div  class={`project-img ${src}`}>
            </div>
            <div class="project-caption">
              <h3>{title}</h3>
              <h4>{description}</h4>
            </div>
          </a>
        </div>
  )
}

export default Project;