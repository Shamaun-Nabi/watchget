import React from "react";

export default function FeatureRight({ feature }) {
  return (
    <div className="flex justify-center gap-[30px] mt-0 lg:mt-10 leading-loose">
      <div className="order-2 md:order-1 p-3 border border-slate-600 border-opacity-20 text-indigo-600 text-lg hover:bg-indigo-600 hover:text-white transition ease-in rounded-md w-14 h-12 flex justify-center items-center">
        {/* <FiMonitor /> */}
        {feature?.icon}
      </div>
      <div className="order-1 md:order-2  md:text-left">
        <span className="text-xl">{feature.title}</span>
        <p className="text-slate-500">{feature.des}</p>
      </div>
    </div>
  );
}
