import React from "react";

const Banner = () => {
    return(
    <section className="text-center py-16 px-4 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        We Build <span className="text-purple-600">Productive</span> Apps
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex justify-center gap-3 mb-12">
          <button className="bg-white-300 text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center space-x-2">
              <img src="/assets/play_store.png"  className="w-5" />
              <span>Google Play</span>
            </button>
            <button className="bg-white-300  text-gray-800 font-semibold m-4 py-2 px-4 rounded-lg flex items-center space-x-2">
              <img src="/assets/apple_store.png"  className="w-5" />
              <span>App Store</span>
            </button>
       </div>
       <div className="relative flex justify-center">
        <img src="/assets/hero.png" className="max-w-xs md:max-w-md" />
      </div>
    </section>

    )
    }

export default Banner;