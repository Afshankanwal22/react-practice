import React, { useState } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          
          <span className="font-bold text-5xl text-gray-800">MyApp</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // Close icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-2 text-gray-700 font-medium">
          <li><a href="#home" className="block hover:text-blue-500 transition">Home</a></li>
          <li><a href="#about" className="block hover:text-blue-500 transition">About</a></li>
          <li><a href="#services" className="block hover:text-blue-500 transition">Services</a></li>
          <li><a href="#contact" className="block hover:text-blue-500 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
