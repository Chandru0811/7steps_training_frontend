import React, { useState } from 'react';
import goalImage from "../../assets/Hope1.jpg";
import { FaEdit, FaSave, FaTimes, FaPlus } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useFormik } from "formik";

function AdminHope() {
    const [editMode, setEditMode] = useState({});
    const [previewImage, setPreviewImage] = useState(null);

    const [datas, setDatas] = useState({
        section1: [
            {
                hopeImage: goalImage,
                hopeHeading1: "Goals",
                hopeDescription1:
                    "To develop the 21st Century Competencies that are essential for the child to develop to prepare them for the future.",
                hopeHeading2: "Objectives",
                hopeDescription2:
                    "To cover the 5 social emotional competencies necessary for children to develop healthy identities, recognize and manage emotion, develop a sense of responsibility, care and concern for others, relate to others and develop positive relationships, handle changes, make responsible decisions and act for the good of self, others and the society.",
                objectivesPoints: [
                    "Self Awareness",
                    "Self-Management",
                    "Responsible Decision-Making",
                    "Social Awareness",
                    "Relationship Management",
                ],
            },
        ],
        section2: {
            card1Heading: "Programme Outcomes",
            subcards: [
                {
                    heading: "H",
                    description: [
                        "Acquire lifelong skill that help youth navigate through life",
                        "Be competent",
                        "Install success habits",
                    ],
                },
                {
                    heading: "O",
                    description: [
                        "Create Empowering Belief",
                        "Gain self-awareness through self-love, self-confidence and self-esteem",
                        "Develop positive and progressive self-identity and mindset",
                    ],
                },
                {
                    heading: "P",
                    description: [
                        "Discover your purpose through aligning your Vision, Mission and Values",
                        "Discover your potential through your G.S.T-Gifts, Strengths and Talents",
                        "Discover your passions and create your dream vision",
                    ],
                },
                {
                    heading: "E",
                    description: [
                        "Become confident leaders",
                        "Become leaders with empathy",
                        "Become agents of change in the world",
                    ],
                },
            ],
        },
    });

    const handleEditClick = (section) => {
        setEditMode((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const formik = useFormik({
        initialValues: {
            hopeImage: datas.section1[0].hopeImage,
            hopeHeading1: datas.section1[0].hopeHeading1,
            hopeDescription1: datas.section1[0].hopeDescription1,
            hopeHeading2: datas.section1[0].hopeHeading2,
            hopeDescription2: datas.section1[0].hopeDescription2,
            objectivesPoints: datas.section1[0].objectivesPoints,
            card1Heading: datas.section2.card1Heading,
            subcards: datas.section2.subcards,
        },
        onSubmit: (values) => {
            console.log("Hope Datas:", values);
            if (previewImage) {
                values.hopeImage = URL.createObjectURL(previewImage);
            }
            setDatas((prevState) => ({
                ...prevState,
                section1: [
                    {
                        hopeImage: values.hopeImage,
                        hopeHeading1: values.hopeHeading1,
                        hopeDescription1: values.hopeDescription1,
                        hopeHeading2: values.hopeHeading2,
                        hopeDescription2: values.hopeDescription2,
                        objectivesPoints: values.objectivesPoints,
                    },
                ],
                section2: {
                    card1Heading: values.card1Heading,
                    subcards: values.subcards,
                },
            }));
            setEditMode({});
            setPreviewImage(null);
        },
    });

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPreviewImage(e.target.files[0]);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <section className="hopeSection1 pt-5">
                <div className="container">
                    {/* Section 1 */}
                    <div className="row flex-1 justify-content-center align-items-center">
                        <div className="col-lg-5 col-12 mb-3">
                            {!editMode.hopeImage && (
                                <div className="d-flex justify-content-end mx-4 mb-1">
                                    <FaEdit
                                        className="text-secondary"
                                        onClick={() => handleEditClick("hopeImage")}
                                    />
                                </div>
                            )}
                            {editMode.hopeImage ? (
                                <>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                    <FaSave onClick={formik.handleSubmit} className="text-primary" />
                                    <FaTimes onClick={() => setEditMode({})} className="mx-2 text-danger" />
                                </>
                            ) : null}
                            <img
                                src={previewImage ? URL.createObjectURL(previewImage) : formik.values.hopeImage}
                                alt="Goal"
                                className="img-fluid goalImg"
                            />
                        </div>
                        <div className="col-lg-7 col-12 ">
                            <div className="d-flex align-items-center mb-3">
                                {editMode.hopeHeading1 ? (
                                    <>
                                        <input
                                            type="text"
                                            className="form-control me-2"
                                            name="hopeHeading1"
                                            value={formik.values.hopeHeading1}
                                            onChange={formik.handleChange}
                                        />
                                        <FaSave onClick={formik.handleSubmit} className="text-primary" />
                                        <FaTimes onClick={() => setEditMode({})} className="mx-2 text-danger" />
                                    </>
                                ) : (
                                    <>
                                        <h5 className="fw-bold mb-0" style={{ color: "#7C2C83" }}>
                                            {formik.values.hopeHeading1}
                                        </h5>
                                        <FaEdit
                                            className="ms-2 text-secondary"
                                            onClick={() => handleEditClick("hopeHeading1")}
                                        />
                                    </>
                                )}
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                {editMode.hopeDescription1 ? (
                                    <>
                                        <textarea
                                            className="form-control me-2"
                                            name="hopeDescription1"
                                            value={formik.values.hopeDescription1}
                                            onChange={formik.handleChange}
                                        />
                                        <FaSave onClick={formik.handleSubmit} className="text-primary" />
                                        <FaTimes onClick={() => setEditMode({})} className="mx-2 text-danger" />
                                    </>
                                ) : (
                                    <>
                                        <p className="mb-0">
                                            {formik.values.hopeDescription1}
                                            <FaEdit
                                                className="ms-2 text-secondary"
                                                onClick={() => handleEditClick("hopeDescription1")}
                                            />
                                        </p>
                                    </>
                                )}
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                {editMode.hopeHeading2 ? (
                                    <>
                                        <input
                                            type="text"
                                            className="form-control me-2"
                                            name="hopeHeading2"
                                            value={formik.values.hopeHeading2}
                                            onChange={formik.handleChange}
                                        />
                                        <FaSave onClick={formik.handleSubmit} className="text-primary" />
                                        <FaTimes onClick={() => setEditMode({})} className="mx-2 text-danger" />
                                    </>
                                ) : (
                                    <>
                                        <h5 className="fw-bold mb-0" style={{ color: "#7C2C83" }}>
                                            {formik.values.hopeHeading2}
                                        </h5>
                                        <FaEdit
                                            className="ms-2 text-secondary"
                                            onClick={() => handleEditClick("hopeHeading2")}
                                        />
                                    </>
                                )}
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                {editMode.hopeDescription2 ? (
                                    <>
                                        <textarea
                                            className="form-control me-2"
                                            name="hopeDescription2"
                                            value={formik.values.hopeDescription2}
                                            onChange={formik.handleChange}
                                        />
                                        <FaSave onClick={formik.handleSubmit} className="text-primary" />
                                        <FaTimes onClick={() => setEditMode({})} className="mx-2 text-danger" />
                                    </>
                                ) : (
                                    <>
                                        <p className="mb-0">
                                            {formik.values.hopeDescription2}
                                            <FaEdit
                                                className="ms-2 text-secondary"
                                                onClick={() => handleEditClick("hopeDescription2")}
                                            />
                                        </p>
                                    </>
                                )}
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                {editMode.objectivesPoints ? (
                                    <>
                                        <ul
                                            style={{ listStyle: "none", padding: 0 }}
                                            className="me-2"
                                        >
                                            {formik.values.objectivesPoints.map((point, index) => (
                                                <li key={index} className="mb-2">
                                                    <div className="d-flex">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name={`objectivesPoints[${index}]`}
                                                            value={point}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <IoIosCloseCircleOutline
                                                            className="ms-2 text-danger"
                                                            onClick={() => {
                                                                const newObjectivesPoints = [...formik.values.objectivesPoints];
                                                                newObjectivesPoints.splice(index, 1);
                                                                formik.setFieldValue("objectivesPoints", newObjectivesPoints);
                                                            }}
                                                        />
                                                    </div>
                                                </li>
                                            ))}
                                            <li className="mb-2">
                                                <div className="d-flex">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Add new objective"
                                                        value=""
                                                        onChange={(e) => {
                                                            const newObjectivesPoints = [
                                                                ...formik.values.objectivesPoints,
                                                                e.target.value,
                                                            ];
                                                            formik.setFieldValue("objectivesPoints", newObjectivesPoints);
                                                        }}
                                                    />
                                                    <FaPlus className="ms-2 text-primary" />
                                                </div>
                                            </li>
                                        </ul>
                                        <FaSave onClick={formik.handleSubmit} className="text-primary" />
                                        <FaTimes onClick={() => setEditMode({})} className="mx-2 text-danger" />
                                    </>
                                ) : (
                                    <>
                                        <ul style={{ listStyle: "none", padding: 0 }}>
                                            {formik.values.objectivesPoints.map((point, index) => (
                                                <li key={index} className="mb-2">
                                                    <IoSend
                                                        style={{ color: "#7C2C83" }}
                                                        className="me-2"
                                                    />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                        <FaEdit
                                            className="ms-2 text-secondary"
                                            onClick={() => handleEditClick("objectivesPoints")}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Section 2 */}
                    <div className="row py-5">
                        {!editMode.card1Heading ? (
                            <div className="d-flex justify-content-center align-items-center">
                                <h1 className="fw-bolder mb-5" style={{ color: "#7C2C83" }}>
                                {formik.values.card1Heading}
                                </h1>
                                <FaEdit
                                    onClick={() => handleEditClick("card1Heading")}
                                    className="mb-5 mx-2 text-secondary"
                                />
                            </div>
                        ) : (
                            <div className="d-flex">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    name="card1Heading" // Add this line
                                    value={formik.values.card1Heading}
                                    onChange={formik.handleChange}
                                />
                               <FaSave onClick={formik.handleSubmit} className="mx-2 text-primary" />
                               <FaTimes onClick={() => setEditMode({})} className="text-danger" />
                            </div>
                        )}
                        {formik.values.subcards.map((subcard, index) => (
                            <div
                                key={index}
                                className="col-md-3 col-12 mb-3 mb-md-0 text-center"
                            >
                                <div className="hopeCard p-3">
                                    <h5 className="fw-bold" style={{ color: "#7C2C83" }}>
                                        {subcard.heading}
                                    </h5>
                                    <div className="mt-3">
                                        {subcard.description.map((desc, descIndex) => (
                                            <div key={descIndex} className="d-flex align-items-center mb-2">
                                                {editMode[`subcard${index}description${descIndex}`] ? (
                                                    <>
                                                        <input
                                                            type="text"
                                                            className="form-control me-2"
                                                            name={`subcards[${index}].description[${descIndex}]`}
                                                            value={formik.values.subcards[index].description[descIndex]}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <FaSave onClick={formik.handleSubmit} className="text-primary" />
                                                        <FaTimes
                                                            onClick={() => setEditMode({})}
                                                            className="mx-2 text-danger"
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <p className="mb-0">
                                                            {desc}
                                                            <FaEdit
                                                                className="ms-2 text-secondary"
                                                                onClick={() =>
                                                                    handleEditClick(`subcard${index}description${descIndex}`)
                                                                }
                                                            />
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </form>
    );
}

export default AdminHope;
