import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Menupage from "./pages/Menupage";
import Reviewpage from "./pages/Reviewpage";
import Contactpage from "./pages/Contactpage";
import Blogpage from "./pages/Blogpage";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/menu" element={<Menupage searchQuery={searchQuery} />} />
        <Route path="/review" element={<Reviewpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/blogs" element={<Blogpage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
