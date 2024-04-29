import React, { useContext, useState } from 'react'
import Stripecheckout from 'react-stripe-checkout'
import Navbar from '../Navbar'
import axios from 'axios'
import './Pages.css'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/user'
import {toast} from 'react-hot-toast';
import Footer from '../Footer'
function Payment() {
    const {theme} =useContext(UserContext)
    const navigate=useNavigate()
    const [amount,setAmount] =useState(10)
     const makepayment=token=>{
        const body ={
          token,
          amount,
    
        }
        const headers={
          "Content-Type":"application/json"
        }
        return fetch(`https://codepingfaizan.vercel.app/payment`,{
          method:"POST",
          headers,
          body:JSON.stringify(body)
        }).then(response=>{
          console.log("RESPONSE",response);
          navigate('/')
          toast.success("Payment Success")
        })
        .catch(err=>{
          console.log("Error",err);
          toast.error("Payment Failed")
        })
    
      }
  return (
   <>
   <Navbar/>
   <h1 className='payment-top' style={theme}>Payments</h1>
   <div style={theme} className='payment-div'>
<h2 className='coffee'>Buy Me A Coffee</h2>
   <label>Enter Amount </label>
   <br/>
   <input type='number' name='amount' placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)}/>
   <br/>
   <br/>
    <Stripecheckout amount={amount*100} currency='inr' name='BUYCOFFEEFORFAIZAN' stripeKey='pk_test_51OgMFHSIQTzOyhRecoYt6vmBEtcpiz9pG5OcGVes2HZRr7uQY8jSEk3TyihOXXSec5GX23tKGwrYNA1Kj4aO7wHK00iCODBoV8'
     token={makepayment} >
        <button>Pay {amount}</button>
    </Stripecheckout>
    <br/>
    <br/>
    <h1>Secure Payments</h1>
    <div className='pa'>
    <br/>
    <p>
    As businesses scale and transaction volumes increase, the stakes surrounding payment security are growing exponentially. According to a report by Statista, the average cost of a data breach in the US has reached nearly US$9.5 million. Beyond the immediate financial implications, a breach can damage customers' trust in a business.

Below, we'll explain the nuances of secure payment systems, diving into their core components and offering insights
 into how to create a robust payment environment. We'll cover what businesses need to know
  about secure payment systems and their components, as well as what it takes to create both a highly secure 
  payment experience for customers and a highly secure payment backend for the business. Whether you're in retail,
   tech or any other industry, understanding and implementing these strategies can redefine your approach, ensuring
    secure transactions for both your business and your customers.
    What's in this article?

What are secure payment systems?
Components of secure payment systems
Encryption
Payment gateways
Tokenisation
Multi-factor authentication (MFA)
Digital wallets
EMV chip cards
Fraud detection systems
PCI DSS compliance
Bank-specific systems
Why using secure payment systems is so important
What are secure payment systems?
A secure payment system (SPS) is a specialised infrastructure that ensures the safe processing and transmission of financial transactions, particularly in digital spaces, and is important for mitigating risks such as fraud and unauthorised access.


</p>
<br/>
    </div>
    </div>
    <h1 style={theme}>We Provide Secure Services</h1>
    <div className='imgdiv'><img src='https://media.giphy.com/media/Nc50m8gBSZUlO/giphy.gif' alt='img'></img></div>
    <Footer/>
   </>
  )
}

export default Payment
