import React from 'react'
import './about.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import python from '../../assets/pyhton.png'
import linkedin from '../../assets/linkedin.png'
import gihub from '../../assets/github.png'

const About = () => {
  return (
    <section id='about'>
        <span className='tile'> ABOUT </span><br/>
        <span className='paragraph'>
            I am skilled and passionate Frontend Developer  with experienced in HTML, CSS, JavaScript, and React, 
            excelling in crafting intuitive user interfaces and creating user friendly websites . Committed to ongoing learning and 
            professional development for a well-rounded expertise in web development.
        </span>
      
        <div className="stack-container">
            <div className=" technology">
                <div className="techstack-title ">
                  <h4><span>Frontend:</span></h4>
                </div>
                <div className="icons">
                    <img src={html} alt="html" width={30} />
                    <img src={css} alt="css" width={30} />
                    <img src={js} alt="js" width={30} />
                    <img src={react} alt="react" width={30} />
                </div>
            </div>
            <div className="technology ">
                <div className="techstack-title ">
                  <h4><span>Backend:</span></h4>
                </div>
                <div className="icons">
                  <img src={python} alt="python" width={30} />
                </div>
            </div>    
            <div className="social-links">
            <h4><span>Social Media:</span></h4>
              <a href="https://www.linkedin.com/in/uppuluri-eswara-venkata-phani-sai-santosh/" rel='noreferrer' target="_blank">
                <img src={linkedin} alt="linkdin" width={30} />
              </a>
              <a href="https://github.com/SantoshUppuluri" rel='noreferrer' target="_blank" >
                <img src={gihub} alt="github" width={30} />
              </a>
            </div>
        </div>
    </section>
  )
}

export default About