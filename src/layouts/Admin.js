import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import HeaderAdmin from "../components/admin/common/HeaderAdmin";
import FooterAdmin from "../components/admin/common/FooterAdmin";
import { Toaster } from "react-hot-toast";
import "../styles/admin.css";
import Home from "../pages/admin/Home";
import AdminAbout from "../pages/admin/AdminAbout";
import AdminHope from "../pages/admin/AdminHope";
import AdminPortFolio from "../pages/admin/PortFolio/AdminPortFolio";
import AdminContact from "../pages/admin/AdminContact";
import AdminTesimonial from "../pages/admin/AdminTestimonial/AdminTesimonial";
import HopeTestimonial from "../pages/admin/AdminTestimonial/HopeTestimonial";
import AdminOurProgrammes from "../pages/admin/AdminOurProgrammes";

function Admin({ handleLogout }) {
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
        <HeaderAdmin handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AdminAbout />} />
          <Route path="/contactus" element={<AdminContact />} />
          <Route path="/hope" element={<AdminHope />} />
          <Route path="/ourprogrammes" element={<AdminOurProgrammes />} />
          <Route path="/testimonial" element={<AdminTesimonial />} />
          <Route path="/hopetesimonial" element={<HopeTestimonial />} />
          <Route path="/portfolio" element={<AdminPortFolio />} />
        </Routes>
        <FooterAdmin />
      </BrowserRouter>
    </>
  );
}

export default Admin;