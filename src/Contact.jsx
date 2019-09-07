import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
library.add(fab, faEnvelope)

function Contact() {
  return (
    <>
      <div id="Contact" className="anchor-div"></div>
      <div className='Contacts'>
        <h1>Find Me Online</h1>        
        <div className="contact-icons-container">
          <div className="contact-icons">
            <a href="https://github.com/shadownova65" target='_blank'>
              <FontAwesomeIcon icon={['fab', 'github']} color='white' size='3x' />
            </a> <br/>
            <span>Github</span>
          </div>
  
          <div className="contact-icons">
            <a href="https://linkedin.com/in/pinyi-yang" target='_blank'>
              <FontAwesomeIcon icon={['fab', 'linkedin']} color='#2969b1' size='3x' />
            </a> <br/>
            <span>LinkedIn</span>
          </div>
  
          <div className="contact-icons">
            <a href="mailto:pyyanguw@gmail.com" target='_blank'>
              <FontAwesomeIcon icon={faEnvelope} color='white' size='3x'/>
            </a> <br/>
            <span>Email</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
