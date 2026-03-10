"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">

      {/* NAVBAR */}
      <nav className="mt-4 flex items-center justify-between px-4 sm:px-6 py-3 w-[95%] max-w-6xl">

        {/* LOGO */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">

          <div className="w-7 h-7 sm:w-9 sm:h-9 text-yellow-400">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <circle cx="12" cy="12" r="5" />

              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="1" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="23" />
                <line x1="4.2" y1="4.2" x2="6.4" y2="6.4" />
                <line x1="17.6" y1="17.6" x2="19.8" y2="19.8" />
                <line x1="1" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="23" y2="12" />
                <line x1="4.2" y1="19.8" x2="6.4" y2="17.6" />
                <line x1="17.6" y1="6.4" x2="19.8" y2="4.2" />
              </g>
            </svg>
          </div>

          <span className="font-semibold tracking-wide text-white text-sm sm:text-lg">
            RADOMS ENERGY
          </span>

        </div>

        {/* MENU ICON */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[4px] cursor-pointer"
        >
          <span className="w-5 sm:w-6 h-[2px] bg-white"></span>
          <span className="w-5 sm:w-6 h-[2px] bg-white"></span>
          <span className="w-5 sm:w-6 h-[2px] bg-white"></span>
        </div>

      </nav>

      {/* DROPDOWN MENU */}
      <div
        className={`absolute right-4 sm:right-[6%] top-16 w-[90%] sm:w-56 bg-white rounded-lg shadow-xl p-4 transition-all duration-300
        ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >

        <ul className="flex flex-col text-gray-700 font-medium">

          <li className="p-2 hover:text-orange-500 cursor-pointer transition">
            Services
          </li>

          <li className="p-2 hover:text-orange-500 cursor-pointer transition">
            Contact
          </li>

          <li className="p-2 hover:text-orange-500 cursor-pointer transition">
            Akasha Energy
          </li>

          <li className="p-2 hover:text-orange-500 cursor-pointer transition">
            Green Energy
          </li>

          <li className="p-2 hover:text-orange-500 cursor-pointer transition">
            Solar Panel
          </li>

        </ul>

      </div>

    </header>
  );
}