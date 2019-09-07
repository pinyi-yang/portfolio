import React from 'react';
import {projects} from './info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faSpinner);



function Project() {
  const content = projects.map((project, index) => (
    <div className="single-project" >
      <div className="anchor-div" id={`project${index}`}></div>
      <h2>{project.name}</h2>

      <div className="single-project-info">
        <div className='single-project-hero'>
          <img src={project.img} alt={project.name} className='single-project-img'/>
          
        </div>

        <div className="single-project-note">
          <p>{project.summary}</p>
          <p>
            <b>Tech:</b> <br/>
            {project.tech.map(tech => (
              <>
                {tech} <br/>
              </>
            ))}
          </p>

          <div className="single-project-links">
            <a href={project.git} target='_blank'>
              <div className="single-project-link">
                <FontAwesomeIcon icon={['fab', 'github']} size='2x' /> {' '}
                Github
              </div>
            </a>
            <a href={project.app} target='_blank'>
              <div className="single-project-link">
              <FontAwesomeIcon icon={ faSpinner } size='2x' /> {' '}
                Live App
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <>
      <div id="Projects" className="anchor-div"></div>
      <div className='App-sub Projects'>
        <h1>Projects</h1>
        <hr/>
        {content}
      </div>
    </>
  )
}

export default Project
