import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Bonifilda</h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Skills</li>
          <li className="cursor-pointer hover:text-blue-600">Projects</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
