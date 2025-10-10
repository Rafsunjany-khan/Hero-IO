import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-4 space-y-6 md:space-y-0">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <img src="/assets/logo.png" className="w-7 h-7" />
            <span className="text-white font-semibold">HERO.IO</span>
          </div>
          <p className="text-gray-400 text-sm">
            Your trusted hub for apps, tutorials, and tech solutions.
          </p>
          <p className="text-gray-400 text-sm">
            Empowering developers and enthusiasts with easy-to-follow guides.
          </p>
          <p className="text-gray-400 text-sm">
            Join our community and explore the world of technology with us.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <h4 className="text-white font-bold text-md mb-2">Social Links</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white" title="X">
              <FaX />
            </a>
            <a href="#" className="hover:text-white" title="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white" title="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white" title="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-400 mx-auto my-4" />
      <p className="text-center text-sm text-gray-400">
        Copyright © 2025 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
