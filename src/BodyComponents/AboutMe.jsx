import React from 'react';
// import bg from '../assets/background.jpg';
import bg2 from '../assets/bg2.jpg';
import coding from '../assets/coding.jpg'

const AboutMe = () => {
    return (
        <div
            id="about-me"
            className="w-screen bg-center bg-cover bg-no-repeat pb-40 mb-52"
            style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h2 className='font-bold text-3xl mt-20 md:mt-40 lg:mt-80 mx-auto md:ml-16 lg:ml-32 border-radios h-fit w-fit p-2 px-5  bg-black mb-16'>About Me</h2>
            <div className='flex flex-col gap-10 md:flex-row justify-around mx-4 md:mx-10 lg:mx-20 items-center'>
                <div className='glass md:w-2/5  rounded-2xl p-5'>
                    <span className='text-blue-400'>{"<p>"}</span>
                    <h3 className='font-bold text-2xl '>Hello!</h3>
                    <p className=''> My name is Rupon Anthony Gomez, and I’m a passionate web developer specializing in modern web technologies such as HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. I enjoy building clean, responsive, and scalable applications that deliver real value. <br />

                        I’m a motivated learner who is always striving to improve, explore new tools, and push my skills further. My goal is to craft digital experiences that are not only functional but also user-friendly and impactful. <br />

                        When I’m not coding, I enjoy writing blogs, reading, and exploring creative hobbies like photography. I love looking at the world from new perspectives, which helps me bring fresh ideas into my work as a developer. <br />
                        <span className='text-blue-400'>{"</p>"}</span>
                    </p>
                </div>
                <div>
                    <img className='w-4/5 md:w-72  mx-auto rounded-2xl' src={coding} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutMe;