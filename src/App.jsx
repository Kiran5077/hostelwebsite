
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
import Payment from './component/basic/Payment';
import Book from './component/basic/Book/Book';
import Error from './component/basic/error/Error';
import scrollreveal from 'scrollreveal';



function App() {
  useEffect(()=>{
    const sr=scrollreveal({
      origin:"middle",
      distance:"80px",
      duration:2000,
      reset:true,

    });
    sr.reveal(
      `
      nav,
      #hero,
      #faq,
      #about,
      #room`,{
        opacity:0,
        interval:300,
      }
      
    );
  },[]);


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
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<LoginSignup/>}/>
  </><Route path="*" element={<Error/>}/>
    </Routes>
  </Router>
  


    
  
  </>
  )
}

export default App
