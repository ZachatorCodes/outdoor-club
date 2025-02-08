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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/leadership" element={<Leadership />} />
        <Route exact path="/trips" element={<Trips />} />
      </Routes>
    </>
  );
}

export default App;
