import React, { useState } from 'react';

function Nav() {
  const nav = [
    {
      'title': 'About Me',
      'link': '#about-me',
    },
    {
      'title': 'Wrok',
      'link': '#work',
    },
    {
      'title': 'Contact Me',
      'link': '#contact-me',
    },
    {
      'title': 'Resume',
      'link': '#resume',
    },
  ];

  const [navSelected, setNavSelected] = useState(nav[0])

  return(
    <header>
      <h1>Portfolio</h1>
        <nav>
            <ul class="anchor-style">
              
              {nav.map(navEl => (
                <li 
                  key={navEl.title} 
                  className={navEl.title === navSelected.title ? 'navActive' : ''}
                  onClick={() => setNavSelected(navEl)}
                >
                  <a href={navEl.link}>{navEl.title}</a>
                </li>
              ))}

                {/* <li><a href="#about-me">About Me</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
                <li><a href="#">Resume</a></li> */}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;