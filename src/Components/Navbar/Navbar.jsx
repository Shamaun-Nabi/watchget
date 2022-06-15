import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import { HiLogin } from "react-icons/hi";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap  p-4 border-b-2 border-opacity-5 border-gray-800">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="h-10 md:h-12" src={logo} alt="" />
        </div>
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
            className={`w-full flex-grow lg:flex lg:items-center lg:w-auto `}
          >
            <div className="text-sm lg:flex-grow">
              <div className="  sm:flex-none lg:flex justify-center">
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 text-base md:text-xl  hover:text-indigo-500 p-2 rounded-md hover:bg-slate-100 transition ease-in    mr-4"
                >
                  Home
                </a>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-slate-800  text-base md:text-xl p-2 rounded-md hover:bg-slate-100 transition ease-in  hover:text-indigo-500 mr-4"
                >
                  Shop
                </a>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 text-base md:text-xl p-2 rounded-md  hover:bg-slate-100 transition ease-in hover:text-indigo-500 "
                >
                  Reviews
                </a>
              </div>
            </div>
            <div>
              <button className="flex justify-center items-center gap-1 text-md px-4 py-2 font-bold leading-none border rounded bg-indigo-800 text-white border-white hover:bg-indigo-700 hover:text-white mt-4 lg:mt-0">
                <span>
                  <HiLogin />
                </span>
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
