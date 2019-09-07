import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <>
      <header>
        <img src="./profile.png" alt="shadownova" id='logo'/>
        <ul>
          <li className="nav-li">
            <Link 
              to='About'
              activeClass='active'
              spy={true}
              smooth={true}
              duration={600} >
              About Me
            </Link>
          </li>
          <li className="nav-li">
            <Link 
              to='Slides'
              activeClass='active'
              spy={true}
              smooth={true}
              duration={600} >
              Slides
            </Link>
          </li>
          <li className="nav-li">
            <Link 
              to='Projects'
              activeClass='active'
              spy={true}
              smooth={true}
              duration={600} >
              Projects
            </Link>
          </li>
          <li className="nav-li">
            <Link 
              to='Contact'
              activeClass='active'
              spy={true}
              smooth={true}
              duration={600} >
              Contact
            </Link>
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
