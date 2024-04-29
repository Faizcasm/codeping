import React, { useState,useContext } from 'react'
import './App.css'
import './components/Com.css'
import { Link,useNavigate } from 'react-router-dom'
import {FaBars,FaSun,FaMoon} from 'react-icons/fa6'
import UserContext from './context/user.js'
import { ImCross } from "react-icons/im";
import {toast} from 'react-hot-toast'
import Login from './components/Login.jsx'
import {Atom} from 'react-loading-indicators'
import axios from 'axios'
import Cookies from 'js-cookie'
function Navbar() {
  axios.defaults.withCredentials=false
  const [loading,setLoading] =useState(false)
  const navigate =useNavigate()
    const [ismobile,setismobile] = useState(true)
    const [userprofile,setuserprofile] = useState(false)
   const {setTheme} = useContext(UserContext)
   const {theme} =useContext(UserContext)
   const {user} = useContext(UserContext)
      const [btn,setBtn] = useState({
        text:<FaMoon size={25}/>
      })
      function themechange(){
        if(theme.color==='darkblue'){
          setTheme({
            color:'white',
        backgroundColor:'darkblue'
          })
          setBtn({
            text:<FaSun size={25}/>
          })
        }else{
        setTheme({
          color:'darkblue',
          backgroundColor:'white'
        })
        setBtn({
          text:<FaMoon size={25}/>
        })
        }
      }
      function profile(){
       navigate('/profile')
      }
 
     const logout = async()=>{
      setLoading(true)
      const response =await axios.post('http://localhost:500/logout',{withCredientials:true})
      console.log(response);
      navigate('/login')
      setLoading(false)
      }
      function update(){
        navigate('/update')
      }
      function payment(){
        navigate('/payment')
      }
      function admin(){
        navigate('/admin')
      }
      function map(){
        navigate('/map')
      }
      if(loading){
        return <div className='loading'> <h1 className='atom'><Atom  color="white" size="large" text="CodePing" textColor="white" /></h1></div>
      }
      if(!user) return <Login/>
      else 
        return (
   <>
  
    <nav className='nav-bar'>
        <div className='logo'>CodePing</div>
        <div className='nav-links'>
            <ul className={ismobile?'list':'list-mobile'} onClick={()=>ismobile(false)}>
            <Link to='/' className='item'><li>Home</li></Link>
            <Link to='/about' className='item'><li>About</li></Link>
            <Link to='/service' className='item'><li>Service</li></Link>
            <Link to='/post' className='item'><li>Posts</li></Link>
            <Link to='/contact' className='item'><li>Contact</li></Link>
            </ul>
        </div>
        <button onClick={themechange} className='theme'>{btn.text}</button>
        <div className='img-container' onClick={()=>setuserprofile(!userprofile)}>
          <img src={user.avatar} alt='img'className='avatar'></img>
        </div> 
        <button className="btn" onClick={()=>setismobile(!ismobile)}>
          {ismobile ? <FaBars size={25}/> :<ImCross size={25}/>}
        </button>
        <div className={userprofile?'profile':'userprofile'} onClick={()=>setuserprofile(false)}>
          <button onClick={profile} className='l'>Profile</button>
          <br/>
          <button onClick={update} className='l'>Setting</button>
          <br/> 
          <button className='l' onClick={admin}>Admin</button>
          <br/>
          <button onClick={payment} className='l'>Payment</button>  <br/>
          <button className='l' onClick={map}>Map</button> <br/>
          <button onClick={logout} className='l'>Logout</button>
       
        </div>
    </nav>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   </>
  )
}

export default Navbar