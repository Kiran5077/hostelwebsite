
import NavBar from './component/basic/Navbar/NavBar'
import { Routes,Route, BrowserRouter as Router } from "react-router-dom";
import Home from './component/basic/Home/Home'
import { useEffect } from 'react';
import Contact from './component/basic/Contact/Contact'
import MenuList from './component/basic/MenuList/MenuList'
import About from './component/basic/About/About'

import Footer from './component/basic/Footer/Footer'
import LoginSignup from './component/basic/Login/LoginSignup';
import Room from './component/basic/room/Room';
import Payment from './component/basic/Payment/Payment';
import Book from './component/basic/Book/Book';
import Error from './component/basic/error/Error';




function App() {



  return (
    <>
    
  <Router>
    <NavBar/>
    <Routes>
      <>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Menu" element={<MenuList/>}/>
      <Route path="/Room" element={<Room/>}/>
      <Route path="Room/:id" element={<Book/>}/>
      <Route path="Programs/:id" element={<Payment/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    
     <Route path="/Login" element={<LoginSignup/>}/>
  </>
    </Routes>
  </Router>
  


    
  
  </>
  )
}

export default App
