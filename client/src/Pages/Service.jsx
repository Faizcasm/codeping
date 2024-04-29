import React ,{useContext, useState} from 'react'
import './Pages.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import UserContext from '../context/user'
import {useNavigate} from 'react-router-dom'
function Service() {
  const {theme} =useContext(UserContext)
  const navigate=useNavigate()
  function serviceready(){
   navigate('/contact')
  }
  return (
   <div style={theme}>
    <Navbar/>
    <br/>
    <br/>
    <section style={theme} className='home-section'>
    <h2>Services</h2>
    <br/>
    <h2>Web Designing Services</h2>
    <br/>
    <div className='img-section3'></div>
    <h2 style={theme}>Web Development Services</h2>
    <div className='img-section4'>
    
    </div>
    <button className='get' onClick={serviceready}>Get your work ready</button>
    </section>
    <br/>
    <br/>
    <br/>
    <Footer/>
   </div>
  )
}

export default Service