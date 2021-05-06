import React from 'react';

function Nav({ nav, navSelected, setNavSelected }) {

  return(
    <header>
      <h1>Ali Taghva</h1>
        <nav>
            <ul class="anchor-style">
              {nav.map(navEl => (
                <li 
                  key={navEl.title} 
                  className={navEl.title === navSelected.title ? 'navActive' : ''}
                  onClick={() => setNavSelected(navEl)}
                >
                  {navEl.title}
                </li>
              ))}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;