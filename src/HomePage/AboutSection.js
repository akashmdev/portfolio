import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutSection = () => {
    return (
        <Box data-aos="fade-up" data-aos-duration="1000" mt={4}>
            <Typography component="h1" gutterBottom variant="h5">
                {'About'}
            </Typography>
            <Typography gutterBottom variant="body1">
                {
                    'Hello Guys! I am Akash Mohapatra. I am a third-year undergraduate student at KIIT University. I am a Front End Developer with industry experience in building websites and Web applications. I specialize in JavaScript and have professional experience in React.Js and Next.Js'
                }
            </Typography>
        </Box>
    );
};

export default AboutSection;
