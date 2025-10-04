import React from 'react';
// import bg from '../assets/background.jpg';
import bg2 from '../assets/bg2.jpg';
import coding from '../assets/coding.jpg'

const AboutMe = () => {
    return (
        <div id='about-me'
            className=" w-full h-screen bg-center bg-cover bg-no-repeat   pb-36"
            style={{ backgroundImage: `url(${bg2})` }}
        >
            <h2 className='font-bold text-3xl mt-80 ml-32 border-radios h-fit w-fit p-2 px-5  bg-black mb-16'>About Me</h2>
            <div className='flex justify-around mx-20 items-center'>
                <div className='glass w-2/5  rounded-2xl p-5'>
                    <span className='text-blue-400'>{"<p>"}</span>
                    <h3 className='font-bold text-2xl '>Hello!</h3>
                    <p className=''> My name is Anthony Gomez, and I’m a passionate web developer specializing in modern web technologies such as HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. I enjoy building clean, responsive, and scalable applications that deliver real value. <br />

                        I’m a motivated learner who is always striving to improve, explore new tools, and push my skills further. My goal is to craft digital experiences that are not only functional but also user-friendly and impactful. <br />

                        When I’m not coding, I enjoy writing blogs, reading, and exploring creative hobbies like photography. I love looking at the world from new perspectives, which helps me bring fresh ideas into my work as a developer. <br />
                        <span className='text-blue-400'>{"</p>"}</span>
                    </p>
                </div>
                <div>
                    <img className='w-72' src={coding} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutMe;