import { Button, Container } from "@mui/material";

import  "./carousel.scss";
// import Particles  from "react-tsparticles"
const CarouselAbout =()=>{
return(
    <>
    <div className =" crsl-abt">
    <div class="title">
    <div class="title-inner">
      <div class="cafe">
        <div class="cafe-inner">To train and empower young talents </div>
      </div>
      <div class="mozart">
        <div class="mozart-inner">with the knowledge of digital space</div>
      </div>
      
    </div>
    
  </div>
<Button variant="contained"
sx={[
  { ml: 3.5, mt:3, bgcolor:'#009c9c' },
  (theme) => ({
    '&:hover': {
      bgcolor:'#047474',
      color:'white',
    },
  }),
]}
>Volunteer Today</Button>
    
    </div>
    <Container maxWidth='true' sx={{
      height:'5px',
      bgcolor:'#009C9C'
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
    
    </>
)
}

export default CarouselAbout;