import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Home/About/About";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Home/Reviews/Reviews";
import Shop from "./Components/Home/shop/Shop";
import Navbar from "./Components/Navbar/Navbar";
import Spinner from "./Components/Spinner/Spinner";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}
export default App;
