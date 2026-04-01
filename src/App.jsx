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
import MagicPiano from "./components/MagicPiano";
import IkeaMall from "./components/IkeaMall";
import IkeaXmas from "./components/IkeaXmas";
import IkeaPark from "./components/IkeaPark";
import Forest from "./components/Forest";
import Tver from "./components/Tver";
import Raddison from "./components/Raddison";
import Passage from "./components/Passage";
import Lustra from "./components/Lustra";
import Kursk from "./components/Kursk";
import MediaFasade from "./components/MediaFasade";
import Valentin from "./components/Valentin";
import Popit from "./components/Popit";
import Campus from "./components/Campus";
import Park from "./components/Park";
import FairyForest from "./components/FairyForest";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/raddison" element={<Raddison />} />
        <Route path="/forest" element={<Forest />} />
        <Route path="/ikea-park" element={<IkeaPark />} />
        <Route path="/ikea-xmas" element={<IkeaXmas />} />
        <Route path="/ikea_xmasl" element={<IkeaXmas />} />
        <Route path="/ikea-mall" element={<IkeaMall />} />
        <Route path="/magicpiano" element={<MagicPiano />} />
        <Route path="/tver" element={<Tver />} />
        <Route path="/passage" element={<Passage />} />
        <Route path="/lustra" element={<Lustra />} />
        <Route path="/kursk" element={<Kursk />} />
        <Route path="/media-fasade" element={<MediaFasade />} />
        <Route path="/valentin" element={<Valentin />} />
        <Route path="/popit" element={<Popit />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/park" element={<Park />} />
        <Route
          path="/fairy-forest"
          element={React.createElement(FairyForest)}
        />
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
