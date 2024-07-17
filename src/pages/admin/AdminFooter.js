import React, { useState } from 'react';
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

function AdminFooter() {

    const [footerText, setFooterText] = useState({
        footerNote: "7 Steps Transformation is a life coaching company that aspires to change lives through mindset awakening and reprogramming.",
        copyrights: "2024 © Copyright 7 Steps Transformation. All Rights Reserved."
    });

    const [editMode, setEditMode] = useState({
        footerNote: false,
        copyrights: false
    });

    const handleEditClick = (section) => {
        setEditMode((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const handleSave = () => {
        setEditMode({
            footerNote: false,
            copyrights: false
        });
    };

    const handleCancel = () => {
        setEditMode({
            footerNote: false,
            copyrights: false
        });
    };

    const handlefooterNoteChange = (e) => {
        setFooterText((prevState) => ({
            ...prevState,
            footerNote: e.target.value,
        }));
    };

    const handlecopyrightsChange = (e) => {
        setFooterText((prevState) => ({
            ...prevState,
            copyrights: e.target.value,
        }));
    };

    return (
        <section>
            <div className="container-fluid py-2 bg-white">
                <div className="row">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold">Footer</h5>
                        <div>
                            <button type="button" className="btn btn-button btn-sm px-4">
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-4'>
                        {!editMode.footerNote ? (
                            <>
                                <span>{footerText.footerNote}</span>
                                <FaEdit onClick={() => handleEditClick("footerNote")} className='mx-3' />
                            </>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    className="form-control mb-1"
                                    value={footerText.footerNote}
                                    onChange={handlefooterNoteChange}
                                />
                                <FaSave onClick={handleSave} />
                                <FaTimes onClick={handleCancel} className='mx-2' />
                            </>
                        )}
                    </div>
                    <div className='offset-1 col-7'>
                        {!editMode.copyrights ? (
                            <>
                                <span>{footerText.copyrights}</span>
                                <FaEdit onClick={() => handleEditClick("copyrights")} className='mx-3' />
                            </>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    className="form-control mb-1"
                                    value={footerText.copyrights}
                                    onChange={handlecopyrightsChange}
                                />
                                <FaSave onClick={handleSave} />
                                <FaTimes onClick={handleCancel} className='mx-2' />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminFooter;