import React from "react";
import ShopCart from "./ShopCart/ShopCart";
import ShopSideBar from "./ShopSidebar/ShopSideBar";

export default function Shop() {
  return (
    <div>
      <div className="bg-slate-200 text-center font-bold text-5xl p-4">
        <span>Welcome To Our Shop</span> <br />
        <span className="text-xl font-semibold text-indigo-500">
          Get your watch right now
        </span>
      </div>
      <div className="flex gap-4 container mx-auto ">
        <div className=" bg-indigo-500 w-56 text-center p-2 shadow-md">
          <ShopSideBar />
        </div>
        <div className="w-full">
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <ShopCart />
          <ShopCart />
          <ShopCart />
          <ShopCart />
          </div>
        </div>
      </div>
    </div>
  );
}
