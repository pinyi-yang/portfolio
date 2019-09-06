import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Slides from './Slides';
import Project from './Project';
import Contact from './Contact';

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <About />
        <Slides />
        <Project />
        {/* <Contact /> */}
      </div>
    </>
  );
}

export default App;
