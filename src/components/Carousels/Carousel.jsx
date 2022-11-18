import { Button, Container } from "@mui/material";

import  "./carousel.scss";


const Carousel =()=>{

return(
    <>
    <div className ="crsl">
      <Container>
    <div class="title">
    <div class="title-inner">
      <div class="cafe">
        <div class="cafe-inner">Raising and expanding opportunities for </div>
      </div>
      <div class="mozart">
        <div class="mozart-inner">the less priviledged</div>
      </div>
      
    </div>
    
  </div>
<Button variant="contained"
sx={[
  { ml: 4.8, mt:3, bgcolor:'#009c9c' },
  (theme) => ({
    '&:hover': {
      bgcolor:'#047474',
      color:'white',
    },
  }),
]}
>Learn More</Button>
</Container>

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

export default Carousel;