import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faX } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 lg:px-12 py-6 bg-transparent z-10">
       
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white font-bold">
            N
          </div>
          <span className="text-white font-semibold text-lg">Nature</span>
        </div>

        
        <button className="lg:hidden flex items-center text-2xl text-white focus:outline-none"onClick={() => setIsMenuOpen(!isMenuOpen)} >
        {isMenuOpen ?   <FontAwesomeIcon icon={faX} /> :<FontAwesomeIcon icon={faBars} />}
        </button>

        
        <div
          className={`${
            isMenuOpen ? "block" : "hidden" } lg:flex lg:space-x-8 lg:text-white lg:font-medium`}>
          <div className={`flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 bg-black lg:bg-transparent lg:static absolute top-16 left-0 w-full lg:w-auto text-center py-6 lg:py-0 z-20`}>
            <Link to="/" className="hover:underline text-white">
              Home
            </Link>
            <Link to="/About" className="hover:underline text-white">
              About
            </Link>
            <Link to="/Services" className="hover:underline text-white">
              Services
            </Link>
            <Link to="/Contact" className="hover:underline text-white">
              Contact
            </Link>
          </div>
        </div>

        
        <a href="tel:2025550188"className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition hidden lg:block">
          202-555-0188
        </a>
      </nav>
    </div>
  );
}

export default Nav;
