import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import contact from '../../assets/contact.png'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='menubar'>
            <Link activeClass='active ' to='home'spy={true} smooth={true} offset={-100} duration={500} className='menubarListItem'>HOME</Link>
            <Link activeClass='active ' to='about'spy={true} smooth={true} offset={-100} duration={500}className='menubarListItem'>ABOUT</Link>
            <Link activeClass='active ' to='project'spy={true} smooth={true} offset={-10} duration={500}className='menubarListItem'>PROJECT</Link> 
          
        </div> 
        <button className='menubarBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
        <img src={contact} alt='contact' className='contacts'/>
            Contact me
        </button>
    </nav>
  )
}

export default Navbar