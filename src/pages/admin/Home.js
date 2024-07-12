import React from 'react';

function Home() {
    return (
      <section className="bg-white py-2">
        <div className="container-fluid">
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
      </section>
    );
}

export default Home;