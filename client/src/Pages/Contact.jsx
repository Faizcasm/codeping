import React, { useState ,useContext} from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import '../App.css'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import {Atom} from 'react-loading-indicators'
import '../components/Com.css'
import UserContext from '../context/user'
import Footer from '../Footer'
function Contact() {
  const [from,setFrom] = useState()
  const [subject,setSubject]=useState()
  const navigate=useNavigate()
  const [message,setMessage] =useState()
  const [loading,setLoading] =useState(false)
  const sendmail=(e)=>{
    setLoading(true)
    e.preventDefault()
    axios.post('https://codepingfaizan.vercel.app/mailer',{from,message,subject},{withCredentials:true})
    .then(res=>{
      console.log(res);
      setLoading(false)
      toast.success("Mail sended")
      navigate('/')
    })
    .catch(err=>{
      console.log(err);
      toast.error("Mail sending failed")
    })
  }
  if(loading){
    return <div className='loading'> <h1 className='atom'><Atom  color="white" size="large" text="CodePing" textColor="white" /></h1></div>
  }
  const {theme} =useContext(UserContext)
  return (
    <>
      <Navbar/>
      <div className="main-container" style={theme}>
      <div className="wrapper">
        <h2 style={theme}>Contact</h2>
        <br/>
        <br/>
        <form onSubmit={sendmail}>
        <div className="form">
            <label style={theme} htmlFor="email">
              <strong>Email</strong>
            </label>
            <br/>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="from"
              className="control"
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="form">
            <label style={theme} htmlFor="subject">
              <strong>Subject</strong>
            </label>
            <br/>
            <input
              type="name"
              placeholder="Subject"
              autoComplete="off"
              name="subject"
              className="control"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form">
            <label style={theme} htmlFor="text">
              <strong>Message</strong>
            </label>
            <br/>
            <input
              type="text"
              placeholder="Enter Message"
              name="message"
              className="control"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="submit">
            Send
          </button>
          </form>
        
      </div>
    </div>
    <br/>
    <h2 style={theme}>Our Mailing system is fast</h2>
    <div className='img-section7'></div>
    <h2 style={theme}>Thanks for contacting</h2>

      <Footer/>
    </>
  )
}

export default Contact
