import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
library.add(fab)

function About() {
  const skills = [{name: 'Javascript', icon: './icon/javascript.svg'},
                  {name: 'Typescript', icon: './icon/typescript.png'},
                  {name: 'React', icon: './icon/react.svg'},
                  {name: 'Node.js', icon: './icon/node.svg'},
                  {name: 'Express', icon: './icon/Express.png'},
                  {name: 'GraphQL', icon: './icon/graphql.svg'},
                  {name: 'Python', icon: './icon/python.svg'},
                  {name: 'Django', icon: './icon/django.svg'},
                  {name: 'PostgreSQL', icon: './icon/postgres.svg'},
                  {name: 'MongoDB', icon: './icon/mongodb.svg'},
                  {name: 'HTML 5', icon: './icon/html.svg'},
                  {name: 'CSS', icon: './icon/css.svg'},
                  {name: 'Heroku', icon: './icon/heroku.png'},
                  {name: 'Github', icon: './icon/github.svg'},
                  {name: 'VS Code', icon: './icon/vscode.svg'}
                ]

  const skillsContent = skills.map(skill => (
    <div className="single-skill">
      <img src={skill.icon} alt={skill.name} className="skill-icon"/>
      <div className="skill-name">{skill.name}</div>
    </div>
  ))
  return (
    <>
      <div id="About" className="anchor-div"></div>
      <div className='App-sub About'>
        <h2>About Me</h2>
        <div className="about-content">
          <div >
            <img src="./img/profile.png" alt="My Image" id="profile-img"/>
          </div>
          <div className="about-intro">
            <h3>
              Pinyi Yang {' '}
              <a href="https://github.com/shadownova65">
                <FontAwesomeIcon icon={['fab', 'github']} size='lg' />
              </a> {' '}

              <a href="https://linkedin.com/in/pinyi-yang">
                <FontAwesomeIcon icon={['fab', 'linkedin']} color='#2969b1' size='lg'/>
              </a>
            </h3>
            <h4>Full Stack Developer, Ph.D. in Materials Science and Engineering</h4>
            <p>I am a full stack developer, experienced in bringing rudimentary abstract concepts into real-life application through my problem-solving, self-study and project management skills.
            </p>
            <h4>Skills: </h4>
            <div className="skills-div">
              {skillsContent}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default About;
