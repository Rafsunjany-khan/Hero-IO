import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Installation from "./pages/Installation";
import Error from "./pages/Error";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/installation" element={<Installation />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
