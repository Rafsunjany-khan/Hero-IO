import React from "react";
import Navbar from "../components/Navbar";
import TreadingApps from "../components/TrendingApps";
import Footer from "../components/Footer";

const Apps = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <TreadingApps />
      <Footer />

    </div>
  );
};

export default Apps;
