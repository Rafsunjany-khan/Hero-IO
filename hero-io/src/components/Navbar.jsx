import React from "react";

const Navbar  = () => {
    return(
    <nav className="flex justify-around items-center bg-white-100 py-4">
     <div className="flex items-start space-x-2">
     <img src="/assets/logo.png" className="w-8 h-8" />
     <h2 className="font-bold text-xl text-purple-600">Hero IO</h2>
      </div>
    <ul className="hidden md:flex space-x-8 text-gray-700 font-bold items-center">
     <li>Home </li>
     <li>Apps </li>
     <li>Installations</li>
    </ul>

     <div>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
        <img src="/assets/github.png"  className="w-5 h-5 mr-2"/>
        Contribute</button>

     </div>


     </nav>

    )


}

export default Navbar;