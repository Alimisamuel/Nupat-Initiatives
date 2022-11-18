import React from 'react'
import '../styles/Home.css'
import Carousel from '../components/Carousels/Carousel'
// import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import NewNav from '../components/NewNav'
import AreYouReady from '../components/Carousels/AreYouReady'
import Gallery from '../components/Gallery'
import { Grid, Typography, Container, Paper } from '@mui/material'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import visit from '../Img/visitation.jpeg'
import project1000 from '../Img/project1000.jpeg'
import secondary from '../Img/Secondary.png'

// import WantToBe from "../components/Carousels/WantToBe";

const Home = () => {
  return (
    <>
      <NewNav />
      {/* <Navbar /> */}
      <Carousel />
      <Container
        sx={{
          mt: 7,
        }}
      >
        <Grid container spacing={4}>
          <Grid item lg={6} md={6}
          sx={{
            display:'flex',
          justifyContent:'right'
          }}>
            <Typography className='home_h1'
              variant="h1"
              sx={{
                fontSize: '40px',
                mr:4
              }}
            >
              WHO ARE WE?
            </Typography>
          
        
          
            
        </Grid>
        <Grid item lg={6} md={6}>
        <Typography
              variant="p"
              sx={{
                fontSize: '18px',
                mb: 4,
              }}
            >
              Nupat Initiatives is an ed-tech non profit foundation dedicated to
              empowering young minds with tech skills and resources to help them
              improve their standard of living.
              Our mission is in advocacyy of the UN’s Sustainable Development
              Goal 9 (SDG9): To foster innovation, build resilient
              infrastructure, promote inclusive and sustainable
              industrialization.
            </Typography>
        </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          mt: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <Typography
              variant="h1"
              sx={{
                fontSize: '40px',
                mt:2
              }}
            >
              OUR PROGRAMMES
            </Typography>
            <Box sx={{
              width:{
                lg:700,
                sm:400,
                
              }
            }}>
              <Box sx={{mt:2}}>
            <Typography variant="body"
            sx={{
              fontSize:'18px',
              mt:2
            }}>
              With the aim of giving back to the society and introducing
              technology to the society Nupat Initiative was launched and some
              programmes have been put in place to aid this vision. They
              include:
            </Typography></Box>
            </Box>
          </Grid>

          {/* Visitation and Empowerment */}
          <Grid
            item
            lg={6}
            md={6}
            sx={{
              mt: 6,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: '20px',
                color: '#009C9C',
              }}
            >
              VISITATION AND EMPOWERMENT OF ORPHANAGES AND LESS PRIVILEDGED
              COMMUNITIES
            </Typography>
            <Box sx={{
              mt:2
            }}>
            <Typography variant="body"sx={{
              mt:6,fontSize:'18px'
            }}>
              Nupat aims to spread the gospel of tech to everyone and as a means
              of giving back to the society visits are made to orphanges and
              they are empowered with skills and given incentives to kickstart
              their tech journey
            </Typography>
            </Box>
            <Box>
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
                Donate Now
              </Button>
            </Box>
          </Grid>
          <Grid item lg={6} md={6}
          sx={{
            display:'flex',
            justifyContent:'center',
            mt:6
          }}>
            <Paper elevation={24}
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              width:{
                lg:500,
                sm:400,
                xs:350
              },
              height:'350px'
            }}>
<img src={visit}  alt=" Visitations" className='pixx' width="400px" height='280px' />
            </Paper>
          </Grid>

          {/* Secondary school */}
          <Grid item lg={6} md={6}
          sx={{
            display:'flex',
            justifyContent:'center',
            mt:3
          }}>
            <Paper elevation={24}
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              width:{
                lg:500,
                sm:400,
                xs:350
              },
              height:'350px'
            }}>
<img src={secondary} alt="Secondary"  className='pixx' width="450px" height='350px' />
            </Paper>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sx={{
              mt: 3,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: '20px',
                color: '#009C9C',
              }}
            >
              SECONDARY SCHOOL HACKATHON
            </Typography>
            <Box sx={{
              mt:2 ,fontSize:'18px'
            }}>
            <Typography variant="body">
              The secondary school hackathon is a competition designed to
              encourage participants to apply their knowledge, creativity and
              skills towards solving a problem through a software that addresses
              the problems in the country
            </Typography></Box>
            <Box>
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
                Register
              </Button>
            </Box>
          </Grid>

          {/* Project 1000 */}

          <Grid
            item
            lg={6}
            md={6}
            sx={{
              mt: 3,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: '20px',
                color: '#009C9C',
              }}
            >
              PROJECT 1000
            </Typography>
            <Box sx={{
              mt:2,fontSize:'18px'
            }} >
            <Typography variant="body">
              With Project 1000 Nupat aims at building a community of blockchain
              developers by recruting and training one thousand individuals.
            </Typography>
            </Box>
            <Box>
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
                Coming Soon
              </Button>
            </Box>
          </Grid>
          <Grid item lg={6} md={6}
          sx={{
            display:'flex',
            justifyContent:'center',
          }}>
            <Paper elevation={24}
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              width:{
                lg:500,
                sm:400,
                xs:350
              },
              height:'350px'
            }}>
<img className='pixx' alt=" Project1000" src={project1000} width="400px" height='280px' />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Gallery />
      <AreYouReady />
      <Footer />
    </>
  )
}

export default Home
