import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import FAQ from '../FAQ/FAQ'

const Home = () => {
  return (
    <>
    <div className='programing'>
        
        
        <div className='home'>
        <h1>Welcome to the StayZone</h1>
            <p>"Your home away from home,where memories are made and travelers become family."</p>
            <Link to="/about">
            <button className='btn'>Read More</button>
            </Link>
           
        </div>
        </div>
        <div className='Search'>
          <form>
          <div className='containe'>
            
            <label htmlFor=''>guest</label>
            <input type="number" placeholder="how many people stay" required/>
          </div>
          <div className='containe'>
            <label htmlFor=''>Check In</label>
            <input type="date" placeholder="check in"
            required/>
          </div>
          <div className='containe'>
            <label htmlFor=''>Check Out</label>
            <input type="date" placeholder="check out"
            required/>
          </div>
          <div className='containe'>
            <label htmlFor=''>Room Type</label>
            <input type="text" placeholder="choose room"
            required/>
          </div>
          <div className='containe'>
            <label htmlFor=''>price</label>
            <input type="range" min="0"  max="100"
            required/>
          </div>
          <select className='pics' >
            <option>choose an option</option>
            <option>AC</option>
            <option>non Ac</option>

          </select>
          
          <button  type="submit" className='btn'>book now</button>
          </form>
        </div>
       
      
      <div className='Menus'>
        <h1> Services</h1>
      </div>
      <div className='Menuitem'>
        <div className='pic'>
          <img src="/assets/rooms.jpeg" alt=""/>
        <h1>Furnished Rooms</h1>
        <p>We provide fully firnished rooms with quality matress,tables and other</p>
        <button className='btn'>enquire now</button>
      </div>
      <div className='pic'>
      <img src="/assets/wifi.jpeg" alt=""/>
        <h1>WIFI</h1>
        <p>We provide wireless high speed internet so that you can stay connected with your friends</p>
        <button className='btn'>enquire now</button>
      </div>
      <div className='pic'>
      <img src="/assets/canteen.jpeg" alt=""/>
        <h1>Canteen</h1>
        <p>We cater to your food requirement as well.we provide breakfast,lunch&dinner services in our canteen.</p>
        <button className='btn'>enquire now</button>
      </div>
      <div className='pic'>
      <img src="/assets/housekeeping.jpg" alt=""/>
        <h1>Housekeeping</h1>
        <p>We also provide housekeeping services like laundry,dish cleaning and room cleaning based on requirements</p>
        <button className='btn'>enquire now</button>
      </div>
      </div>
     <FAQ/>
      </>
    
  )
}

export default Home
