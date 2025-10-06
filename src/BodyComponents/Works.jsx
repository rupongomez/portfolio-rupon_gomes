import React from 'react';
import WorkSwiper from '../Components/WorkSwiper';
import Title from '../Components/Title';
// import workBg from '../assets/workBackground.jpg';

const Works = () => {
    return (
        <div id='works'
            className="flex flex-col items-center md:h-[1080px] bg-center bg-cover bg-no-repeat mt-32" >
            <div className=' mb-32'>
                <Title title={"Projects"}></Title>
                <p className='text-center'>I’ve had the opportunity to build and contribute to these projects.</p>
            </div>

            <p className='font-bold mb-10 mx-3'>Click on the image below which you want to see Live Demo</p>
            <div className='hover:scale-110 w-4/5 h-4/5 md:w-3/5 md:h-3/5   items-center '>
                <WorkSwiper></WorkSwiper>
            </div>
        </div>
    );
};

export default Works;