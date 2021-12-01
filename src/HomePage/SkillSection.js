import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import JS from '../assets/js.svg';
import TS from '../assets/ts.svg';
import HTML from '../assets/html_5.svg';
import CSS from '../assets/css_3.svg';
import NODE from '../assets/node_js.svg';
import REACT from '../assets/react.svg';
import REDUX from '../assets/redux.svg';
import Bootstrap from '../assets/bootstrap.svg';
import Quill from '../assets/quill.svg';
import WhiteQuill from '../assets/white_quill.svg';
import Graph from '../assets/graph_js.svg';
import MUI from '../assets/materil_ui.svg';
import PrimeReact from '../assets/primereact_logo.svg';
import SocketIo from '../assets/socket_io.svg';
import WhiteSocketIo from '../assets/white_socket_io.svg';
import NextImg from '../assets/next_js.svg';
import NextImgWhite from '../assets/next_js_white.svg';
import Electron from '../assets/electron.svg';
import Feathersjs from '../assets/feathersjs.svg';
import FeathersjsWhite from '../assets/feathersjs_white.svg';
import Expressjs from '../assets/expressjs.svg';
import ExpressjsWhite from '../assets/expressjs_white.svg';
import MongoDB from '../assets/mongooDb.svg';
import MongoDBWhite from '../assets/mongooDb_white.svg';
import Mongoose from '../assets/mongoose.svg';
import Git from '../assets/git.svg';
import ToolBox from '../assets/jb_toolbox_app.svg';
import IdeaEditor from '../assets/jb_IntelliJ IDEA.svg';
import Sublime from '../assets/sublime_text.svg';
import VsCode from '../assets/vs_code.svg';
import Ubuntu from '../assets/ubuntu.svg';
import { useTheme } from '@mui/material';

const SkillSection = () => {
    const theme = useTheme();
    return (
        <Box mt={4}>
            <Typography component="h1" data-aos="fade-up" data-aos-duration="1000" gutterBottom variant="h5">
                {'Skills'}
            </Typography>
            <Box alignItems={'center'} data-aos="fade-up" data-aos-duration="1200" display={'flex'}>
                <Box width={100}>
                    <Typography component="h1" gutterBottom variant="body1">
                        {'Languages'}
                    </Typography>
                </Box>
                <Box display={'flex'} flexWrap={'wrap'} ml={2}>
                    <Box pr={1}>
                        <Image alt={'HTML'} src={HTML} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'CSS'} src={CSS} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'JS'} src={JS} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'NODE'} src={NODE} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'TS'} src={TS} />
                    </Box>
                </Box>
            </Box>
            <Box alignItems={'center'} data-aos="fade-up" data-aos-duration="1400" display={'flex'}>
                <Box width={100}>
                    <Typography component="h1" gutterBottom variant="body1">
                        {'Libraries'}
                    </Typography>
                </Box>
                <Box display={'flex'} flexWrap={'wrap'} ml={2}>
                    <Box pr={1}>
                        <Image alt={'REACT'} src={REACT} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'REDUX'} src={REDUX} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'Bootstrap'} src={Bootstrap} />
                    </Box>
                    <Box my={0.5} pr={1}>
                        <Image
                            alt={'Quill'}
                            height={28}
                            src={theme.palette.mode === 'dark' ? WhiteQuill : Quill}
                            width={'40px'}
                        />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'Graph'} height={34} src={Graph} width={34} />
                    </Box>
                    <Box my={0.5} pr={1}>
                        <Image alt={'MUI'} height={26} src={MUI} width={26} />
                    </Box>
                    <Box my={0.5} pr={1}>
                        <Image alt={'PrimeReact'} height={26} src={PrimeReact} width={26} />
                    </Box>
                    <Box my={0.5} pr={1}>
                        <Image
                            alt={'SocketIo'}
                            height={26}
                            src={theme.palette.mode === 'dark' ? WhiteSocketIo : SocketIo}
                            width={26}
                        />
                    </Box>
                </Box>
            </Box>
            <Box alignItems={'center'} data-aos="fade-up" data-aos-duration="1400" display={'flex'}>
                <Box width={100}>
                    <Typography component="h1" gutterBottom variant="body1">
                        {'Frameworks'}
                    </Typography>
                </Box>
                <Box display={'flex'} flexWrap={'wrap'} ml={2}>
                    <Box pr={1}>
                        <Image
                            alt={'Feathersjs'}
                            height={28}
                            src={theme.palette.mode === 'dark' ? FeathersjsWhite : Feathersjs}
                            width={28}
                        />
                    </Box>
                    <Box pr={1}>
                        <Image
                            alt={'Next'}
                            height={32}
                            src={theme.palette.mode === 'dark' ? NextImgWhite : NextImg}
                            width={'40px'}
                        />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'Electron'} height={28} src={Electron} width={28} />
                    </Box>

                    <Box pr={1}>
                        <Image
                            alt={'Expressjs'}
                            height={34}
                            src={theme.palette.mode === 'dark' ? ExpressjsWhite : Expressjs}
                            width={70}
                        />
                    </Box>
                </Box>
            </Box>
            <Box alignItems={'center'} data-aos="fade-up" data-aos-duration="1400" display={'flex'}>
                <Box width={100}>
                    <Typography component="h1" gutterBottom variant="body1">
                        {'Databases'}
                    </Typography>
                </Box>
                <Box display={'flex'} flexWrap={'wrap'} ml={2}>
                    <Box pr={1}>
                        <Image
                            alt={'MongoDBWhite'}
                            height={36}
                            src={theme.palette.mode === 'dark' ? MongoDBWhite : MongoDB}
                            width={75}
                        />
                    </Box>
                    <Box mt={0.5} pr={1}>
                        <Image alt={'Mongoose'} height={36} src={Mongoose} width={80} />
                    </Box>
                </Box>
            </Box>
            <Box alignItems={'center'} data-aos="fade-up" data-aos-duration="1400" display={'flex'}>
                <Box width={100}>
                    <Typography component="h1" gutterBottom variant="body1">
                        {'Dev Env.'}
                    </Typography>
                </Box>

                <Box display={'flex'} flexWrap={'wrap'} ml={2}>
                    <Box pr={1}>
                        <Image alt={'Git'} src={Git} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'Ubuntu'} height={30} src={Ubuntu} width={30} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'IdeaEditor'} src={IdeaEditor} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'Sublime'} src={Sublime} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'VsCode'} src={VsCode} />
                    </Box>
                    <Box pr={1}>
                        <Image alt={'ToolBox'} src={ToolBox} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SkillSection;
