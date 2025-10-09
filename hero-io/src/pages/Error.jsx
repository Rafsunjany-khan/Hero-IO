import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Error = () => {
  const navigate = useNavigate();

  return (
  <div className="bg-gray-100 min-h-screen flex flex-col">
     <Navbar />

    <div className="flex items-center justify-center bg-gray-100 pt-20 pb-10 px-4">
      <div className="text-center">
        <img src="/assets/error-404.png" className="w-64 mx-auto mb-8"/>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Oops, page not found!</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for is not available.
        </p>

        <button onClick={() => navigate(-1)}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
          Go Back!
        </button>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Error;
