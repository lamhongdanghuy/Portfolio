import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAnimatedText from "./useAnimatedText";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

function Header({ toggleDarkMode, darkMode, isMenuOpen, setIsMenuOpen }) {
  const animatedText = useAnimatedText(
    [
      "Software Engineer",
      "Web Developer",
      "Database Engineer",
      "Full Stack Developer",
    ],
    150
  );

  const burgerIcon = (
    <svg
      className="w-6 h-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  );

  const closeIcon = (
    <svg
      className="w-6 h-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );

  return (
    <header
      className={`w-full ${darkMode ? "bg-gray-800" : "bg-gray-100"} shadow 
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center py-7">
          {/* Flex container for name and animated text */}
          <div className="flex-initial flex flex-col items-center w-full md:w-1/3">
            <h1
              className={`text-5xl font-bold leading-none ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Huy Lam
            </h1>
            <span
              className={`text-2xl ${
                darkMode ? "text-gray-300" : "text-blue-500"
              } mt-1 min-h-[32px]`}
            >
              {animatedText}
            </span>
          </div>
          {/* Toggle button for dark mode */}
          <button
            onClick={toggleDarkMode}
            className="relative p-2 rounded-full w-12 h-6 flex items-center bg-gray-200"
          >
            <div
              className={`transform transition-transform ${
                darkMode ? "translate-x-6" : "-translate-x-0"
              }`}
            >
              {darkMode ? (
                <MoonIcon className="h-5 w-5 text-gray-800" />
              ) : (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              )}
            </div>
          </button>
          {/* Burger icon for mobile view */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? closeIcon : burgerIcon}
            </button>
          </div>
          {/* Navigation Links */}
          <nav
            className={`hidden md:relative md:flex md:items-center md:justify-end md:bg-transparent md:space-x-4 lg:space-x-20 text-xl transition-transform duration-300 ease-in-out`}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 left-5 md:hidden"
            >
              {closeIcon}
            </button>
            {/* NavLink components here */}
            <NavLink
              className={`hover:text-blue-500 text-xl my-4 md:my-0 md:mx-2 ${
                darkMode ? "text-gray-300" : "text-black-500"
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                const aboutSection = document.getElementById("Home");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Home
            </NavLink>
            <NavLink
              className={`hover:text-blue-500 text-xl my-4 md:my-0 md:mx-2 ${
                darkMode ? "text-gray-300" : "text-black-500"
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                const aboutSection = document.getElementById("About");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              About
            </NavLink>{" "}
            <NavLink
              to="/projects"
              className={`hover:text-blue-500 text-xl my-4 md:my-0 md:mx-2 ${
                darkMode ? "text-gray-300" : "text-black-500"
              }`}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={`hover:text-blue-500 text-xl my-4 md:my-0 md:mx-2 ${
                darkMode ? "text-gray-300" : "text-black-500"
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                const aboutSection = document.getElementById("Contact");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact
            </NavLink>
            <a
              href="../public/one-page.pdf"
              download
              className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 my-4 md:my-0 md:ml-4"
            >
              Download Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
