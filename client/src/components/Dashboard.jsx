import React,{useContext, useEffect, useState} from 'react'
import Navbar from '../Navbar.jsx'
import axios from 'axios'
import '../Pages/Pages.css'
import UserContext from '../context/user.js'
import Login from './Login.jsx'
import Footer from '../Footer.jsx'
import {toast} from 'react-hot-toast'
import Maps from './Maps.jsx'
function Dashboard() {
  axios.defaults.withcredientials=false;
  const {setUser,user} = useContext(UserContext)
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    const getUser = async() => {
      await axios.get('https://codepingfaizan.vercel.app/user',{headers: {
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
       'Access-Control-Allow-Credentials': true 
},withCredientials:true,credientials:'include'})
        .then(res => {
          setLoading(true)
          setUser(res.data);
          console.log(res.data);
          setLoading(false)
        })
        .catch(err => {
          console.log(err);
          setLoading(false)
    
        });
    };

    getUser(); 

   
    const interval = setInterval(() => {
      getUser(); // Call getUser periodically
    },3000); // Fetch user data every minute (adjust as needed)

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [setUser]); // Dependency array ensures that this effect runs only when setUser changes

const {theme} = useContext(UserContext)
if(!user) return <Login/>
  return (
   <div style={theme}>
   <Navbar/>
   <section style={theme} className='home-section'>
 <h2>
  Welcome to the Dashboard !!
  <br/>
  We Welcome you {user.username}
 </h2>
 <br/>
 <div className='img-section'></div>
 <br/>
 <h2 style={theme}>Grow your business now</h2>
 <br/>
 <div className='img-section5'></div>
 </section>
  <br/>
  <br/>
  <br/>
  <Footer/>
   </div>
  )
}

export default Dashboard
