import React, { useState } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function PrivacyPolicy() {
    const [isEditing, setIsEditing] = useState(null);

    const initialData = {
        introduction: `ECS Cloud Infotech Pte. Ltd. ("ECS Cloud Infotech", "us", or "we") is committed to protecting your
        privacy and complying with all applicable data protection and privacy laws in Singapore. This
        Privacy Policy Statement explains how we collect, use, and protect your personal information when
        you visit our website, request information about our products and services, or interact with us
        through various communication channels.`,
        personalData: `For the purposes of this Privacy Policy, "Personal Data" refers to any information that relates to an identified or
        identifiable individual.`,
        informationCollection: `We endeavour to collect and use your personal information only with your knowledge and consent. We typically
        collect personal information when you:`,
        dataRetention: `We do not rent, sell, trade, or share your personal information with third-party organisations. We may disclose information about you:`,
        thirdPartyAPI: `Our use of information received from third-party integrations (e.g., Google, AWS, Microsoft) will adhere to their respective API services and usage policies.`,
        otherWebsites: `Our website may contain links to other websites not owned or operated by us. We are not responsible for the privacy practices or content of such websites.`,
        contactUs: `If you have questions or concerns about this Privacy Policy, please email us at
        mailto:info@ecscloudinfotech.com.`,
        informationCollectionList: [
            "Place an order or use our products and services",
            "Make customer enquiries or register for product information",
            "Submit a job application or respond to our communications (e.g., questionnaires, surveys, or online ads)"
        ],
        dataRetentionList: [
            "To companies and departments within the ECS Cloud Infotech Group, subject to this Privacy Policy Statement",
            "In the event of a reorganisation or sale to a third party, provided that your personal information is transferred for the purposes described in this Privacy Policy Statement",
            "To comply with legal requirements or protect the rights, property, or safety of ECS Cloud Infotech, our visitors, or others"
        ],
    };

    const formik = useFormik({
        initialValues: initialData,
        validationSchema: Yup.object({
            introduction: Yup.string().required('Introduction is required'),
            personalData: Yup.string().required('Personal Data is required'),
            informationCollection: Yup.string().required('Information Collection is required'),
            dataRetention: Yup.string().required('Data Retention is required'),
            thirdPartyAPI: Yup.string().required('Third-Party API Integration is required'),
            otherWebsites: Yup.string().required('Other Websites and Privacy Concerns are required'),
            contactUs: Yup.string().email('Invalid email format').required('Contact Us is required'),
            informationCollectionList: Yup.array().of(Yup.string().required('Item is required')),
            dataRetentionList: Yup.array().of(Yup.string().required('Item is required')),
        }),
        onSubmit: (values) => {
            console.log(values);
            setIsEditing(null);
        },
    });

    const handleEditClick = (field) => {
        setIsEditing(field);
    };

    const handleSaveClick = () => {
        formik.handleSubmit();
    };

    const handleCancel = () => {
        setIsEditing(null);
        formik.resetForm();
    };

    const renderSection = (title, field, rows = 5) => (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h5 className='fw-bold'>{title}</h5>
                <button
                    onClick={() => handleEditClick(field)}
                    className="btn btn-sm link-secondary edit-button"
                    style={{ width: "fit-content" }}
                >
                    <FaEdit />
                </button>
            </div>
            {isEditing === field ? (
                <div>
                    <textarea
                        name={field}
                        value={formik.values[field]}
                        onChange={formik.handleChange}
                        className="form-control"
                        rows={rows}
                    />
                    {formik.errors[field] && formik.touched[field] && (
                        <div className="text-danger">{formik.errors[field]}</div>
                    )}
                    <div className="d-flex">
                        <button onClick={handleSaveClick} className="btn btn-sm link-primary ms-2 edit-button" style={{ width: "fit-content" }}><FaSave /></button>
                        <button onClick={handleCancel} className="btn btn-sm link-danger  ms-2 edit-button" style={{ width: "fit-content" }}><FaTimes /></button>
                    </div>
                </div>
            ) : (
                <p>{formik.values[field]}</p>
            )}
        </>
    );

    const renderListSection = (field) => (
        <div className="d-flex justify-content-between">
            {isEditing === field ? (
                <div>
                    <ul>
                        {formik.values[field].map((item, index) => (
                            <li key={index}>
                                <input
                                    type="text"
                                    value={item}
                                    onChange={(e) => formik.setFieldValue(`${field}[${index}]`, e.target.value)}
                                    className="form-control mb-2"
                                />
                                {formik.errors[field] && formik.touched[field] && formik.errors[field][index] && (
                                    <div className="text-danger">{formik.errors[field][index]}</div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex">
                        <button onClick={handleSaveClick} className="btn btn-sm link-primary ms-2 edit-button" style={{ width: "fit-content" }}><FaSave /></button>
                        <button onClick={handleCancel} className="btn btn-sm link-danger  ms-2 edit-button" style={{ width: "fit-content" }}><FaTimes /></button>
                    </div>
                </div>
            ) : (
                <ul>
                    {formik.values[field].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            <div>
                <button
                    onClick={() => handleEditClick(field)}
                    className="btn btn-sm link-secondary edit-button"
                    style={{ width: "fit-content" }}
                >
                    <FaEdit />
                </button>
            </div>
        </div>
    );

    return (
        <section>
            <div className='container-fluid mb-4 mt-4'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4 className='fw-bold'>Privacy And Policy</h4>
                    </div>
                    <div>
                        <button type="button" className="btn btn-button btn-sm px-4">
                            Publish
                        </button>
                    </div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    {renderSection('Introduction', 'introduction')}
                    {renderSection('Personal Data', 'personalData', 3)}
                    {renderSection('Information Collection', 'informationCollection')}
                    {renderListSection('informationCollectionList')}
                    {renderSection('Data Retention', 'dataRetention')}
                    {renderListSection('dataRetentionList')}
                    {renderSection('Third-Party API Integration', 'thirdPartyAPI', 3)}
                    {renderSection('Other Websites and Privacy Concerns', 'otherWebsites', 3)}
                    {renderSection('Contact Us', 'contactUs', 3)}
                </form>
            </div>
        </section>
    );
}

export default PrivacyPolicy;
