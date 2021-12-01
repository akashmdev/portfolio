import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const customTheme = React.useMemo(() => theme(mode), [mode]);
    useEffect(() => {
        AOS.init({ once: true });
        const type = localStorage.getItem('theme-type') || 'dark';
        setMode(type);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme-type', mode);
    }, [mode]);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Akash Mohapatra : Portfolio</title>
                <meta content="initial-scale=1, width=device-width" name="viewport" />
            </Head>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={customTheme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
