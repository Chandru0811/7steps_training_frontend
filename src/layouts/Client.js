import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/client/Home";
import Header from "../components/client/common/Header";
import Footer from "../components/client/common/Footer";
import { Toaster } from "react-hot-toast";
import Login from "../components/client/common/Login";
import "../styles/client.css";
import Auth from "../pages/client/Auth";
import About from "../pages/client/About";
import Hope from "../pages/client/Hope"
import ContactUS from "../pages/client/ContactUS";
import PortFolio from "../pages/client/PortFolio/PortFolio";
import OurProgrammes from "../pages/client/OurProgrammes/OurProgrammes";
import PrivacyAndPolicy from "../pages/client/PrivacyAndPolicy";


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
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/hope" element={<Hope />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/auth" element={<Auth handleLogin={handleLogin}/>} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/ourprogrammes" element={<OurProgrammes />} />
          <Route path="/privacyandpolicy" element={<PrivacyAndPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Client;
