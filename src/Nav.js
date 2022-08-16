import React from 'react'
import "./Nav.css";

function Nav() {
    
   
   
  return (
    <>
        <nav className="navbar">
            <div className="brand__title">
                Brand name
            </div>
            <a href="#" className='toggle__button'>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar__links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Nav