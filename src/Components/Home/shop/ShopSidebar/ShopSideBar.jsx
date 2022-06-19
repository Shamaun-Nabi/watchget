import React from "react";

export default function ShopSideBar() {
  return (
    <div className="h-[500px]">
      <div className=" ">
        <h4 className="text-white text-xl ">Select Categorey</h4>
        <hr />
      </div>
      <div>
        <ul className="">
          <li className="text-slate-800 bg-slate-200 p-2 font-bold hover:bg-slate-700 hover:text-white transition ease-in duration-150 mt-2">
            Male Watch
          </li>
          <li className="text-slate-800 bg-slate-200 p-2 font-bold hover:bg-slate-700 hover:text-white transition ease-in duration-150 mt-2">
            Female Watch
          </li>
          <li className="text-slate-800 bg-slate-200 p-2 font-bold hover:bg-slate-700 hover:text-white transition ease-in duration-150 mt-2">
            Baby Watch
          </li>
          <li className="text-slate-800 bg-slate-200 p-2 font-bold hover:bg-slate-700 hover:text-white transition ease-in duration-150 mt-2">
            Diver's Watch
          </li>
          <li className="text-slate-800 bg-slate-200 p-2 font-bold hover:bg-slate-700 hover:text-white transition ease-in duration-150 mt-2">
            Aviator's Watch
          </li>
          <li className="text-slate-800 bg-slate-200 p-2 font-bold hover:bg-slate-700 hover:text-white transition ease-in duration-150 mt-2">
            Field Watch
          </li>
          <li className="text-slate-800 bg-slate-200 p-2 font-bold hover:bg-slate-700 hover:text-white transition ease-in duration-150 mt-2">
            Dress Watch
          </li>
        </ul>
      </div>
    </div>
  );
}
