import React, { useState ,useContext} from 'react'
import axios from 'axios'
import './Com.css'
import {Atom} from 'react-loading-indicators'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {toast} from 'react-hot-toast'
function Login() {
 
    const [username,setUsername] =useState()
    const Navigate=useNavigate()
    const [password,setPassword] =useState()
    const [loading,setLoading] =useState(false)
    const [btn,setBtn] =useState({
      name:'Login'
    })
    const submit =(e)=>{
      setLoading(true)
        e.preventDefault();
        axios.post('https://servercodeping.vercel.app/login',{username,password},{withCredentials: true})
        .then(res=>{
          
            console.log(res);
            Navigate('/')
            toast.success("Login Success")
            console.log(res.data.accessToken);
        
        })
        .catch(err=>{
            console.log(err);
            toast.error("An Error Occured While Logging in")
        })
    }
    function register(){
      Navigate('/register')
    }
    
    if(loading){
      return <div className='loading'> <h1 className='atom'><Atom  color="white" size="large" text="CodePing" textColor="white" /></h1></div>
    }
  return (
    <>
      <div className="main-container">
      <div className="wrapper">
        <h2 >Login</h2>
        <br/>
        <br/>
        <form onSubmit={submit}>
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
          <button  type="submit" className="submit">
           {btn.name}
          </button>
          </form>
          <p>Don't Have an Account</p>
          <button onClick={register} className="login">
            Register
          </button>
        
      </div>
    </div>
    </>
  )
}

export default Login
