import React from "react";
// import { FiMonitor } from "react-icons/fi";

export default function Feature({ feature }) {
  return (
    <div className="flex justify-center gap-[30px] lg:mt-10 leading-loose">
      <div className="text-left md:text-right">
        <span className="text-xl">{feature.title}</span>
        <p className="text-slate-500">{feature.des}</p>
      </div>
      <div className="p-3 border border-slate-600 border-opacity-20 text-indigo-600 text-lg hover:bg-indigo-600 hover:text-white transition ease-in rounded-md w-14 h-12 flex justify-center items-center">
        {/* <FiMonitor /> */}
        {feature?.icon}
      </div>
    </div>
  );
}
