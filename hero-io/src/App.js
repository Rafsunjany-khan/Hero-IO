import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Apps from "./pages/Apps";
import AppDetails from "./pages/AppDetails";
import Installation from "./pages/Installation";
import Error from "./pages/Error";
import Loading from "./components/Loading";

const AppWrapper = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/app/:id" element={<AppDetails />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

function App() {
  return <AppWrapper />;
}

export default App;
