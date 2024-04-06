import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

function App() {
  const [isAtTop, setIsAtTop] = useState(true); // Track if the user is at the top of the page
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control the manual toggle of the header

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100); // User is considered at the top if scrolled less than 100px
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div
        className={`fixed top-0 z-40 w-full transition-transform duration-500 ease-in-out ${
          isAtTop || isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* Show down arrow when not at top and menu is not manually opened */}
      {!isAtTop && !isMenuOpen && (
        <div className="fixed top-0 right-0 z-50 p-4">
          <ChevronDownIcon
            className="h-10 w-10"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      )}

      {/* Show up arrow when menu is manually opened */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 z-50 p-4">
          <ChevronUpIcon
            className="h-10 w-10"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}

      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
