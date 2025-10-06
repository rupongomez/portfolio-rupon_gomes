import React from 'react';
import Title from '../Components/Title';

const Blog = () => {
    return (
        <div id='blogs' className=' mt-20'>
            <Title title={"Blogs"}></Title>
            <p className='text-center'>My thoughts on technology and business, welcome to subscribe</p>

            <div className='gap-5 my-20 '>
                <div className='md:flex gap-20 md:w-4/6 mx-auto p-5 border-b border-t '>
                    <div>
                        {/* img */}
                        <img className='h-30 w-60' src="https://cdn-kdnkj.nitrocdn.com/qYmjBhqTAqJorzweuYZZmpnSbrlDEHHj/assets/images/optimized/rev-613dab3/www.academyoflearning.com/wp-content/uploads/2022/07/AdobeStock_107155766.jpeg" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        {/* text */}
                        <h3 className='font-bold text-3xl underline mb-2'>How can someone become a web developer?</h3>
                        <p>Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</p>
                        <button className='underline font-bold '>Read More {">>"}</button>
                    </div>
                </div>
                <div className='flex gap-5  justify-center mt-20'>
                    <button className='btn border-white rounded-full bg-black'>View More</button>
                    <button className='btn bg-white rounded-full text-black'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;