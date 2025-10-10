import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AppsNotFound from "../pages/AppsNotFound";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    fetch("/data/appsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch(() => console.log("Please, correct path for appsData.json"));
  }, []);

  const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Our All Applications</h1>
        <p className="text-gray-600">Explore All Apps on market developed by us. We code for Millions</p>
      </div>


      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-700 font-semibold">({filteredApps.length}) Apps Founds</p>
        <input type="text" placeholder="Search apps..."
          className="border px-4 py-2 rounded shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div onClick={() => navigate(`/app/${app.id}`)} className="bg-white shadow rounded-2xl p-4 hover:shadow-lg transition">
              <img src={app.image} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-lg mb-2">{app.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-600 gap-2">
                <p className="flex items-center gap-2">
                  <img src="/assets/icon-downloads.png" className="w-4" /> {app.downloads}
                </p>
                <p className="flex items-center gap-2 bg-pink-100 border border-gray-300 px-2 py-1 rounded">
                  <img src="/assets/icon-ratings.png" className="w-4" /> {app.ratingAvg.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <AppsNotFound />
      )}
    </div>
  );
};

export default AllApps;
