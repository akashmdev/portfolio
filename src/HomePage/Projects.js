import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import FitWallet from '../assets/fit_wallet.png';
import Image from 'next/image';

// const Label = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     color: theme.palette.text.secondary,
//     border: '1px solid black',
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

export default function Projects() {
    return (
        <Box data-aos="fade-up" data-aos-duration="1400" sx={{ width: '100%', minHeight: 829 }}>
            <Masonry columns={{ md: 3, sm: 2, xs: 1 }} spacing={2}>
                {itemData.map((item, index) => (
                    <Stack key={item.title}>
                        {/*<Label>{index + 1}</Label>*/}
                        <Image alt={'Feathersjs'} src={item.img} />
                        {/*<img*/}
                        {/*    alt={item.title}*/}
                        {/*    loading="lazy"*/}
                        {/*    src={`${item.img}?w=162&auto=format`}*/}
                        {/*    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}*/}
                        {/*    style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}*/}
                        {/*/>*/}
                    </Stack>
                ))}
            </Masonry>
        </Box>
    );
}

const itemData = [
    {
        img: FitWallet,
        title: 'Fit Wallet',
    },
    {
        img: FitWallet,
        title: 'Fit Wallet',
    },
    {
        img: FitWallet,
        title: 'Fit Wallet',
    },
    {
        img: FitWallet,
        title: 'Fit Wallet',
    },
];
