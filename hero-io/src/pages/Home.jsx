import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Trust from "../components/Trust";
import TreadingApps from "../components/TrendingApps";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Banner />
      <Trust />
      <TreadingApps />
      <Footer />

    </div>
  );
};

export default Home;
