import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TreadingApps = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/appsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data.slice(0, 8)))
      .catch(() => console.log("Please, Correct Path Add for appsData.json file."));
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Trending Apps</h2>
        <p className="text-gray-600 mb-10">
          Explore All Treading Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <div onClick={() => navigate(`/app/${app.id}`)}
              className="bg-white shadow rounded-2xl p-4 text-left hover:shadow-lg transition">

              <img src={app.image} className="w-full h-40 object-cover rounded-lg mb-4" />

              <h3 className="font-semibold text-lg mb-2">{app.title}</h3>

              <div className="flex justify-between items-center text-sm text-gray-600 gap-2">
                <button className="flex items-center gap-2 border border-gray-300 px-2 py-1 rounded hover:bg-gray-100 transition">
                <img src="/assets/icon-downloads.png" className="w-4" /> <span className="text-green-600">{app.downloads}</span>
                </button>

                <button className="flex items-center gap-2 bg-pink-100 border border-gray-300 px-2 py-1 rounded hover:bg-gray-100 transition">
                <img src="/assets/icon-ratings.png" className="w-4" /> {app.ratingAvg.toFixed(1)}
                </button>
              </div>

            </div>
          ))}
        </div>

        <button className="mt-10 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          onClick={() => navigate("/apps")}>
          Show All
        </button>
      </div>
    </section>
  );
};

export default TreadingApps;
