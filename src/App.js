import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home";
import Table from "./components/Table";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Footer from "./components/Footer";
import Resv from "./Resv";
import { Routes, Route } from "react-router-dom";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Resv" element={<Resv />} />
        <Route path="/Confirmation" element={<Confirmation />} />
      </Routes>
      <Table />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
