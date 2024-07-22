import React, { useState } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { useFormik } from 'formik';

function PrivacyPolicy() {
    const [data, setData] = useState({
        privacypolicy: `ECS Cloud Infotech Pte. Ltd. ("ECS Cloud Infotech", "us", or "we") is committed to protecting your
        privacy and complying with all applicable data protection and privacy laws in Singapore. This
        Privacy Policy Statement explains how we collect, use, and protect your personal information when
        you visit our website, request information about our products and services, or interact with us
        through various communication channels.`
    });

    const formik = useFormik({
        initialValues: data,
        onSubmit: (values) => {
            console.log(values);
            setData(values);
        },
    });

    const [isEditing, setIsEditing] = useState(null);

    const handleEditClick = (field) => {
        setIsEditing(field);
    };

    const handleSaveClick = () => {
        setIsEditing(null);
        formik.handleSubmit();
    };

    const handleCancel = () => {
        setIsEditing(null);
    };

    return (
        <section>
            <form onSubmit={formik.handleSubmit}>
                <div className='container-fluid mb-4 mt-4'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4 className='fw-bold'>Privacy Policy</h4>
                        </div>
                        <div>
                            <button type="button" className="btn btn-button btn-sm px-4 py-2">
                                Publish
                            </button>
                        </div>
                    </div>
                    {isEditing === "privacypolicy" ? (
                        <div>
                            <div className="d-flex">
                                <button
                                    type="button"
                                    onClick={handleSaveClick}
                                    className="btn btn-sm link-primary ms-2 edit-button"
                                    style={{ width: "fit-content" }}
                                >
                                    <FaSave />
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="btn btn-sm link-danger ms-2 edit-button"
                                    style={{ width: "fit-content" }}
                                >
                                    <FaTimes />
                                </button>
                            </div>
                            <textarea
                                name="privacypolicy"
                                {...formik.getFieldProps("privacypolicy")}
                                onChange={formik.handleChange}
                                className="form-control"
                                rows="4"
                            />
                        </div>
                    ) : (
                        <div>
                            <button
                                type="button"
                                onClick={() => handleEditClick("privacypolicy")}
                                className="btn btn-sm link-secondary ms-2 edit-button"
                                style={{ width: "fit-content" }}
                            >
                                <FaEdit />
                            </button>
                            <p>{formik.values.privacypolicy}</p>
                        </div>
                    )}
                </div>
            </form>
        </section>
    );
}

export default PrivacyPolicy;
