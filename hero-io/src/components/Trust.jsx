import React from "react";

const Trust = () => {
        return (
          <section className="bg-gradient-to-r from-indigo-700 to-purple-500 text-white py-8">
             <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">
                  Trusted By Millions, Built For You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div>
                    <p className="text-sm mt-2">Total Downloads</p>
                    <h3 className="text-4xl font-bold">29.6M</h3>
                    <p className="text-xs opacity-75 mt-1">
                      21% More Than Last Month
                    </p>
                  </div>
                  <div>
                    <p className="text-sm mt-2">Total Reviews</p>
                    <h3 className="text-4xl font-bold">906K</h3>
                    <p className="text-xs opacity-75 mt-1">
                      46% More Than Last Month
                    </p>
                  </div>
                  <div>
                    <p className="text-sm mt-2">Active Apps</p>
                    <h3 className="text-4xl font-bold">132+</h3>
                    <p className="text-xs opacity-75 mt-1">
                      31 More Will Launch
                    </p>
                  </div>
                </div>
              </div>
            </section>
  );
};

export default Trust;