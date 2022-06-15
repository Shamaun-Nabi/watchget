import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Spinner from "./Components/Spinner/Spinner";

function App() {
  // screen Loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <>{loading ? <Spinner /> : <Navbar />}</>;
}

export default App;
