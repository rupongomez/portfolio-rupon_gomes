import React from 'react';

import Menu from './BodyComponents/Menu';
import AboutMe from './BodyComponents/AboutMe';
import Skills from './BodyComponents/Skills';
import Works from './BodyComponents/Works';


const Body = () => {

    // const htmlTag = ["<>"]

    return (
        <div className=' flex  flex-col'>
            <Menu />
            <AboutMe />
            <Skills />
            <Works />
        </div>
    );
};

export default Body;