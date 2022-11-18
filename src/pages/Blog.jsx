import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, {useEffect} from "react";
import NewNav from "../components/NewNav";


const Blog = () => {
   
    const UseScriptComponent = ({url}, e) => {
        useEffect(() => {
            const script = document.createElement('script');
        
            script.src = url;
            script.async = true;
        
            document.body.appendChild(script);
        
            return () => {
              document.body.removeChild(script);
            }
          }, [url]);
        
          return null
        } 
    return(
        <>
        <NewNav/>
        
   <Container maxWidth='true' sx={{
      height:'5px',
      bgcolor:'#009C9C',
      mt:8
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

            <Container>
              <Grid Container>

            <Grid item xl={3} >
                    <Box style={{marginTop:'20px'}}>
                    <Box className="taggbox" style={{width:'100%', height: '100%'}} data-widget-id="113722" data-tags="false">
                    <UseScriptComponent url="https://widget.taggbox.com/embed-lite.min.js"  />
                    </Box>
                    </Box>
                    
                    </Grid>
            <Grid item xl={3} >
                    <Box style={{marginTop:'20px'}}>
                    <Box className="taggbox" style={{width:'100%', height: '100%'}} data-widget-id="114339" data-tags="false">
                    <UseScriptComponent url="https://widget.taggbox.com/embed-lite.min.js"  />
                    </Box>
                    </Box>
                    
                    </Grid>
                    </Grid>
                    </Container>
                    </>
    );
}

export default Blog;