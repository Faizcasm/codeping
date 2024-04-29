import React,{useContext} from 'react'
import Navbar from '../Navbar'
import './Pages.css'
import Footer from '../Footer'
import UserContext from '../context/user'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Login'
function About() {
  const {theme,user} = useContext(UserContext)
  const navigate=useNavigate()
  if(!user){
    navigate('/')
  }
  else navigate('/about')
  return (
   <div style={theme}>
    <Navbar/>
    <section className='home-section' style={theme}>
    <h2>About</h2>
    <br/>
    <h2>CodePing is a software company where you can get your business grow. We provide All types of web services</h2>
    <br/>
    <div className='img-section2'></div>
    <br/>
    <h2 style={theme}>We believe in quality</h2>
    <br/>
    <div className='img-section6'></div>
    </section>
    <br/>
    <br/>
    <br/>
    <Footer/>
   </div>
  )
}

export default About