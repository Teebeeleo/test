import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Work from "./Work";
import Home from "./Home";
import "./App.css";
import Contact from "./assets/Contact";
import Aboutme from "./assets/Aboutme";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about-me" element={<Aboutme />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
