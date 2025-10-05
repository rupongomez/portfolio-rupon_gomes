import React from 'react';
import WorkSwiper from '../Components/WorkSwiper';
import Title from '../Components/Title';
// import workBg from '../assets/workBackground.jpg';

const Works = () => {
    return (
        <div id='works'
            className="flex flex-col items-center h-[1080px] bg-center bg-cover bg-no-repeat mt-32" >
            <div className=' mb-32'>
                <Title title={"Projects"}></Title>
                <p>I’ve had the opportunity to build and contribute to these projects.</p>
            </div>

            <p className='font-bold mb-5'>Click on the image below which you want to see Live Demo</p>
            <div className='hover:scale-110  max-w-[649px] h-[500px]  items-center '>
                <WorkSwiper></WorkSwiper>
            </div>
        </div>
    );
};

export default Works;