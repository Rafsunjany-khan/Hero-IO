import React from "react";

const Banner = () => {
    return(
    <section className="text-center pt-20 py-0 px-4 bg-gray-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        We Build <br /> <span className="text-purple-600">Productive</span> Apps
      </h1>
      <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-center">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />
         Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

      <div className="flex justify-center gap-3 mb-12">
          <button className="bg-white text-gray-800 font-semibold border border-gray-300 py-3 px-6 rounded-lg flex items-center space-x-2">
              <img src="/assets/play_store.png"  className="w-5" />
              <span>Google Play</span>
            </button>
            <button className="bg-white  text-gray-800 font-semibold border border-gray-300 py-3 px-6 rounded-lg flex items-center space-x-2">
              <img src="/assets/apple_store.png"  className="w-5" />
              <span>App Store</span>
            </button>
       </div>
       <div className="relative flex justify-center">
        <img src="/assets/hero.png" className="w-64 md:w-96 lg:w-[600px] xl:w-[700px] object-contain" />
      </div>
    </section>

    );
    };

export default Banner;