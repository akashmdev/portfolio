import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = (mode = 'dark') => {
    return createTheme({
        palette: {
            mode,
            primary: {
                main: '#556cd6',
            },
            secondary: {
                main: '#19857b',
            },
            error: {
                main: red.A400,
            },
        },
        typography: {
            fontFamily: "'Cinzel', sans-serif",
            h1: {
                // fontWeight: 500,
                fontSize: '70px',
                // lineHeight: '42px',
                // letterSpacing: '-0.00833em',
                '@media(max-width: 800px)': {
                    fontSize: '50px',
                },
                '@media(max-width: 500px)': {
                    fontSize: '30px',
                },
            },
        },
        '@global': {
            body: {
                transition: 'all 0.3s linear',
            },
        },
    });
};

export default theme;
