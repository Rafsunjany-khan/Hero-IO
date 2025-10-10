import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/logo.png" className="w-8 h-8" alt="logo" />
          <h2 className="font-bold text-xl text-purple-600">Hero IO</h2>
        </Link>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-bold items-center">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "text-purple-600" : "")} >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={({ isActive }) => (isActive ? "text-purple-600" : "")} >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={({ isActive }) => (isActive ? "text-purple-600" : "")} >
              Installation
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:block">
          <a href="https://github.com/Rafsunjany-khan/" target="_blank" rel="noopener noreferrer" >
            <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              <img src="/assets/github.png" className="w-5 h-5" alt="GitHub" />
              Contribute
            </button>
          </a>
        </div>

        <button
          className="md:hidden text-purple-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)} >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center py-6 space-y-4">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "text-gray-700 font-bold")}
            onClick={() => setMenuOpen(false)} >
            Home
          </NavLink>
          <NavLink to="/apps" className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "text-gray-700 font-bold")}
            onClick={() => setMenuOpen(false)} >
            Apps
          </NavLink>
          <NavLink to="/installation" className={({ isActive }) => (isActive ? "text-purple-600 font-bold" : "text-gray-700 font-bold")}
            onClick={() => setMenuOpen(false)} >
            Installation
          </NavLink>

          <a href="https://github.com/Rafsunjany-khan/" target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)} >
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Contribute
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
