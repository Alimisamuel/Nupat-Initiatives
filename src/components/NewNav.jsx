import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import Drawers from './Drawer'
import '../styles/Navbar.css'

const NewNav = () => {
  const [value, setValue] = useState()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <AppBar className='appbar' sx={{ background: '#fff' }}>
        <Toolbar sx={{ margin: '0 auto', width: '89%' }}>
          <Link to="/">
            <img src={require('../Logo.png')} alt="Logo" width={120} />
          </Link>
          {isMatch ? (
            <>
              <Typography></Typography>
              <Drawers />
            </>
          ) : (
            <>
              <Tabs
                sx={{ margin: 'auto' }}
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                className="color"
              >
                <Link
                  to="/"
                  style={{ textDecoration: 'none', color: 'black' }}
                  exact
                  activeclassname="active"
                >
                  <Tab label="Home" />
                </Link>
                <Link
                  to="/about"
                  style={{ textDecoration: 'none', color: 'black' }}
                  exact
                  activeclassname="active"
                >
                  <Tab label="About" />
                </Link>
                <Link
                  to="/blog"
                  style={{ textDecoration: 'none', color: 'black' }}
                  exact
                  activeclassname="active"
                >
                  <Tab label="Blog" />
                </Link>
                <Link
                  to="/contact"
                  style={{ textDecoration: 'none', color: 'black' }}
                  exact
                  activeclassname="active"
                >
                  <Tab label="Contact" />
                </Link>
              </Tabs>
              <Link
                to="/donate"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Button
                  variant="contained"
                  sx={[
                    { ml: 3.5, bgcolor: '#009c9c' },
                    (theme) => ({
                      '&:hover': {
                        bgcolor: '#047474',
                        color: 'white',
                      },
                    }),
                  ]}
                >
                  Donate
                </Button>
              </Link>
              {/* <Link to='/Donate' exact activeclassname='active'>    <button className="buttons">Donate</button></Link> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NewNav
