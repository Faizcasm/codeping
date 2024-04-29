import React ,{useContext, useEffect, useState} from 'react'
import axios from 'axios'
import Admin from './Admin';
import './Com.css'
import { FaArrowLeft } from 'react-icons/fa6';
import UserContext from '../context/user';
import { useNavigate } from 'react-router-dom';
function Admindash() {
   const [user,setUser]=useState([])
   const navigate=useNavigate()
    useEffect(() => {
        const getUser = async() => {
           axios.get('http://localhost:500/admindata', { withCredentials: true })
            .then(res => {
              setUser(res.data);
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        };
    
        getUser(); // Call getUser initially
    
        const interval = setInterval(() => {
          getUser(); // Call getUser periodically
        }, 100000); // Fetch user data every minute (adjust as needed)
    
        return () => {
          clearInterval(interval); // Clean up the interval on component unmount
        };
      }, [setUser]); // Depend\ency array ensures that this effect runs only when setUser changes
    const {adminauth}=useContext(UserContext)
    function home(){
      navigate('/')
    }
    if(adminauth!==200) return <Admin/>
  return (
    <>
<h1>Admin Dashboard</h1>
<button onClick={home}><FaArrowLeft size={40} cursor="pointer"/></button>
{user.map(data=>{
    return(
        <>
           <div className='admin'>
           <br/>
           <img src={data.avatar} alt='img'></img>
           <h5>Id :- {data._id}</h5>
            <h5>Username :- {data.username}</h5>
            <h5>Email :- {data.email}</h5>
           </div>
           <br/>
        </>
    )
})}
    </>
  )
}

export default Admindash