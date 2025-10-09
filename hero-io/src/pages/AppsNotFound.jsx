import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppsNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center bg-gray-100 pt-20 pb-10 px-4">
      <div className="text-center">
        <img src="/assets/App-Error.png" className="w-64 mx-auto mb-8"/>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">OPPS!! APP NOT FOUND!</h1>
        <p className="text-gray-600 mb-6">
          The App you are requesting is not found on our system, please try another apps.
        </p>

        <button onClick={() => navigate(-1)}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default AppsNotFound;
