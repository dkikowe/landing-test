import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Manifest from "./components/Manifest";
import Evolution from "./components/Evolution";
import TechnicalExpertise from "./components/TechnicalExpertise";
import ProjectIndex from "./components/ProjectIndex";
import ProjectDetail from "./components/ProjectDetail";
import TechnologiesAndMaterials from "./components/TechnologiesAndMaterials";
import ArchitecturalProcess from "./components/ArchitecturalProcess";
import Clients from "./components/Clients";
import Company from "./components/Company";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Manifest />} />
          <Route path="evolution" element={<Evolution />} />
          <Route path="expertise" element={<TechnicalExpertise />} />
          <Route path="projects" element={<ProjectIndex />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="materials" element={<TechnologiesAndMaterials />} />
          <Route path="process" element={<ArchitecturalProcess />} />
          <Route path="clients" element={<Clients />} />
          <Route path="company" element={<Company />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
