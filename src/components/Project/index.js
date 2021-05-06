import React from 'react';

function Project({ project }) {
  const { title, src, description, link, github } = project;

  return(
        <div className={`grid-item${ title === 'Taskmaster Pro' ? ' task-m-p' : '' }`}>
            <div  className={`project-img ${src}`}>
            </div>
            <div className="project-caption">
              <div className="project-links">
                <a href={link}><h3>{title}</h3></a>
                <a href={github}><i className="fa fa-github"></i></a>
              </div>
              <h4>{description}</h4>
            </div>
        </div>
  )
}

export default Project;