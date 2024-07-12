import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/client/Home";
import Header from "../components/client/common/Header";
import Footer from "../components/client/common/Footer";
import { Toaster } from "react-hot-toast";
import Login from "../components/client/common/Login";
import About from "../pages/client/About/About";
import "../styles/client.css";
import Auth from "../pages/client/Auth";


function Client({ handleLogin }) {
  return (
    <>
      <BrowserRouter>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/auth" element={<Auth handleLogin={handleLogin}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Client;
