import React, { useContext, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import '../App.css'
// import '../Pages/Pages.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import UserContext from '../context/user'
function Update() {
  const [newPassword,setnewPassword] =useState()
  const [oldPassword,setoldPassword] =useState()
 const navigate=useNavigate()
 
 const submit =(e)=>{
  e.preventDefault();
  axios.post('https://codepingfaizan.vercel.app/update',{newPassword,oldPassword},{withCredentials:true})
  .then(res=>{
    console.log(res);
    navigate('/')
    toast.success("Password Changed")
  })
  .catch(err=>{
    console.log(err);
    toast.error("Password unchanged")
  })
 }
 const {theme} = useContext(UserContext)
  return (
   <>
   <Navbar/>
   <div className="main-container" style={theme}>
      <div className="wrapper">
        <h2 style={theme}>Update Password</h2>
        <br/>
        <br/>
        <form onSubmit={submit}>
        <div className="form">
            <label style={theme} htmlFor="password">
              <strong>Current Password</strong>
            </label>
            <br/>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="oldPassword"
              className="control"
              onChange={(e) => setoldPassword(e.target.value)}
            />
          </div>
          <div className="form">
            <label style={theme} htmlFor="password">
              <strong>New Password</strong>
            </label>
            <br/>
            <input
              type="password"
              placeholder="New password"
              autoComplete="off"
              name="newPassword"
              className="control"
              onChange={(e) => setnewPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit">
            Update
          </button>
          </form>
        
      </div>
    </div>
    <br/>
    <h2 style={theme}> Most Secure System</h2>
    <br/>
    <div className='img-section10'></div>
    <Footer/>
   </>
  )
}

export default Update
