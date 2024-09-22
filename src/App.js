import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Project";
import Services from "./components/Services";
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,es,fr,de,it,hi',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          'google_translate_element'
        );
      }
    };

    // Initialize the Google Translate widget
    initializeGoogleTranslate();

    // Function to remove the Google Translate toolbar
    const removeGoogleTranslateToolbar = () => {
      const intervalId = setInterval(() => {
        const frame = document.querySelector('.goog-te-banner-frame.skiptranslate');
        if (frame) {
          frame.style.display = 'none';
          document.body.style.top = '0px';
          clearInterval(intervalId);  // Stop checking after we found and hid the toolbar
        }
      }, 100); // Check every 100ms

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    };

    removeGoogleTranslateToolbar();
  }, []);

  return (
    <Router>
      <Navbar />
      <div id="google_translate_element" className="mt-[110px]" style={{ float: "right", zIndex: "1", marginTop: "102px" }}></div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          {/* Define other routes that you need */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
