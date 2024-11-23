import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Contact from "./pages/contact/Contact";
import Menu from "./components/menu/Menu";
import Project from "./pages/project/Project";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
