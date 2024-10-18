
import NavBar from './component/basic/Navbar/NavBar'
import { Routes,Route, BrowserRouter as Router } from "react-router-dom";
import Home from './component/basic/Home/Home'

import Contact from './component/basic/Contact/Contact'
import MenuList from './component/basic/MenuList/MenuList'
import About from './component/basic/About/About'

import Footer from './component/basic/Footer/Footer'



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
     
      <Route path="/Contact" element={<Contact/>}/>
     
  </>
    </Routes>
  </Router>
<Footer/>
    
  
  </>
  )
}

export default App
