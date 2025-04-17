import React from "react";
import "./styles/global.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1E2A38] text-white flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-6">
          <img
            src="/logo.svg"
            alt="Codevena Logo"
            className="w-32 mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold text-[#00FFE0] mb-2">CODEVENA</h1>
        <p className="text-[#C4C4C4] text-lg font-light tracking-wide">
          Where Code Runs Deep
        </p>
      </div>
    </div>
  );
}
