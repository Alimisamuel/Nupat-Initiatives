import React from "react";
import { TextField  } from "@mui/material";
// import Navbar from '../components/Navbar'
import AreYouReady from "../components/Carousels/AreYouReady";
import WantToBe from "../components/Carousels/WantToBe";
import Footer from "../components/Footer";
import NewNav from "../components/NewNav";
import "../styles/Volunteer.css";

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: "block",
  
//   }

// });

const Volunteer = () => {
    // const classes = useStyles()
  return (
    <>
      {/* <Navbar/>  */}
      <NewNav />
      <WantToBe />
      <div className="form" style={{ margin: "0 auto", width: "85%" }}>
        <h1 style={{marginTop:'40px'}}>Thanks for choosing to do this with us. Kindly fill the form below to get started</h1>
        <form style={{ marginTop: "40px" }}>
          <TextField
          className="form"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            fullWidth
            required
            color="secondary"
          />
          <TextField
          className="form"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            required
            color="secondary"
          />
          <TextField
      className="form"
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
            required
            color="secondary"
          />
          <TextField
      className="form"
            id="outlined-basic"
            label="Reasons for wanting to volunteer"
            variant="outlined"
            multiline
            rows={6}
            fullWidth
            required
            color="secondary"
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>

      <AreYouReady />
      <Footer />
    </>
  );
};

export default Volunteer;
