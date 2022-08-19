import React, { useState } from 'react'
import axios from 'axios'
import './Email.css'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'
import ParticlesBg from 'particles-bg'

const Email = () => {

// States for setting the contact form details
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [details, setDetails] = useState("");

// Submit function to send email
let handleSubmit = async (e) => {
    e.preventDefault();

    const emailSend = {
        name: name,
        senderEmail: email,
        description: details
    }

    axios.post('http://localhost:8080', emailSend)
}

function notify() {
    toast.dark("Message Sent!");
}

  return (
        <div className='animate__animated animate__swing email-form-div'>
        {/* Email details form */}
        <form className='email-form' onSubmit={handleSubmit}>
            <input type='text' className='name-field' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type='email' className='email-field' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <textarea type='text' className='details-field' placeholder='Message' value={details} onChange={(e) => setDetails(e.target.value)}/>
            <button type='submit' className='bi bi-envelope-check' onClick={notify}>Talk Soon!</button>
        </form>
            <ParticlesBg color="#000000" type='cobweb' bg={true} />
            <ToastContainer />
        </div>
  )
}

export default Email