import React, { useEffect, useState } from 'react';
import { AiOutlineAppstore } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { FaTv } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import profile from '../../src/assets/profile2.JPEG'
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidBriefcase } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";


const Menu = () => {

    const technologies = ["Html", "CSS", "JavaScript", "React"]

    const navItems = [
        { id: 'menu', icon: <AiOutlineAppstore /> },
        { id: 'about-me', icon: <GoPerson /> },
        { id: 'skills', icon: <>{'<>'}</> },
        { id: 'tv', icon: <FaTv /> },
        { id: 'blog', icon: <FaEdit /> },
        { id: 'contact', icon: <IoIosMail /> },
    ];

    const [activeId, setActiveId] = useState(() => {
        if (typeof window !== 'undefined' && window.location.hash) {
            return window.location.hash.replace('#', '');
        }
        return 'menu';
    });

    useEffect(() => {
        // quick debug: list the section ids we will try to observe
        const ids = navItems.map(i => i.id);
        ids.forEach(id => {
            if (!document.getElementById(id)) {
                // warn when a target id is missing
                console.warn(`[Menu] no element with id="${id}" found in DOM`);
            }
        });

        // If nothing to observe, bail out
        const available = ids.map(id => document.getElementById(id)).filter(Boolean);
        if (available.length === 0) return;

        const observerOptions = {
            root: null,
            // adjust this to account for your fixed nav height.
            // If your fixed nav is ~64px tall, use '-64px' etc.
            rootMargin: '0px 0px -50% 0px',
            threshold: 0.25,
        };

        const observer = new IntersectionObserver((entries) => {
            // handle entries: pick the entry with largest intersectionRatio
            const visible = entries
                .filter(e => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (visible) {
                // set activeId (fast and simple)
                setActiveId(visible.target.id);
                // Uncomment to also update URL hash while scrolling:
                // history.replaceState(null, '', `#${visible.target.id}`);
            }
        }, observerOptions);

        // observe only elements that actually exist
        available.forEach(el => observer.observe(el));

        return () => observer.disconnect();
        // empty deps: navItems is static here; avoid re-creating observer each render
    }, []);

    return (
        <div className='mt-16 mb-32'>
            <div className='flex'>
                <ul className='fixed top-64 z-10 flex flex-col gap-4 border-2 w-fit h-fit p-3 rounded-full ml-5 items-center'>
                    {navItems.map(item => {
                        const isActive = item.id === activeId;
                        const base = 'border rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors';
                        const activeClass = 'bg-white  text-black border-white';
                        const inactiveClass = ' text-white';
                        return (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => setActiveId(item.id)}
                                    aria-current={isActive ? 'true' : undefined}
                                    className={`${base} ${isActive ? activeClass : inactiveClass}`}
                                >
                                    {item.icon}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <section id='menu' className='mx-auto'>
                    <h2 className='font-bold text-5xl text-center mb-16'>Developer</h2>

                    <div className='flex items-center justify-around mx-36 lg: gap-15 '>
                        {/* info card */}
                        <div className="card  w-80 h-[420px] shadow-sm  border-radios flex flex-col items-center justify-center">
                            <div className='flex flex-col justify-center my-auto '>
                                <figure>
                                    <img
                                        className='w-30 h-30 rounded-full'
                                        src={profile}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body mb-0">
                                    <h2 className=" text-center font-bold text-2xl">Rupon Gomes</h2>
                                    <div className='flex flex-col'>
                                        <p className='flex items-center gap-1'><IoIosMail /> rupongomez@gmail.com</p>
                                        <p className='flex items-center gap-1'><IoLocationOutline />Bangladesh</p>
                                        <p className='flex items-center gap-1'><BiSolidBriefcase />Full-time / Freelancer</p>
                                        <p className='flex items-center gap-1'><FaGlobe />www.rupongomez.com</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        {technologies.map(technology => <div className="badge badge-primary rounded-full ">{technology}</div>)}
                                    </div>
                                    <button className='btn hover:bg-white w-fit px-5 rounded-full mt-2 mx-auto'>Download CV</button>
                                </div>
                            </div>
                        </div>

                        {/* Center title and text */}
                        <div className='md:max-w-xl lg:max-w-2/5'>
                            {"<h1>"}
                            <h1 className='font-bold text-4xl ml-5'>Hey <br /> I'm Rupon, <br /> Full-Stack Developer
                                <span className='text-sm'> {"</h1>"}</span> </h1>
                            <br />

                            {"<p>"}
                            <p className='ml-5 '>
                                I help businesses grow by building modern, scalable, and user-friendly web applications. If you’re looking for a developer who delivers clean code and real results, you’re in the right place.
                            </p>
                            {"</p>"} <br />
                            <button className='btn btn-ghost ml-5 text-2xl'> Let's Talk <IoIosMail className='bg-gray-500 rounded-full w-6 p-1' /></button>
                        </div>

                        {/* Experience */}
                        <div className='bg-white text-black h-72 py-10 px-6 w-48 rounded-[60px] flex flex-col justify-center gap-5'>
                            <p className='font-bold text-5xl flex items-center gap-2 text-left'>3<span className='text-sm  items-center'>Programming Language </span></p>
                            <p className='font-bold text-5xl flex items-center gap-2 justify-center'>9<span className='text-sm items-center'>Development Tools</span></p>
                            <p className='font-bold text-5xl flex items-center gap-2 justify-center'>4<span className='text-sm  items-center'>Years of Experience</span></p>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Menu;