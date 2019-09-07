import React from 'react'

function Nav() {
  return (
    <>
      <header>
        <img src="./profile.png" alt="shadownova" id='logo'/>
        <ul>
          <li className="nav-li">
            <a href="#About">About Me</a>
          </li>
          <li className="nav-li">
            <a href="#Slides">Slides</a>
          </li>
          <li className="nav-li">
            <a href="#Projects">Projects</a>
          </li>
          <li className="nav-li">
            <a href="#Contact">Contacts</a>
          </li>
          <li className="nav-li">
            <a href="./files/Pinyi, Full Stack Developer.pdf" target='_blank' rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </header>
      <div className="nav-spacer"></div>
    </>
  )
}

export default Nav
