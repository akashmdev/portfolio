import * as React from 'react';
import { keyframes } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TitleSection = () => {
    const gradiant = keyframes`
        0% {
            background-position: 0% 50%;
        }
            50% {
                background-position: 100% 50%;
        }
            100% {
                background-position: 0% 50%;
        }
    `;

    return (
        <Box
            sx={{
                background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                backgroundSize: '400% 400%',
                animation: `${gradiant} 15s ease infinite`,
                height: '500px',
            }}
        >
            <Box alignItems={'center'} display={'flex'} height={'100%'} justifyContent={'center'}>
                <Box>
                    <Typography component="h1" data-aos="fade-up" data-aos-duration="1000" variant="h4">
                        {'HELLO'}
                    </Typography>
                    <Typography
                        component="h1"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        variant="h1"
                    >
                        I'm <b>Akash Mohapatra</b>
                    </Typography>
                    <Typography data-aos="fade-up" data-aos-duration="3000" variant="h5">
                        Front end Web Developer
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TitleSection;
