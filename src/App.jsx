import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

function App() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Added state for dark mode

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    document.body.className = darkMode ? "dark" : "";

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div
          className={`fixed top-0 z-40 w-full transition-transform duration-500 ease-in-out ${
            isAtTop || isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Header
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            isMenuOpen={isMenuOpen}
            isAtTop={isAtTop}
          />
        </div>
        {!isAtTop && !isMenuOpen && (
          <div className="fixed top-0 right-0 z-50 p-4">
            <ChevronDownIcon
              className="h-10 w-10"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        )}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 z-50 p-4">
            <ChevronUpIcon
              className="h-10 w-10"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
