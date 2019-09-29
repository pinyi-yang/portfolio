import React, {useState, useEffect} from 'react';
import { projects } from './info';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSpinner, faLink } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faSpinner);

function Slides() {
  const [index, setIndex] = useState(0);
  const [slideNum, setSlideNum] = useState(0);
  const [project, setProject] = useState(projects[index]);
  const [slide, setSlide] = useState(project.slides[slideNum]);
  const [pause, setPause] = useState(false);
  
  useEffect(() => {
    console.log(`index: ${index}`);
    setProject(projects[index%5])
  }, [index]);

  useEffect(() => {
    // console.log(`Project ${index}, slide ${slideNum}`);
    setSlide(project.slides[slideNum])
  }, [slideNum, project])

  useEffect(() => {
    const slidesControl = setInterval(() => {
      if ( slideNum < project.slides.length - 1 ) {
        setSlideNum(slideNum+1);
      } else {
        if (!pause) {
          if ( index < projects.length - 1 ) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }
        setSlideNum(0);
      }
      

    }, 8000);
    return () => clearInterval(slidesControl)
  })

  const handleMouseEnter = (index) => {
    setPause(true);
    setIndex(index);
    setSlideNum(0);
  }

  let side = projects.map((project, i) => {
    if (i === index) {
      return (
        <Link 
          to={`project${index}`}
          activeClass='active'
          spy={true}
          smooth={true}
          duration={600} >
          <div className="slide-project selected-project" onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={ () => setPause(false)} >
            <img src={project.img} alt={project.name}/>
          </div>
        </Link>
      )
    } else {
      return (
        <Link 
          to={`project${index}`}
          activeClass='active'
          spy={true}
          smooth={true}
          duration={600} >
          <div className="slide-project" onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => setPause(false)}>
            <img src={project.img} alt={project.name}/>
          </div>    
        </Link>
      )
    }
  })

  let intro = (
    <>
      <div className='slides-intro'>{project.intro}</div>
      <div className="slides-intro-links">
        <Link 
          to={`project${index}`}
          activeClass='active'
          spy={true}
          smooth={true}
          duration={600} >
          <div className="slides-intro-link">
            <FontAwesomeIcon icon={ faLink } size='lg'/> MORE
          </div>
        </Link>
        <a href={project.git} target='_blank' rel="noopener noreferrer">
          <div className="slides-intro-link">
            <FontAwesomeIcon icon={['fab', 'github']} size='lg'/> Github
          </div>
        </a>
        <a href={project.app} target='_blank' rel="noopener noreferrer">
          <div className="slides-intro-link">
            <FontAwesomeIcon icon={faSpinner} size='lg'/> Live App
          </div>
        </a>
      </div>
    </>
  )

  let hero = (
    <>
      <img src={slide.img} alt={slide.img} className="slides-content-slide"/>
      <div className="slides-content-slidenote">
        {slide.note}
      </div>
      <div className="slides-content-pages">
        {project.slides.map((slide, num) => {
          if (num === slideNum) {
            return <div className="slides-content-page selected-slide">
              {num}
            </div> 
          } else {
            return <div className="slides-content-page" onClick={() => setSlideNum(num)}>
            {num}
          </div>
          }
        })}
      </div>
    </>
  )

  return (
    <>
      <div id="Slides" className="anchor-div"></div>
      <div className='App-sub Slides' id='Slides'>
        <div className="slides-projects">
          {side}
        </div>

        <div className="slides-content">
          <h1 id='slides-project-title'>{project.name}</h1>

          <div className="slides-content-sub">
            <div className="slides-intro-container">
              {intro}
            </div>

            <div className="slides-hero">
              {hero}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slides
