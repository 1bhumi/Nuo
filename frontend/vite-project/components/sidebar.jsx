import React from "react";
import "../src/App.css";
import { NavLink } from "react-router-dom";
import { Home, FileText, BrainCircuit, ShieldCheck } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-zinc-900 text-white p-5 h-screen">
      <h2 className="text-2xl font-bold">Legal AI Dashboard</h2>
      <ul className="mt-5 space-y-4">
        {[
          { path: "/tm-search", label: "TM Search+", icon: <Home className="w-5 h-5" /> },
          { path: "/validate-idea", label: "Validate My Idea", icon: <FileText className="w-5 h-5" /> },
          { path: "/legal-intelligence", label: "Legal Intelligence", icon: <BrainCircuit className="w-5 h-5" /> },
          { path: "/contract-builder", label: "Contract Builder+", icon: <ShieldCheck className="w-5 h-5" /> }
        ].map(({ path, label, icon }) => (
          <li key={path} className="cursor-pointer flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-700">
            <NavLink to={path} className="flex items-center space-x-2">
              {icon} <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
