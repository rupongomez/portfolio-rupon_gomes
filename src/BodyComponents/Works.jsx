import React from 'react';
import WorkSwiper from '../Components/WorkSwiper';
import Title from '../Components/Title';
// import workBg from '../assets/workBackground.jpg';

const Works = () => {
    return (
        <div id='works'
            className="flex flex-col items-center h-[1080px] bg-center bg-cover bg-no-repeat mt-32" >
            <Title title={"Projects"}></Title>

            <div className=' max-w-[649px] h-[500px]  items-center my-auto'>
                <WorkSwiper></WorkSwiper>
            </div>
        </div>
    );
};

export default Works;