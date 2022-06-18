import React from "react";
import topImage from "../../../assets/images/2.png";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function TopSeries() {
  return (
    <div className="container mx-auto py-1">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex justify-center p-3">
            <img className="h-80 md:h-96" src={topImage} alt="" />
          </div>
          <div className="flex items-center leading-normal md:leading-loose  p-3">
            <div>
              <h5 className=" text-md md:text-lg text-indigo-600 font-semibold">
                Nice Top Series
              </h5>
              <h3 className="text-xl md:text-4xl">Black Great Addition</h3>
              <p className="mt-2 md:mt-4  text-md md:text-lg text-slate-600">
                Start working with Tailwind CSS that can provide everything you
                need to generate awareness, drive traffic, connect.
              </p>
              <Link
                to="shop"
                className="text-md mt-3 md:mt-5 text-indigo-600 flex items-center hover:text-emerald-600  "
              >
                <span>Find Out More</span> <FiChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
