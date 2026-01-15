import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wider cursor-pointer">
          <span className="text-green-400">X</span>ENON
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#" className="hover:text-green-400 transition-colors">Home</a>
          <a href="#" className="hover:text-green-400 transition-colors">Technology</a>
          <a href="#" className="hover:text-green-400 transition-colors">Robotics</a>
          <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-green-500 text-black px-6 py-2 rounded-full font-bold hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(74,222,128,0.5)]">
          Pre-Order
        </button>
      </div>
    </nav>
  );
};

export default Navbar;