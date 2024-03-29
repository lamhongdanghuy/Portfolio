import React from 'react';
import { NavLink } from "react-router-dom";
import useAnimatedText from './useAnimatedText';

function Header() {
    const animatedText = useAnimatedText([
        "Software Engineer",
        "Web Developer",
        "Database Engineer",
        "Full Stack Developer",
    ], 150);

    return (
        <header className="w-full bg-gray-100 shadow">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center py-7">
                    {/* Flex container for name and animated text */}
                    <div className="flex-initial flex items-center space-x-24">
                        <h1 className="text-5xl font-bold leading-6 text-gray-900">Huy Lam</h1>
                        {/* Additional container or span for the animated text to separate from the title */}
                        <span className="text-2xl text-blue-700">{animatedText}</span>
                    </div>
                    <nav className="flex w-4/6 justify-end space-x-20 text-xl">
                        <NavLink to="/" className="text-gray-800 hover:text-blue-500 flex-1 text-center" end>Home</NavLink>
                        <NavLink to="/about" className="text-gray-800 hover:text-blue-500 flex-1 text-center">About</NavLink>
                        <NavLink to="/resume" className="text-gray-800 hover:text-blue-500 flex-1 text-center">Resume</NavLink>
                        <NavLink to="/projects" className="text-gray-800 hover:text-blue-500 flex-1 text-center">Projects</NavLink>
                        <NavLink to="/contact" className="text-gray-800 hover:text-blue-500 flex-1 text-center">Contact</NavLink>
                        <a href='../public/one-page.pdf' download className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600">Download Resume</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
