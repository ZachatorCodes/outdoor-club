import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Trips from "./components/Trips";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="trips" element={<Trips />} />
      </Routes>
    </>
  );
}

export default App;
