import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const parsedApps = apps.map(app => ({ ...app, size: Number(app.size) }));
    setInstalledApps(parsedApps);
  }, []);

  const handleUninstall = (id, title) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.info(`${title} has been uninstalled!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };


  const getSortedApps = () => {
    if (sortOrder === "high-low") {
      return [...installedApps].sort((a, b) => b.size - a.size);
    }
    if (sortOrder === "low-high") {
      return [...installedApps].sort((a, b) => a.size - b.size);
    }
    return installedApps;
  };

  const sortedApps = getSortedApps();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-3">Your Installed Apps</h1>
          <h6>Explore All Trending Apps on the Market developed by us</h6>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h6 className="font-bold text-[22px] ">{installedApps.length} Apps Found</h6>

          {installedApps.length > 0 && (
            <select
              className="border px-4 py-2 rounded shadow-sm"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)} >
              <option value="">Sort by Size</option>
              <option value="high-low">High - Low</option>
              <option value="low-high">Low - High</option>
            </select>
          )}
        </div>


        {sortedApps.length === 0 ? (
          <p className="text-gray-600 text-center mt-10">
            You have not installed any apps yet.
          </p>
        ) : (
          <div className="space-y-6">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="bg-white shadow rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition"
              >
                {/* Image + Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{app.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center gap-2">
                        <img src="/assets/icon-downloads.png" className="h-3" />{" "}
                        {app.downloads.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <img src="/assets/icon-ratings.png" className="h-3" />{" "}
                        {app.ratingAvg.toFixed(1)}
                      </span>
                      <span> {app.size} MB</span>
                    </div>
                  </div>
                </div>


                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => handleUninstall(app.id, app.title)}
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Installation;
