import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import HeaderAdmin from "../components/admin/common/HeaderAdmin";
import FooterAdmin from "../components/admin/common/FooterAdmin";
import { Toaster } from "react-hot-toast";

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
        <HeaderAdmin />
        <Routes>
          <Route path="/" element={<Dashboard handleLogout={handleLogout} />} />
        </Routes>
        <FooterAdmin />
      </BrowserRouter>
    </>
  );
}

export default Admin;
