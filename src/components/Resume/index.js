import React from 'react';

function Resume() {
  return(
    <section id="resume">
      <h2 className="section-title">Resume</h2>
      <p className="resume-download">
        Download my <a href="#">resume</a>
      </p>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, mongoose</li>
      </ul>
    </section>
  )
}

export default Resume;