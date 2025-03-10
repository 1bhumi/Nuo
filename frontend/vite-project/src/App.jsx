import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import TMSearch from "../pages/tmSearch";
import ValidateIdea from "../pages/validateIdea";
import LegalIntelligence from "../pages/legalIntelligence";
import ContractBuilder from "../pages/contractBuilder";
import HeroSection from "../components/herosection";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="w-3/4 p-6">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/tm-search" element={<TMSearch />} />
          <Route path="/validate-idea" element={<ValidateIdea />} />
          <Route path="/legal-intelligence" element={<LegalIntelligence />} />
          <Route path="/contract-builder" element={<ContractBuilder />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
