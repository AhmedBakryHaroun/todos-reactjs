import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./Screens/Landing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Screens/HomePage/index";
//
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
