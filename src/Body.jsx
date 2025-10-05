import React from 'react';

import Menu from './BodyComponents/Menu';
import AboutMe from './BodyComponents/AboutMe';
import Skills from './BodyComponents/Skills';
import Works from './BodyComponents/Works';
import Blog from './BodyComponents/Blog';
import Contact from './BodyComponents/Contact';


const Body = () => {

    // const htmlTag = ["<>"]

    return (
        <div className=' flex flex-col'>
            <Menu />
            <AboutMe />
            <Skills />
            <Works />
            <Blog />
            <Contact />
        </div>
    );
};

export default Body;