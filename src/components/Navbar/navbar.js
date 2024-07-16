import React from 'react'
import './navbar.css'

const Navbar = () => {  
  return (
    <nav className='navbar'>
       <h3 className='logo'>Santosh.dev</h3>
        <div className='menubar'>
        <a href='#home' className='menubarListItem'>Home</a>
        <a href='#about' className='menubarListItem'>About</a>
        <a href='#project' className='menubarListItem'>Project</a>
        <a href='#contact' className='menubarListItem'>Contact</a>
        <a href="https://drive.google.com/file/d/11CYmo3IO5zX6tKv_yPzEI6j2qE5HcBtF/view?usp=drive_link" rel='noreferrer' target="_blank"className='menubarListItem'>Resume</a>
        </div> 
    </nav>
    
  )
}

export default Navbar