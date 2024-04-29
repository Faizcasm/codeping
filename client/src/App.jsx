import { useContext, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UserContextProvider from './context/user.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Dashboard from './components/Dashboard.jsx'
import Update from './components/Update.jsx'
import {toast,Toaster} from 'react-hot-toast'
import Profile from './Pages/Profile.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Service from './Pages/Service.jsx'
import Posts from './components/Posts.jsx'
import Payment from './Pages/Payment.jsx'
import Admin from './components/Admin.jsx'
import Admindash from './components/Admindash.jsx'
import Maps from './components/Maps.jsx'
function App() {
 
  return (
    <UserContextProvider>
   <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/update' element={<Update/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/post' element={<Posts/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/admindashboard' element={<Admindash/>}></Route>
          <Route path='/map' element={<Maps/>}></Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
