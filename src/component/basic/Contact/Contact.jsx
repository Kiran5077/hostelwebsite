import React from 'react'
import './Contact.css'

const Contact = () => {
  let Display=()=>{
    alert("data is sunmited successfully")
  }
  return (
    <>
    <div className='Menusi'>
     
      </div>
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message</h3>
            <p>Feel free to reach out through contact form or find our contact
                information below.Your feedback,questions, and suggestions are important 
                to us as we strive to provide exceptional service to our 
               StayZone community
            </p>
            <ul>
                <li>StayZone8</li>
                 <li>info@StayZone,hello@StayZone.com</li>
                 <li>+91-0680-2492421/422</li>
            </ul>
        </div>
      <div className='contact-col'>
        <form>
       <label>Your name</label>
       <input type="text" name='name' placeholder='enter your name'
       required/>
       <label>Your Email</label>
       <input type="text" name='Email' placeholder='enter your email'
       required/>
       <label>Phone number</label>
       <input type="tel" name='phone' placeholder='enter your mobile number'
       required/>
       <label>write message here</label>
       <textarea name="message"  cols="30" rows="10" placeholder='enter your message' required></textarea>
       <button type='submit' className='btn dark-btn' onClick={Display}>Submit now </button>
        </form>
        <span></span>
      </div>
    </div>
    </>
  )
}

export default Contact
