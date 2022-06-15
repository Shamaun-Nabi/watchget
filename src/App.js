import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Spinner from "./Components/Spinner/Spinner";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
export default App;
