import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex items-center space-x-1 text-3xl font-bold tracking-widest text-purple-600">
        <span>L</span>
        <img src="/assets/logo.png" className="w-6 h-6" alt="logo" />
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};

export default Loading;
