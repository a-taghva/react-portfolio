import React, { useState } from 'react'; 
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const nav = [
    {
      'title': 'About Me',
      'link': '#about-me',
      'component': 'About'
    },
    {
      'title': 'Porjects',
      'link': '#projects',
      'component': 'Projects'
    },
    {
      'title': 'Contact Me',
      'link': '#contact-me',
      'component': 'Contact'
    },
    {
      'title': 'Resume',
      'link': '#resume',
      'component': 'Resume'
    },
  ];

  const [navSelected, setNavSelected] = useState(nav[0]);

  function renderComponent(component) {
    switch(component) {
      case 'Projects':
        return <Projects />
      case 'Contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <>
      <Nav 
        nav={nav}
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      />
      {renderComponent(navSelected.component)}
    </>
  );
}

export default App;
