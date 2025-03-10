import React, { useState } from "react";
import { Home, FileText, BrainCircuit, ShieldCheck } from "lucide-react";
import TMSearch from "./TMSearch";
import ValidateIdea from "./ValidateIdea";
import LegalIntelligence from "./LegalIntelligence";
import ContractBuilder from "./ContractBuilder";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tm-search");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-zinc-900 text-white p-5">
        <h2 className="text-2xl font-bold">Legal AI Dashboard</h2>
        <ul className="mt-5 space-y-4">
          {[
            { id: "tm-search", label: "TM Search+", icon: <Home className="w-5 h-5" /> },
            { id: "validate-idea", label: "Validate My Idea", icon: <FileText className="w-5 h-5" /> },
            { id: "legal-intelligence", label: "Legal Intelligence", icon: <BrainCircuit className="w-5 h-5" /> },
            { id: "contract-builder", label: "Contract Builder+", icon: <ShieldCheck className="w-5 h-5" /> }
          ].map(({ id, label, icon }) => (
            <li
              key={id}
              onClick={() => setActiveTab(id)}
              className={`cursor-pointer flex items-center space-x-2 p-3 rounded-lg transition-all ${
                activeTab === id ? "bg-zinc-700" : ""
              }`}
            >
              {icon} <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-5">
        {activeTab === "tm-search" && <TMSearch />}
        {activeTab === "validate-idea" && <ValidateIdea />}
        {activeTab === "legal-intelligence" && <LegalIntelligence />}
        {activeTab === "contract-builder" && <ContractBuilder />}
      </div>
    </div>
  );
};

export default Dashboard;
