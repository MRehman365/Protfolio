import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Project";
import Services from "./components/Services";
import Footer from './components/Footer'

const App = () => {
 return (
   <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services />} />
         <Route path="/projects" element={<Projects />} />
         {/* Define other routes that you need*/}
       </Routes>
     </main>
     <Footer/>
   </Router>
   
 );
};

export default App;