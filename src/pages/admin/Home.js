import React from "react";
import AdminHome from "./AdminHome/AdminHome";

function Home() {
  return (
    <section className="bg-white">
      <div className="container-fluid py-2">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">Home</h5>
            <div>
              {/* <button type="button" className="btn btn-light btn-sm mx-3">
                  Back
                </button> */}
              <button type="button" className="btn btn-button btn-sm">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
      <AdminHome />
    </section>
  );
}

export default Home;
