import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import UserContext from '../context/user'
import '../App.css'
import Navbar from '../Navbar'
function Admin() {
    const navigate = useNavigate()
    const [admin,setAdmin] =useState()
    const [key,setKey] =useState()
    const {setAdminauth} =useContext(UserContext)
    const adminsubmit=(e)=>{
        e.preventDefault()
        axios.post("https://codepingfaizan.vercel.app/admin",{admin,key},{withCredentials:true})
        .then(res=>{
            console.log(res.status);
            toast.success("Admin Logged In Successfully")
            setAdminauth(res.status)
            navigate('/admindashboard')
        })
        .catch(err=>{
            console.log(err);
            toast.error("Admin login failed")
        })
    }
    const {theme} =useContext(UserContext)
  return (
    <>
      <Navbar/>
      <div className="main-container" style={theme}>
      <div className="wrapper">
        <h2 style={theme}>Admin Sign In</h2>
        <br/>
        <br/>
        <form onSubmit={adminsubmit}>
        <div className="form">
            <label style={theme} htmlFor="email">
              <strong>Admin Username</strong>
            </label>
            <br/>
            <input
              type="text"
              placeholder="Enter Username"
              autoComplete="off"
              name="admin"
              className="control"
              onChange={(e) => setAdmin(e.target.value)}
            />
          </div>
          <div className="form">
            <label style={theme} htmlFor="subject">
              <strong>Admin Key</strong>
            </label>
            <br/>
            <input
              type="password"
              placeholder="Enter Key"
              autoComplete="off"
              name="key"
              className="control"
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
          <button type="submit" className="submit">
            Login
          </button>
          </form>
        
      </div>
    </div>
    </>
  )
}

export default Admin
