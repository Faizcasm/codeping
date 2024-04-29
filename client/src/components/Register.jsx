import React, { useState } from 'react'
import axios from 'axios'
import {Atom} from 'react-loading-indicators'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import './Com.css'
import {toast} from 'react-hot-toast'
function Register() {
  const Navigate=useNavigate()
  const [loading,setLoading] =useState(false)
    const [username,setUsername] =useState()
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()
    const [avatar,setAvatar] =useState()
    const data = new FormData()
    data.append('username',username)
    data.append('password',password)
    data.append('email',email)
    data.append('avatar',avatar)
    const submit =(e)=>{
      setLoading(true)
        e.preventDefault();
        axios.post('https://servercodeping.vercel.app/register',data,{withCredientials:true})
        .then(res=>{
         
            console.log(res);
            Navigate('/login')
            toast.success("Registration Successfull")
            setLoading(false)
        })
        .catch(err=>{
            console.log(err);
            toast.error("Registration error")
        })
    }
    function login(){
      Navigate('/login')
    }
    if(loading){
      return <div className='loading'> <h1 className='atom'><Atom  color="white" size="large" text="CodePing" textColor="white" /></h1></div>
    }
  return (
    <>
       <div className="main-container">
      <div className="wrapper">
        <h2 >Register</h2>
        <br/>
        <br/>
        <form onSubmit={submit}>
        <div className="form">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <br/>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form">
            <label htmlFor="username">
              <strong>Name</strong>
            </label>
            <br/>
            <input
              type="name"
              placeholder="Enter Name"
              autoComplete="off"
              name="username"
              className="control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <br/>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form">
            <label htmlFor="avatar">
              <strong>Avatar</strong>
            </label>
            <br/>
            <input
              type="file"
              name="avatar"
              className="control "
              id='avatar'
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
          <button type="submit" className="submit">
            Register
          </button>
          </form>
          <p>Already Have an Account</p>
          <button onClick={login} className="login">
            Login
          </button>
        
      </div>
    </div>
    </>
  )
}

export default Register
