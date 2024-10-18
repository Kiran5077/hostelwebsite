import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";





const NavBar = () => {
  
  return (
    <div>
      <nav className='container'>
        <h2>StayZone</h2>
       <ul>
        <Link to="/"><li className='contain'>Home</li></Link>
        <Link to="/about"><li className='contain'>About us</li></Link>
           <Link to="/Menu"><li className='contain'>Menu</li></Link>
           <Link to="/Contact"><li className='contain'>contact us</li></Link>
           <li> <button className='btn'>Log in</button></li>
      </ul>
      </nav>
    </div>
  )
}

export default NavBar
