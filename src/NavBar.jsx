import React from 'react';
import Search from './Components/Search';
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";



const NavBar = () => {


    const links = [
        <li key="1"><a>Home</a></li>,
        <li key="2"><a>Blogs</a></li>,
        <li key="3"><a><Search /></a></li>,
        <li key="4"><a><FaGithub />Github</a></li>,
        <li key="5"><a className='text-green-500' href='https://www.fiverr.com/rupon_gomes/'>Fivver</a></li>,
        <li key="6"><a><FaDownload />Download Resume</a></li>
    ];

    const siteTitle = ["<Rupon_Gomes/>"]

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">{siteTitle}</a>
            </div>
            <div className="navbar-center hidden lg:flex navbar-end">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;