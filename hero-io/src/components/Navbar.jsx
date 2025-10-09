import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-white py-4">
      <div className="flex items-start space-x-2">
        <img src="/assets/logo.png" className="w-8 h-8" alt="Hero IO Logo" />
        <h2 className="font-bold text-xl text-purple-600">Hero IO</h2>
      </div>

      <ul className="hidden md:flex space-x-8 text-gray-700 font-bold items-center">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apps"
            className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          >
            Apps
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/installation"
            className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          >
            Installation
          </NavLink>
        </li>
      </ul>
      <div>
      <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
        <img src="/assets/github.png"  className="w-5 h-5 mr-2"/>
        Contribute</button>
        </div>
    </nav>
  );
};

export default Navbar;
