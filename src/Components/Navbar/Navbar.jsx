import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
// import { HiLogin } from "react-icons/hi";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white">
        <div className="flex items-center justify-between flex-wrap  p-4 border-b-2 border-opacity-5 border-gray-800 relative">
          <Link
            to="/"
            className="flex items-center flex-shrink-0 text-white mr-6"
          >
            <img className="h-10 md:h-12" src={logo} alt="" />
          </Link>
          <div className="block lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center px-3 py-2 border rounded text-white bg-indigo-500  hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3 "
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {open ? (
            ""
          ) : (
            <div
              className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto `}
            >
              <div className="text-sm lg:flex-grow">
                <div className="  sm:flex-none lg:flex justify-center">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "block mt-4 lg:inline-block lg:mt-0  text-base md:text-xl  text-indigo-500 p-2 rounded-md bg-slate-100 transition ease-in mr-4"
                        : "block mt-4 lg:inline-block lg:mt-0 text-slate-800 text-base md:text-xl  hover:text-indigo-500 p-2 rounded-md hover:bg-slate-100 transition ease-in mr-4"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="shop"
                    className={({ isActive }) =>
                      isActive
                        ? "block mt-4 lg:inline-block lg:mt-0  text-base md:text-xl  text-indigo-500 p-2 rounded-md bg-slate-100 transition ease-in mr-4"
                        : "block mt-4 lg:inline-block lg:mt-0 text-slate-800 text-base md:text-xl  hover:text-indigo-500 p-2 rounded-md hover:bg-slate-100 transition ease-in mr-4"
                    }
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    to="reviews"
                    className={({ isActive }) =>
                      isActive
                        ? "block mt-4 lg:inline-block lg:mt-0  text-base md:text-xl  text-indigo-500 p-2 rounded-md bg-slate-100 transition ease-in mr-4"
                        : "block mt-4 lg:inline-block lg:mt-0 text-slate-800 text-base md:text-xl  hover:text-indigo-500 p-2 rounded-md hover:bg-slate-100 transition ease-in mr-4"
                    }
                  >
                    Reviews
                  </NavLink>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      isActive
                        ? "block mt-4 lg:inline-block lg:mt-0  text-base md:text-xl  text-indigo-500 p-2 rounded-md bg-slate-100 transition ease-in mr-4"
                        : "block mt-4 lg:inline-block lg:mt-0 text-slate-800 text-base md:text-xl  hover:text-indigo-500 p-2 rounded-md hover:bg-slate-100 transition ease-in mr-4"
                    }
                  >
                    About
                  </NavLink>
                </div>
              </div>
              <div>
                <button className="flex  justify-center items-center gap-1 text-md px-4 py-2 font-bold leading-none border rounded-md bg-indigo-800 text-white border-white hover:bg-indigo-700 hover:text-white mt-4 lg:mt-0">
                  Contact Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
