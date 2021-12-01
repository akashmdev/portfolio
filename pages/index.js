import * as React from 'react';
import Container from '@mui/material/Container';
import TitleSection from '../src/HomePage/TitleSection';
import LinkSection from '../src/HomePage/LinkSection';
import AboutSection from '../src/HomePage/AboutSection';
import SkillSection from '../src/HomePage/SkillSection';
import Projects from '../src/HomePage/Projects';

export default function Index() {
    return (
        <div>
            <TitleSection />
            <Container>
                <LinkSection />
                <AboutSection />
                <SkillSection />
                <Projects />
            </Container>
        </div>
    );
}
