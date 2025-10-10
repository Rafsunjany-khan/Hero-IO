import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch("/data/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((a) => a.id === parseInt(id));
        setApp(foundApp || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading appsData.json", err);
        setLoading(false);
      });
  }, [id]);

        const handleInstall = () => {
                setInstalled(true);
                toast.success(`${app.title} Installed Successfully!`, {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
              };

          if (loading) {
          return <div className="text-center py-20">Loading...</div>;
        }

        if (!app) {
          return (
            <div className="flex flex-col items-center justify-center h-screen text-center">
              <h2 className="text-2xl font-semibold mb-4">App Not Found</h2>
              <Link to="/" className="text-blue-500 hover:underline text-lg font-medium">
                Back to Home
              </Link>
            </div>
          );
        }



  return (
  <div className="bg-gray-100">
  <Navbar />
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img src={app.image} className="w-60 h-60 object-contain rounded-2xl shadow-md"/>

        <div className="flex-1">
          <h1 className="text-3xl font-semibold">{app.title}</h1>
          <p className="text-gray-600 mt-1"> Developed By <span className="text-purple-600">{app.companyName}</span></p>

          <div className="flex items-center gap-6 mt-4 text-gray-700 text-sm">
            <span><img src="/assets/icon-downloads.png"/> Downloads <br />{app.downloads.toLocaleString()}</span>
            <span><img src="/assets/icon-ratings.png"/> Average Rating <br />{app.ratingAvg.toFixed(1)}</span>
            <span> <img src="/assets/icon-review.png" /> Total Reviews <br />{app.reviews.toLocaleString()}</span>
          </div>
          <button
              onClick={handleInstall}
              disabled={installed}
              className={`flex items-center justify-center mt-6 px-6 py-3 rounded-md font-medium transition ${
                installed
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-green-400 text-white hover:bg-green-500"
              }`} >
              {installed ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
        </div>
      </div>


        <div className="mt-10">
          <h2 className="font-bold text-xl mb-4">Rating</h2>
          <div className="space-y-2">
            {app.ratings
              .slice()
              .reverse()
              .map((rating) => {
                const total = app.ratings.reduce((sum, r) => sum + r.count, 0);
                const percentage = total ? ((rating.count / total) * 100).toFixed(1) : 0;

                return (
                  <div key={rating.name} className="flex items-center gap-3">
                    <span className="w-12 text-sm">{rating.name}:</span>
                    <div className="flex-1 bg-gray-200 h-3 overflow-hidden">
                      <div
                        className="h-3 bg-orange-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex justify-between mt-2 px-16 py-2 text-xs text-gray-500">
            {app.ratings
              .slice()
              .map((rating) => (
                <span key={rating.name}>{rating.count.toLocaleString()}</span>
              ))}
          </div>
        </div>


      <div className="mt-12">
          <h2 className="font-bold text-xl mb-4">Description</h2>

          <p className="mb-4">
            This app is designed to simplify your daily tasks and increase productivity.
            With a clean and intuitive interface, users can easily manage lists, schedules, and reminders.
            It supports cross-device synchronization, so you can access your tasks anywhere.
            The app is lightweight, fast, and optimized for both mobile and desktop platforms.
            It provides essential features without unnecessary clutter, making it user-friendly.
            Whether you’re planning work projects or personal goals, it adapts to your needs.
          </p>

          <p className="mb-4">
            You can create multiple lists, add tasks with due dates, and set priority levels.
            It includes reminders, notifications, and recurring task options for better management.
            The app also supports collaborative features to share tasks with friends or colleagues.
            Smart sorting and filtering allow you to focus on high-priority tasks efficiently.
            Offline support ensures you can continue working even without internet access.
            Customization options like themes, colors, and labels make organizing enjoyable.
          </p>

          <p className="mb-4">
            Using this app improves your time management and reduces stress from missed tasks.
            Its analytics show your progress, helping you identify productive habits.
            Regular updates ensure stability, security, and introduce new helpful features.
            The app integrates with other tools like calendars, email, and cloud storage.
            Customer support is quick and responsive, assisting with any issues or queries.
            Overall, it’s a reliable companion for organizing daily life, increasing efficiency, and achieving goals.
          </p>
        </div>

    </div>
      <Footer />
            <ToastContainer />
    </div>
  );
};

export default AppDetails;
