import React from 'react';
import SectionHope1 from "../admin/AdminHope/SectionHope1";
import SectionHope2 from "../admin/AdminHope/SectionHope2";

function AdminHope() {
    return (
        <section>
            <div className="container-fluid py-2 bg-white">
                <div className="row">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold">HOPE</h5>
                        <div>
                            <button type="button" className="btn btn-button btn-sm px-4">
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <SectionHope1 />
            <SectionHope2 />
        </section>
    )
}

export default AdminHope;