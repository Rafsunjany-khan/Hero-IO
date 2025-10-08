import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
         <div className="flex items-center space-x-2 mb-4 md:mb-0">
           <img src="/assets/logo.png" className="w-7 h-7" />
            <span className="text-white font-semibold">HERO.IO</span>
          </div>

       <div className="flex flex-col items-center space-y-2">
         <h4 className="text-white font-bold text-sm-20">Social Link</h4>
         <div className="flex space-x-4 text-lg">
         <a href="#" className="hover:text-white" title="Facebook"> <FaFacebookF /> </a>
         <a href="#" className="hover:text-white" title="X"> <FaX /> </a>
         <a href="#" className="hover:text-white" title="Twitter"> <FaTwitter /> </a>
         </div>
        </div>
      </div>
      <hr className="border-t border-gray-400  mx-auto my-4" />
      <p className="text-center text-sm mb-4 md:mb-0">
        Copyright © 2025 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
