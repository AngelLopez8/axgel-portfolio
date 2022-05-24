import React from 'react';

import Intro from './Sections/Intro';
import About from './Sections/About';
import Services from './Sections/Services';
import Projects from './Sections/Projects/Projects';
import Certificates from './Sections/Certificates/Certificates';

const Home = () => {
    return (
        <>
            <Intro />
            <Services />
            <About />
            <Projects />
            <Certificates />
        </>
    );
}

export default Home;