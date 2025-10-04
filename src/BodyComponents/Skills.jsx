import React from 'react';
import codingBg from '../assets/codingBg.jpg';
import { FaDatabase } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";


const Skills = () => {
    return (
        <div
            id='skills'
            className="w-full h-screen bg-center bg-cover bg-no-repeat mt-0"
            style={{ backgroundImage: `url(${codingBg})` }}
        >
            {/* glass overlay */}
            <div className="glass-effect w-full h-full flex items-center justify-center p-8">
                {/* Put your skills content here */}
                <div className="max-w-4xl text-white text-center">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 ">{"<Skills/>"}</h2>
                    <p className="mb-2">“I’m dedicated to lifelong learning and constant improvement.”</p>
                    <div className='flex gap-10 mt-10'>
                        {/* frontend */}
                        <div className='bg-[#464646] flex flex-col gap-2 text-center items-center p-2 border-l-4 rounded-xl'>
                            <BsBrowserChrome className='text-2xl' />
                            <h3 className='font-bold text-xl'>Frontend Development</h3>
                            <p>React.js, Next.js, JavaScript,<br /> Tailwind
                            </p>
                        </div>
                        <div className='bg-[#464646] flex flex-col gap-2 text-center items-center p-2 border-l-4 rounded-xl'>
                            <FaDatabase className='text-2xl' />
                            <h3 className='font-bold text-xl'>Backend & Database</h3>
                            <p>Node.js, Express.js, MongoDB, <br /> REST API
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-15 mt-10'>
                        <div>
                            <img className='w-22' src="https://img.icons8.com/?size=100&id=23028&format=png&color=E54F26" alt="" />
                            <h3>HTML</h3>
                        </div>
                        <div>
                            <img className='' src="https://img.icons8.com/?size=100&id=38272&format=png&color=0C73B8" alt="" />
                            <h3>CSS</h3>
                        </div>
                        <div>
                            <img className='w-22 ' src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="" />
                            <h3>Javascript</h3>
                        </div>
                        <div>
                            <img className='w-22 ' src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000" alt="" />
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;