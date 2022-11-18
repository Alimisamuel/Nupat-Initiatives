import React from 'react'
import NewNav from '../components/NewNav';
import Footer from '../components/Footer';
import AreYouReady from '../components/Carousels/AreYouReady';

import "../styles/Contact.css";
import { Container } from '@mui/system';

const Contact = () => {
  return (
   <>
   <NewNav/>

   <Container maxWidth='true' sx={{
      height:'5px',
      bgcolor:'#009C9C',
      mt:8
    }}>

    </Container>
    <Container maxWidth='true' sx={{
      height:'10px',
      bgcolor:'#80cece'
    }}>

    </Container>
    <Container maxWidth='true' sx={{
      height:'15px',
      bgcolor:'#c1ecec'
    }}>

    </Container>
<div  className="contact-container">
    <h1>We’d love to hear from you</h1>
    <p>Kindly reach out to us through any of these medium and we will be sure to get back to you</p>
    <div className="contact">
        <div style={{border:'2px solid #009c9c', padding:'40px 20px', borderRadius:'10px'}}>        <h3>Contact Info</h3>
        <p>Telephone: +2347013828158, +2349121031915</p>
        <p>Email: nupatinitiatives@gmail.com</p>
        <p>Address: 46, Community Road, Akoka, Lagos</p>
        </div>
    </div>
</div>

<AreYouReady/>
   <Footer/>
   </>
  )
}

export default Contact;