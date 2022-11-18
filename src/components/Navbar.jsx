import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import  "../styles/Navbar.css";

const Nav = ()=>{
    return(
        <>
        <div className="nav-container">
            <div className="container-nav-inner">
<Link to='/'>
<img src={require("../Logo.jpg")} alt="Logo" width={170} />
</Link>
<div  className="links">
    <Link to='/' exact activeclassname='active'>
        Home
    </Link>
    <Link to='/About' exact activeclassname='active'>
        About
    </Link>
    <Link to='mmm' exact activeclassname='active'>
        Blog
    </Link>
    <Link to='/'  exact activeclassname='active'>
        Contact
    </Link>
    
    <Link to='/Donate' exact activeclassname='active'>   <Button variant="contained"
sx={[
  { ml: 3.5, mt:3, bgcolor:'#009c9c' },
  (theme) => ({
    '&:hover': {
      bgcolor:'#047474',
      color:'white',
    },
  }),
]}
>Learn More</Button></Link>

</div>
</div>
        </div>
        </>
    )
};

export default Nav;