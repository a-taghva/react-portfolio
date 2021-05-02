import React from 'react';

function Nav() {
  return(
    <header>
      <h1>Portfolio</h1>
        <nav>
            <ul class="anchor-style">
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;