import React from 'react'
import './Footer.css'
import { FaYoutube,FaTwitter,FaFacebook,FaInstagram,FaWhatsapp } from 'react-icons/fa';
function Footer() {
  return (
    
      <div className="footer">
        <div className='icons'>
        <FaYoutube/>
        <FaFacebook/>
        <FaInstagram/>
        <FaWhatsapp/>
        <FaTwitter/>
        </div>

        <p>StayZone</p>
        <p>Berhmanagar, Berhampur, Odisha-761018, India</p>
        <p>Phone: +91-0680-2492421/422</p>
        <p> Contact: +91-7205326478/7205336478</p>
        <p> Email: info@StayZone.hello@StayZone.com</p>
        <p>©StayZone.com, 2024.</p>
      </div>
      
    
    
  )
}

export default Footer