import React,{useEffect} from 'react';
import './../css/animation.css'
import './../css/style.css'
React

function navbar() {
  useEffect(() => {
    window.addEventListener("scroll", function() {
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
      <div className="z-50 fixed navbar lg:py-4 lg:px-24 bg-transparent">
        <div className="lg:navbar-start max-lg:hidden">
          <a href="#" className="text-center column-1">
            <div className="bg-blend-difference logo w-full font-bold text-md text-gray-900">
              UGLYSQUID
            </div>
            {/* <div className="text-xs font-semibold text-gray-800">
              FRONTEND DEVELOPER
            </div> */}
          </a>
        </div>
        <div className="navbar-start">
          <div className="dropdown">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden max-sm:navbar-end overflow-hidden">
          <a className="btn btn-ghost column-1">
            <div className="bg-blend-difference logo w-full font-bold text-md text-gray-900 hover:text-gray-600">UGLYSQUID</div>
          </a>
        </div>

        <div className="navbar-end container hidden lg:flex  text-gray-900 capitalize dark:text-gray-700">
          <a
            href="#"
            className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6 bg-blend-difference" 
          >
            HOME
          </a>

          <a
            href="#"
            className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6"
          >
            ABOUT
          </a>

          <a
            href="#"
            className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6"
          >
            PROJECT
          </a>

          <a
            href="#"
            className="text-link font-medium text-gray-900 mx-1.5 sm:mx-6"
          >
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}

export default navbar;
