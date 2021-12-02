import React from 'react'
import logo from './image/logo.png'
import resume from './image/resume.pdf'
const Navbar = () => {
    return (
        <>     
        <nav>
           <div className="nav-body ms">
            <img className="logo" src={logo} alt='Siraj'/>
            <a className="btn-primary" download="" href={resume}>Get Resume</a>
            </div>
        </nav>
      </>        
    )
}

export default Navbar
