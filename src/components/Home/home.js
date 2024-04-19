import React from 'react'
import'./home.css'
import {Link} from 'react-scroll'
import hire from '../../assets/hireme.png'
import developer from '../../assets/developer.png'

const Home = () => {
  return (
    <section id='home'>
      <div className='homeLeft'>
      <span className='saltation'>Hello</span>
      <span className='name'> I am <span className='firstName'>Santosh </span><br/> Front End Developer</span>
      <p className='homePara'>
          I am a skilled Web Developer with creating a user frendly websites
        </p>
        <Link><button className='hireMe'><img src={hire} alt='hireMelogo' className='hireMelogo'/> Hire Me</button></Link>
      </div>
      <img  src={developer} alt='developer' className='homeRight'/>
    </section>
  )
}

export default Home