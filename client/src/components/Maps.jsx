import React, { useContext } from 'react'
import './Com.css'
import Navbar from '../Navbar'
import UserContext from '../context/user'
function Maps() {
  return (
    <>
    <Navbar/>
        <h1  className='address'>
           Codeping Palhallan Pattan <br/>
           Sec-3, Pattan, Kashmir - 193121
        </h1>
        <div  className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.6548521926966!2d74.54020277436972!3d34.18074111093656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1a1aac91986ab%3A0x3e197ce64612d01f!2sPalhalan%2C%20Tantray%20Pora%20193121!5e0!3m2!1sen!2sin!4v1713853331980!5m2!1sen!2sin" 
        width="600" height="450" allowFullScreen
         loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  )
}

export default Maps