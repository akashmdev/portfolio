import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import {IconButton, keyframes, useTheme} from "@mui/material";
import {ColorModeContext} from "./_app";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TitleSection from "../src/HomePage/TitleSection";

export default function Index() {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <div>
        <TitleSection />
        <Container>
            <Box display={'flex'} justifyContent={'flex-end'} p={2}>
                <IconButton sx={{ ml: 1 }} color="inherit" data-aos="fade-left" data-aos-duration="500">
                    <GitHubIcon onClick={()=>{}} color={'#000'} />
                </IconButton>
                <IconButton sx={{ ml: 1 }} color="inherit" data-aos="fade-left" data-aos-duration="700">
                    <LinkedInIcon onClick={()=>{}} color={'#000'} />
                </IconButton>
                <IconButton sx={{ ml: 1 }} color="inherit" data-aos="fade-left" data-aos-duration="900">
                    <YouTubeIcon onClick={()=>{}} color={'#000'} />
                </IconButton>
                <IconButton sx={{ ml: 1 }} color="inherit" data-aos="fade-left" data-aos-duration="1100">
                    <InstagramIcon onClick={()=>{}} color={'#000'} />
                </IconButton>
                <IconButton sx={{ ml: 1 }} color="inherit" data-aos="fade-left" data-aos-duration="1300">
                    <GoogleIcon onClick={()=>{}} color={'#000'} />
                </IconButton>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit" data-aos="fade-left" data-aos-duration="1500">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>

        </Container>
      <Box sx={{ my: 4 }}>

        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5 example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </div>
  );
}
