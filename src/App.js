import './App.css';
import React from 'react'
// import  Nav from './Component/Nav'
import { Routes, Route } from "react-router-dom";
// import Header from './Component/Header'
import  Home  from './pages/Home';
import  Blog  from './pages/Blog';
import  About  from './pages/About';
import  Donate  from './pages/Donate';
import  NoPage  from './pages/NoPage';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';



const app = () => {
  return(
<>
<ScrollToTop/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/blog" element={<Blog />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/donate" element={<Donate />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/volunteer" element={<Volunteer />}/>
    <Route path="*" element={<NoPage/>}/>
  </Routes>

</>

  );
  
}
export default  app;