import  "./carousel.scss";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import Particles  from "react-tsparticles"
const WantToBe =()=>{
return(
    <>
    <div className ="crsl wantTo">
    <div class="title">
    <div class="title-inner">
      <div class="cafe">
        <div class="cafe-inner">Want to be a Volunteer?</div>
      </div>
    
      
    </div>
    
  </div>
  
  <Link to="/volunteer">  
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
>Join us</Button>
  </Link>

    </div>
    </>
)
}

export default WantToBe;