import React from 'react'
import './App.css'
import {FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'
function Footer() {
  return (
   <>
    <footer className='footer'>
      <h3>CodePing</h3>
      <br/>
      <FaGithub color='black' size={30} cursor='pointer'/>
     <a href='https://www.instagram.com/codeping.in?igsh=dWl4ZmN1MjZxMHh3'> <FaInstagram color='red' size={30} cursor='pointer'/></a>
      <a href='https://www.linkedin.com/in/faizan-hameed-a54316255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin color='blue' size={30} cursor='pointer'/></a>
      <br/>
      <h4>Thanks for visiting 💖</h4>
      <br/>
      <p>Copyright © All rights reserved by CodePing</p>
    </footer>
   </>
  )
}

export default Footer