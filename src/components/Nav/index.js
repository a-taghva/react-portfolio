import React from 'react';

function Nav({ nav, navSelected, setNavSelected }) {

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
                  <a>{navEl.title}</a>
                </li>
              ))}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;