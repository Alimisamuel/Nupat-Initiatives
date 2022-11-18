import  "./carousel.scss";

import { Link } from "react-router-dom";
import { Button} from "@mui/material";

// import Particles  from "react-tsparticles"
const AreYouReady =()=>{
return(
    <>
    <div className ="crsl areyou">
    <div class="title">
    <div class="title-inner">
      <div class="cafe">
        <div class="cafe-inner">Are you ready to support a great cause?</div>
      </div>
    
      
    </div>
    
  </div>
  <Link to="/Donate">
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
>Donate Now</Button>
  </Link>
    
    </div>
    {/* <Container maxWidth='true' sx={{
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

    </Container> */}
    </>
)
}

export default AreYouReady;