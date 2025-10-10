import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AppsNotFound from "../pages/AppsNotFound";
import Loading from "../components/Loading";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/appsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch(() => console.log("Please, correct path for appsData.json"));
  }, []);


  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchLoading(true);
    setTimeout(() => {
      setSearch(term);
      setSearchLoading(false);
    }, 300);
  };

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 relative">
      {searchLoading && <Loading />}

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Our All Applications</h1>
        <p className="text-gray-600">
          Explore All Apps on market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-700 font-semibold">({filteredApps.length}) Apps Founds</p>
        <input
          type="text"
          placeholder="Search apps..."
          className="border px-4 py-2 rounded shadow-sm"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate(`/app/${app.id}`)}
              className="bg-white shadow rounded-2xl p-4 hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={app.image}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{app.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-600 gap-2">
                <p className="flex items-center gap-2">
                  <img src="/assets/icon-downloads.png" className="w-4" />{" "}
                  {app.downloads}
                </p>
                <p className="flex items-center gap-2 bg-pink-100 border border-gray-300 px-2 py-1 rounded">
                  <img src="/assets/icon-ratings.png" className="w-4" />{" "}
                  {app.ratingAvg.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !searchLoading && <AppsNotFound />
      )}
    </div>
  );
};

export default AllApps;
