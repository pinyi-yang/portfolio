import React from 'react'

function Nav() {
  return (
    <>
      <header>
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
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </header>
      <div className="nav-spacer"></div>
    </>
  )
}

export default Nav
