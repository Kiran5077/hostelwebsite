import React from 'react'
import { toast } from 'react-toastify';
import './Book.css'
const Book = () => {
    const notify = () => toast.success("booked successfully");
  return (
    <>
    <div className='Menuse' >
    <h1>Book Now</h1>
    </div>
    <div  className= 'modalOverLay'>

    <div  className='Modaldiv '>
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
       <label>Room type</label>
       <select type="text">
        <option value="">Select room</option>
        <option value="single room">Single room</option>
        <option value="double room">Double Room</option>
       </select>

       <label htmlFor="checkInDate">Check-In-Date</label>
       <input type="date" name="date" placeholder='chaeck in date'/>
       <label htmlFor="checkOut
       Date">Check-Out-Date</label>
       <input type="date" name="date" placeholder='chaeck in date'/>
       <label htmlFor="price">Price</label>
       <input type="number" name="date" placeholder='enter the price'/>
       <button type='submit' className='btn dark-btn'onClick={notify} >Book now </button>
        </form>
    </div>
    </div>
   </>
  )
}

export default Book
