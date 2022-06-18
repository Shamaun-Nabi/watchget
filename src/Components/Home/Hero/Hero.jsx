import React from "react";
import { Link } from "react-router-dom";
import HeroLogo from "../../../assets/images/hero.png";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Hero() {
  return (
    <div className=" container mx-auto py-1">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex  items-center p-4 order-2 md:order-1">
          <div>
            <h6 className="text-indigo-600 text-lg font-semibold">Here to turn make hand turn</h6>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-relaxed md:leading-normal">
              The Future of <br /> Tech is Here
            </h2>
            <p className="mt-5 text-md md:text-lg text-slate-600 font-semibold">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS v3.x html page.
            </p>

            <Link to="shop">
            <button className="mt-8 bg-indigo-600 hover:bg-emerald-500 text-white px-8 py-3 font-semibold rounded-md flex justify-center items-center gap-2"><MdOutlineShoppingCart/> <span>Buy Now</span></button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <img className="h-80 md:h-full " src={HeroLogo} alt="heroImg" />
        </div>
      </div>
    </div>
  );
}
