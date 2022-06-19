import React from "react";

export default function ShopCart() {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 p-3 bg-white mx-2">
        <div className="flex items-center justify-center">
          <img
            className="w-64 object-cover border p- shadow-sm"
            src="https://png.pngitem.com/pimgs/s/369-3699063_smart-watch-dz09-vs-a1-hd-png-download.png"
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-slate-500 mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">Price:</p>
          <p className="text-gray-700 text-base"></p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Man Watch
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Smart Watch
          </span>
        </div>
        <div className="flex justify-center text-white ">
          <button className="bg-indigo-500 p-2 hover:bg-indigo-700 rounded-md shadow-md">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
