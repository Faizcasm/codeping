import React, { useState,useEffect, useContext } from 'react'
import axios from 'axios'
import './Com.css'
import Navbar from '../Navbar.jsx'
import UserContext from '../context/user.js'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
function Posts() {
    const [title,setTitle] =useState("")
    const [content,setContent] =useState("")
    const [postimg,setPostImg] =useState("")
    const [postdata,setData] = useState([])
    const navigate=useNavigate()
    const [comment,setComment] =useState("")
    const data = new FormData()
    data.append('title',title)
    data.append('content',content)
    data.append('postimg',postimg)
    const postsubmit =(e)=>{
        e.preventDefault()
        axios.post('https://codepingfaizan.vercel.app/post',data,{withCredentials:true})
        .then(res=>{
            console.log(res.data);
            console.log(res.data);
            setData(res.data)
            navigate('/')
            toast.success("Posted")
        })
        .catch(err=>{
            console.log(err)
        })
    }
 
   useEffect(() => {
    const getpost =()=>{
        axios.get('https://codepingfaizan.vercel.app/posts',{withCredentials:true})
        .then(res=>{
            console.log(res.data);
            setData(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    getpost()
   }, [])
   const {theme} = useContext(UserContext)
   function deletee(){
    axios.delete('https://codepingfaizan.vercel.app/delete',{withCredentials:true})
    .then(res=>{
        console.log(res);
        navigate('/')
        toast.success("Post Deleted")
    })
    .catch(err=>{
        console.log(
            err
        );
    })
   }
   
   
  return (
    <>
    <Navbar/>
    <h1 style={theme} className='post'>Create Post</h1>
        <form style={theme} className='postform' onSubmit={postsubmit}>
        <label  className='label'>Title</label>
        <br/>
            <input className='title' type='text' name='title' placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            <br/>
            <label >Content</label>
            <br/>
            <input className='content' type='text' name='content' placeholder='content' onChange={(e)=>setContent(e.target.value)}/>
            <br/>
            <br/>
            <label >Image</label>
            <br/>
            <input  className='postimg' type='file' name='postimg' onChange={(e)=>setPostImg(e.target.files[0])}/>
            <br/>
            <br/>
            <button  type='submit'>Post</button>
        </form>
        <h1 style={theme}>Posts</h1>
        {
            postdata.map((dataa,index)=>{
            return(
                <>
              
                <div style={theme} className='postscontainer' key={index}>
                <h3>Posted by {dataa.author}</h3>
            <h2 className='poststitle' key={index}>{dataa.title}</h2>
            <h2 className='postscontent'>{dataa.content}</h2>
          
            <img className='postsimg' src={dataa.postimg} alt='img'></img>
            <br/>
            <button className='delete' onClick={deletee}>Delete Post</button>
            <br/>
            <br/>
            </div>
           
           
            
            </>
            )
           
        })}
       
    </>
  )
}

export default Posts
