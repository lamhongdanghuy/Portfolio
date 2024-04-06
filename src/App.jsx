import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import { MenuIcon } from "@heroicons/react/solid"; // Import the burger icon

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      // Adjust as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
      setIsMenuOpen(false); // Close the menu when scrolling back up
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      {isScrolled ? (
        <div className="fixed top-0 right-0 z-50">
          <MenuIcon
            className="h-6 w-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      ) : (
        <div className="header-container sticky top-0 z-50">
          <Header />
        </div>
      )}
      {isMenuOpen && (
        <div className="header-container fixed top-0 z-50">
          <Header />
        </div>
      )}
      <div className="body-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
