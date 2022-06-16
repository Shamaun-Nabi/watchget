import React from "react";
import FancyDetail from "./Hero/FancyDetail";
import Hero from "./Hero/Hero";
import TopSeries from "./Hero/TopSeries";

export default function Home() {
  return <div >
    <Hero/>
    <TopSeries/>
    <FancyDetail/>
  </div>;
}
