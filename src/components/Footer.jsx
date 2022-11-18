import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from '@mui/system'
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid, Typography } from '@mui/material'

const Nav = () => {
  return (
    <>
      <Container
        maxWidth="true"
        sx={{
          height: '15px',
          bgcolor: '#c1ecec',
          mt: 5,
        }}
      ></Container>

      <Container
        maxWidth="true"
        sx={{
          height: '10px',
          bgcolor: '#80cece',
        }}
      ></Container>
      <Container
        maxWidth="true"
        sx={{
          height: '5px',
          bgcolor: '#009C9C',
        }}
      ></Container>

      <Container
        maxWidth="true"
        sx={{
          backgroundColor: '#0b9b9b',
  
        }}
      >
      <Grid container spacing={2}sx={{
        pt:5,
        pb:2
      }}>
        <Grid item lg={2} xs={12} sx={{
          display:{
            xs:'flex'
          },
          justifyContent:'center',
          alignContent:'center'
        }}>
        <Link to='/'>
<img src={require("../Img/footerLogo.png")} alt="Logo" width={170} />
</Link>
        </Grid>
        <Grid item lg={6} sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItem:'center'
        }}>
          <Grid container spacing={2} >
            <Grid item lg={4} xs={6}
            sx={{textAlign:'center'}}>
              <Typography variant='h6'
              sx={{
                fontSize:'17px'
              }}>Quick Links</Typography>
              <Link to="/">
                <Typography varaint="body" sx={{color:'black', mb:0.5}}>Home</Typography>
              </Link>
              <Link to="/">
                <Typography varaint="body" sx={{color:'black', mb:0.5}}>Faq</Typography>
              </Link>
              <Link to="/donate">
                <Typography varaint="body" sx={{color:'black', mb:0.5}}>Donate</Typography>
              </Link>
            </Grid>
            <Grid item lg={4} xs={6} sx={{textAlign:'center'}}>
            <Typography variant='h6'   sx={{
                fontSize:'17px'
              }}>What we do</Typography>
                <Link to="/">
                <Typography varaint="body" sx={{color:'black', mb:0.5}}>Hackaton</Typography>
              </Link>
              <Link to="/">
                <Typography varaint="body" sx={{color:'black', mb:0.5}}>Project 1000</Typography>
              </Link>
              <Link to="/">
                <Typography varaint="body" sx={{color:'black' , mb:0.5}}>Orphanage Visits</Typography>
              </Link>
            </Grid>
            <Grid item lg={4} xs={6}sx={{textAlign:'center'}}>
            <Typography variant='h6'   sx={{
                fontSize:'17px',
                mb:1
              }}>About us</Typography>
                <Link to="/about">
                <Typography varaint="body" sx={{color:'black', mb:0.5}}>About Us</Typography>
              </Link>
              <Link to="/">
                <Typography varaint="body" sx={{color:'black', mb:0.5}}>Tustees</Typography>
              </Link>
              <Link to="/">
                <Typography varaint="body" sx={{color:'black', mb:0.5}}>Team</Typography>
              </Link>
              <Link to="/contact">
                <Typography varaint="body" sx={{color:'black', mb:0.5}}>Contact Us</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} xs={12} sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItem:'center'
        }}>
          <Grid container 
          sx={{
            textAlign:'center'
          }}>
            <Grid item lg={12}>
              <Typography variant='p'>
              46, Community Road,Akoka Lagos
              </Typography>
            </Grid>
            <Grid item lg={12}>
             
                <a href='https://www.instagram.com/nupatinitiatives/?next=%2F' target='blank'>
              <InstagramIcon
              sx={{
                fontSize:'27px',
                mr:2,color:'black'
              }}
              />
              </a>
              <a href='https://www.linkedin.com/company/nupat-initiative/' target='blank'>
              <LinkedInIcon sx={{
                fontSize:'27px',
                mr:2,color:'black'
              }}/>
              </a>
              <a href='https://twitter.com/nupatinitiative' target='blank'>

        
              <TwitterIcon sx={{
                fontSize:'27px',
                mr:2, color:'black'
              }}/>
                    </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Container>
      <Container
        maxWidth="true"
        sx={{
          backgroundColor: '#022323',
          height: '40px',
          textAlign: 'center',
          color: 'white',
          pt: 1,
        }}
      >
        <Typography variant="body1" sx={{
          fontSize:'13px'
        }}>
          Copyright &#169; 2022 NDEDI. All Rights Reserved
        </Typography>
      </Container>
    </>
  )
}

export default Nav
