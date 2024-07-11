import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/client/Home";
import Header from "../components/client/common/Header";
import Footer from "../components/client/common/Footer";
import { Toaster } from "react-hot-toast";

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
          <Route path="/" element={<Home handleLogin={handleLogin} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Client;
