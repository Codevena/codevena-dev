// Codevena.dev – Starterprojekt mit erweiterter Startseite
// React + Tailwind + Branding Setup

import React from "react";
import "./styles/global.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1E2A38] text-white px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src="/logo.svg"
          alt="Codevena Logo"
          className="w-24 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-white mb-2">CODEVENA</h1>
        <p className="text-[#00FFE0] text-lg font-light tracking-wide mb-10">
          Where Code Runs Deep
        </p>

        <div className="bg-[#0E0E0E] rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl text-[#00FFE0] font-semibold mb-4">Was ist Codevena?</h2>
          <p className="text-[#C4C4C4] leading-relaxed mb-6">
            Codevena ist mehr als nur eine Plattform – es ist ein digitales Labor für moderne Webentwicklung.
            Wir entwickeln Fullstack-Lösungen, schreiben sauberen Code und bringen Visionen online zum Leben.
            Ob API, Frontend, Backend oder Design – bei uns fließt Code durch die Venen.
          </p>

          <h3 className="text-xl text-[#00FFE0] font-medium mb-2">Unsere Spezialgebiete:</h3>
          <ul className="list-disc list-inside text-[#C4C4C4] space-y-1">
            <li>Moderne React- und Next.js-Entwicklung</li>
            <li>Express & Node.js Backends mit MongoDB</li>
            <li>API-Integration & Automatisierung</li>
            <li>SEO-optimierte und schnelle Webseiten</li>
            <li>Telegram-Bots, Affiliate-Tools & Deal-Portale</li>
          </ul>
        </div>

        <div className="mt-12 text-sm text-[#C4C4C4] opacity-60">
          <p>© {new Date().getFullYear()} Codevena.dev – Where Code Runs Deep</p>
        </div>
      </div>
    </div>
  );
}
