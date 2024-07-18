import React, { useState } from 'react';
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { useFormik } from "formik";

function AdminFooter() {
    const [editMode, setEditMode] = useState({});

    const [datas, setDatas] = useState({
        footerNote: "7 Steps Transformation is a life coaching company that aspires to change lives through mindset awakening and reprogramming.",
        copyrights: "2024 © Copyright 7 Steps Transformation. All Rights Reserved."
    });

    const formik = useFormik({
        initialValues: {
            footerNote: datas.footerNote,
            copyrights: datas.copyrights,
        },
        onSubmit: (values) => {
            console.log("Footer Datas :", values);
            setDatas(values);
            setEditMode({});
        },
    });

    const handleEditClick = (field) => {
        setEditMode((prevState) => ({
            ...prevState,
            [field]: true,
        }));
    };

    const handleSave = (field) => {
        formik.handleSubmit();
        setEditMode((prevState) => ({
            ...prevState,
            [field]: false,
        }));
    };

    const handleCancel = (field) => {
        formik.resetForm();
        setEditMode((prevState) => ({
            ...prevState,
            [field]: false,
        }));
    };

    const handleChange = (e, key) => {
        formik.setFieldValue(key, e.target.value);
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
                                <span>{datas.footerNote}</span>
                                <FaEdit onClick={() => handleEditClick("footerNote")} className='mx-3' />
                            </>
                        ) : (
                            <>
                                <textarea
                                    className="form-control mb-1"
                                    {...formik.getFieldProps("footerNote")}
                                    value={formik.values.footerNote}
                                    onChange={(e) => handleChange(e, "footerNote")}
                                />
                                <FaSave onClick={() => handleSave("footerNote")} />
                                <FaTimes onClick={() => handleCancel("footerNote")} className='mx-2' />
                            </>
                        )}
                    </div>
                    <div className='offset-1 col-7'>
                        {!editMode.copyrights ? (
                            <>
                                <span>{datas.copyrights}</span>
                                <FaEdit onClick={() => handleEditClick("copyrights")} className='mx-3' />
                            </>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    className="form-control mb-1"
                                    {...formik.getFieldProps("copyrights")}
                                    value={formik.values.copyrights}
                                    onChange={(e) => handleChange(e, "copyrights")}
                                />
                                <FaSave onClick={() => handleSave("copyrights")} />
                                <FaTimes onClick={() => handleCancel("copyrights")} className='mx-2' />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminFooter;