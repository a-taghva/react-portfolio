import React from 'react';

function Project({ project }) {
  const { title, src, description } = project;

  return(
    <div>{title}</div>
  )
}

export default Project;