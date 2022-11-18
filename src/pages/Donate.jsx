import { Button, Container, Grid, Typography, Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import zenith from '../Img/zenith.jpg'
import { Link } from 'react-router-dom'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
// import Navbar from '../components/Navbar'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import AreYouReady from '../components/Carousels/AreYouReady'
import WantToBe from '../components/Carousels/WantToBe'
import Footer from '../components/Footer'
import NewNav from '../components/NewNav'
import smile from '../Img/smile2.png'
import '../styles/Gallery.css'

// using gallery css styles for the resposiveness

const Donate = () => {
  const [value, setValue] = useState('1225320690')
  const [copied, setCopied] = useState(false)
  return (
    <>
      <NewNav />
      <AreYouReady />
      <Container sx={{
        mt:5
      }}>
        <Grid container>
          <Grid item lg={6}>
            <Box>
              <Typography variant="h5">
                Send your cash donations to the account details below
              </Typography>
              <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Typography variant="h6">
                Bank Name: <span style={{ color: '#009C9C' }}>Zenith Bank</span>
              </Typography>
              <img src={zenith} alt='bank-logo' style={{
              
              }} width="40px" /></Box>
            </Box>

            <Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center', mt:2}}>
              <Typography variant="h6">
                Account Number:{' '}
                <span style={{ color: '#009C9C' }}>1225320690</span>
              </Typography>
              <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                <Button>
                  <ContentCopyIcon sx={{color:'#009c9c'}} />
                </Button>
              </CopyToClipboard>

              {copied ? (
                <span style={{ color: '#047474' }}>Copied.</span>
              ) : null}
            </Box>
            <Box sx={{mt:2}}>
              <Typography variant="h6">
                Account Name:
                <span style={{ color: '#009C9C' }}>
                  Nupat Digital Empowerment and Development Initiatives
                </span>
              </Typography>
            </Box>
            
            <Box sx={{mt:3}}>
            <Typography variant="h4">For other gifts and donations</Typography>
              <Link to="/Contact">
                <Button
                  variant="contained"
                  sx={[
                    { mt: 3, bgcolor: '#009c9c' },
                    (theme) => ({
                      '&:hover': {
                        bgcolor: '#047474',
                        color: 'white',
                      },
                    }),
                  ]}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={6} sx={{
            overflow:'hidden'
          }} >
          <img className='smile_img' alt='happy kid' src={smile} width="500px" />
          </Grid>
        </Grid>
      </Container>

      <WantToBe />

      <div className="who-we-are"></div>
      <Footer />
    </>
  )
}

export default Donate
