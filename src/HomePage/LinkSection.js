import * as React from 'react';
import { IconButton, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '../Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ColorModeContext } from '../../pages/_app';

const LinkSection = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box data-aos="fade-left" data-aos-duration="1500" display={'flex'} justifyContent={'flex-end'} p={2}>
            <IconButton
                color="inherit"
                component={Link}
                href={'https://github.com/akashmdev/'}
                sx={{ ml: 1 }}
                target={'_blank'}
            >
                <GitHubIcon color={'#000'} onClick={() => {}} />
            </IconButton>
            <IconButton
                color="inherit"
                component={Link}
                href={'https://www.linkedin.com/in/akashmdev/'}
                sx={{ ml: 1 }}
                target={'_blank'}
            >
                <LinkedInIcon color={'#000'} onClick={() => {}} />
            </IconButton>
            <IconButton
                color="inherit"
                component={Link}
                href={'https://www.youtube.com/channel/UCmDUa3MXtXdTe6iIah-2vFQ'}
                sx={{ ml: 1 }}
                target={'_blank'}
            >
                <YouTubeIcon color={'#000'} onClick={() => {}} />
            </IconButton>
            <IconButton
                color="inherit"
                component={Link}
                href={'https://www.instagram.com/akash.mohapatra/'}
                sx={{ ml: 1 }}
                target={'_blank'}
            >
                <InstagramIcon color={'#000'} onClick={() => {}} />
            </IconButton>
            <IconButton
                color="inherit"
                component={Link}
                href={'mailto:mohapatra.akash99@gmail.com'}
                sx={{ ml: 1 }}
                target={'_blank'}
            >
                <GoogleIcon color={'#000'} onClick={() => {}} />
            </IconButton>
            <IconButton color="inherit" onClick={colorMode.toggleColorMode} sx={{ ml: 1 }}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    );
};

export default LinkSection;
