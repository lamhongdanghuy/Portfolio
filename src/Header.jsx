import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAnimatedText from './useAnimatedText';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animatedText = useAnimatedText([
        "Software Engineer",
        "Web Developer",
        "Database Engineer",
        "Full Stack Developer",
    ], 150);

    const burgerIcon = (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
    );

    const closeIcon = (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    );

    return (
        <header className="w-full bg-gray-100 shadow">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center py-7">
                    {/* Flex container for name and animated text */}
                    <div className="flex-initial flex flex-col items-center w-full md:w-1/3">
                        <h1 className="text-5xl font-bold leading-none text-gray-900">Huy Lam</h1>
                        <span className="text-2xl text-blue-500 mt-1 min-h-[32px]">{animatedText}</span>
                    </div>
                    {/* Burger icon for mobile view */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? closeIcon : burgerIcon}
                        </button>
                    </div>
                    {/* Navigation Links */}
                    <nav className={`${isMenuOpen ? "fixed inset-0 h-screen w-full z-50 flex flex-col items-center justify-center bg-gray-100" : "hidden"
                        } md:relative md:flex md:items-center md:justify-end md:bg-transparent md:space-x-4 lg:space-x-20 text-xl transition-transform duration-300 ease-in-out`}>
                        <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 left-5 md:hidden">
                            {closeIcon}
                        </button>
                        {/* NavLink components here */}
                        <NavLink to="/" className="text-gray-800 hover:text-blue-500 text-xl my-4 md:my-0 md:mx-2">Home</NavLink>
                        <NavLink to="/about" className="text-gray-800 hover:text-blue-500 text-xl my-4 md:my-0 md:mx-2">About</NavLink>
                        <NavLink to="/projects" className="text-gray-800 hover:text-blue-500 text-xl my-4 md:my-0 md:mx-2">Projects</NavLink>
                        <NavLink to="/contact" className="text-gray-800 hover:text-blue-500 text-xl my-4 md:my-0 md:mx-2">Contact</NavLink>
                        <a href='../public/one-page.pdf' download className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 my-4 md:my-0 md:ml-4">Download Resume</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
