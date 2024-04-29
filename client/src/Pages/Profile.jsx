import React,{useContext, useEffect,useState} from 'react'
import './Pages.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import UserContext from '../context/user'
import {toast} from 'react-hot-toast'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
function Profile() {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    function home(){
      navigate('/')
    }
    const [newusername,setUsername] =useState()
    const [newemail,setEmail] =useState()
    const submit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:500/updateuser',{newusername,newemail},{withCredentials:true})
      .then(res=>{
        console.log(res);
        navigate('/')
        toast.success('Details Updated')
      })
      .catch(errr=>{
        console.log(errr);
        toast.error("Details upadation failed")
      })
    }

  return (
   <>
   
   <h1>Profile</h1>
   <br/>
   <button onClick={home}><FaArrowAltCircleLeft size={40}/></button>
   <br/>
   <div className='profile-div'><img src={user.avatar} alt='img'></img>
    <h2>{user.username}</h2>
    <h2>{user.email}</h2></div>
    <br/>
    <br/>
    <form onSubmit={submit} className='details'>
    <br/>
    <label>Name</label>
    <br/>
      <input type='username' name='newusername' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
      <br/>
      <label>Email</label>
      <br/>
      <input type='email' name='newemail' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <button type='submit'>Update</button>
    </form>
    <br/>
    <br/>
   </>
  )
}

export default Profile