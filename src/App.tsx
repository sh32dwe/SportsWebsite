// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SportsFacilities from "./components/SportsFacilities";
import Blogs from "./components/Blogs";
import NotFound from "./components/NotFound";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports-facilities" element={<SportsFacilities />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
