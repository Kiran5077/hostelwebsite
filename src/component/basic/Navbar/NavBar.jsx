import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import user_icon from'/assets/person.png'
import { useState } from 'react'
import menu_icon from '/assets/image.png'
import { MdPerson3 } from 'react-icons/md'



const NavBar = () => {
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <div>
      <nav className='navbar'>
        <h2>StayZone</h2>
        
       <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <Link to="/"><li className='navitem'>Home</li></Link>
        <Link to="/about"><li className='navitem'>About us</li></Link>
           <Link to="/Menu"><li className='navitem'>Menu</li></Link>
           <Link to="/Room"><li className='navitem'>Room</li></Link>
           <Link to="/Contact"><li className='navitem'>contact us</li></Link>
           <Link to="/Login"> <li><button className='btn'>
            <MdPerson3/>
            </button></li></Link>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
      </nav>
    </div>
  )
}

export default NavBar