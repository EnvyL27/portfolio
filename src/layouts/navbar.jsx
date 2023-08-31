import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './../css/animation.css'
import './../css/style.css'
React

function navbar() {

  const [isDropdown, setIsDropdown] = useState(false)

  const handleDropdown = () => {
    setIsDropdown(!isDropdown)
  }

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("bg-gray-100");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove("bg-gray-700");
        navbar.classList.add("bg-transparent");
      }
    });
  })
  return (
    <>
      <div className="z-10 fixed navbar lg:py-4 lg:px-24 bg-transparent">
        <div className="lg:navbar-start max-lg:hidden">
          <Link to="/" className="text-center column-1">
            <div className="bg-blend-difference logo w-full font-bold text-md text-gray-900">
              UGLYSQUID
            </div>
            {/* <div className="text-xs font-semibold text-gray-800">
              FRONTEND DEVELOPER
            </div> */}
          </Link>
        </div>
        <div  className="navbar-start">
          <div onClick={handleDropdown} className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isDropdown && (
            <ul data-aos="fade-down"
              tabIndex={0}
              className="mr-8 enu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-indigo-400 w-52 text-base-100 font-semibold"
            >
              <li>
                <Link to="/"
                  className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6 bg-blend-difference"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link to="about"
                  className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6"
                >
                  PROJECT
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            )}
          </div>
        </div>
        <div className="md:hidden max-sm:navbar-end overflow-hidden">
          <Link to='/' className="btn btn-ghost column-1">
            <div className="bg-blend-difference logo w-full font-bold text-md text-gray-900 hover:text-gray-600">UGLYSQUID</div>
          </Link>
        </div>

        <div className="navbar-end container hidden lg:flex  text-gray-900 capitalize dark:text-gray-700">
          <Link to="/"
            className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6 bg-blend-difference"
          >
            HOME
          </Link>

          <Link to="about"
            className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6"
          >
            ABOUT
          </Link>

          <Link
            to="project"
            className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6"
          >
            PROJECT
          </Link>

          <Link
            to="contact"
            className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
}

export default navbar;
