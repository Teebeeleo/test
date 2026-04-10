import { useState } from "react";
import Work from "./Work";
import Home from "./Home";
import "./App.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import langProvider from "./CreateContext";

function App() {
  return (
    <>
      <langProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about-me" element={<Aboutme />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </langProvider>
    </>
  );
}

export default App;
