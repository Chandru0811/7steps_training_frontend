import React, { useState } from 'react';
import goalImage from "../../assets/Hope1.jpg";
import { FaEdit, FaSave, FaTimes, FaPlus, FaCheckSquare } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useFormik } from "formik";

function AdminHope() {
    const [editMode, setEditMode] = useState({});
    const [previewImage, setPreviewImage] = useState(null);

    const [datas, setDatas] = useState({
        section1: {
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
        section2: {
            hopeHeading3: "Programme Outcomes",
            programmeCards: [
                {
                    id: 1,
                    heading: "H",
                    description: [
                        "Acquire lifelong skill that help youth navigate through life",
                        "Be competent",
                        "Install success habits",
                    ],
                },
                {
                    id: 2,
                    heading: "O",
                    description: [
                        "Create Empowering Belief",
                        "Gain self-awareness through self-love, self-confidence and self-esteem",
                        "Develop positive and progressive self-identity and mindset",
                    ],
                },
                {
                    id: 3,
                    heading: "P",
                    description: [
                        "Discover your purpose through aligning your Vision, Mission and Values",
                        "Discover your potential through your G.S.T-Gifts, Strengths and Talents",
                        "Discover your passions and create your dream vision",
                    ],
                },
                {
                    id: 4,
                    heading: "E",
                    description: [
                        "Become confident leaders",
                        "Become leaders with empathy",
                        "Become agents of change in the world",
                    ],
                },
            ],
        },
        section3: {
            hopeHeading4: "Modules",
            hContent: "HARNESSING LIFELONG HABITS",
            hPoints: [
                "Speaking Success (Speaking and Communicating effectively)",
                "Exam and Study Success (Acing Your Exams)",
                "Interview Success (Getting through any Interview)",
                "Self-Management Success (Managing your Time, Procrastination & Organisation skills/Atomic habits)",
                "Money Success (Money management system - Budgeting, Spending and Investing Wisely)",
                "Health Success (Physical, Mental & Emotional Wellbeing - Managing Stress, Self-care,Grooming, Nutrition ,Exercise, Hobbies, Developing Creativity)"
            ],
            oContent: "OPTIMISED MINDSET",
            oPoints: [
                "Self Love",
                "Self esteem",
                "Self confidence",
                "Belief and Your Subconscious Mind",
                "Positive, Resilience & Growth Mindset"
            ],
            pContent: "PURPOSE, POTENTIAL AND PASSION",
            pPoints: [
                "Crafting your vision, mission and value (P1)",
                "Strength Finder/Discover your GST (gift, strength, talent)",
                "Developing potential",
                "Goal setting",
                "Future Planning"
            ],
            eContent: "EMPOWERED LEADER",
            ePoints: [
                "Understanding Leadership",
                "Building Confidence",
                "Empathy",
                "Be the Change",
                "Guiding the Team - Leading Others",
                "Student Leaders in Action"
            ]
        }
    });

    const handleEditClick = (section) => {
        setEditMode((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const formik = useFormik({
        initialValues: {
            hopeImage: datas.section1.hopeImage,
            hopeHeading1: datas.section1.hopeHeading1,
            hopeDescription1: datas.section1.hopeDescription1,
            hopeHeading2: datas.section1.hopeHeading2,
            hopeDescription2: datas.section1.hopeDescription2,
            objectivesPoints: datas.section1.objectivesPoints,
            hopeHeading3: datas.section2.hopeHeading3,
            programmeCards: datas.section2.programmeCards,
            hopeHeading4: datas.section3.hopeHeading4,
            hContent: datas.section3.hContent,
            hPoints: datas.section3.hPoints,
            oContent: datas.section3.oContent,
            oPoints: datas.section3.oPoints,
            pContent: datas.section3.pContent,
            pPoints: datas.section3.pPoints,
            eContent: datas.section3.eContent,
            ePoints: datas.section3.ePoints
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
                    hopeHeading3: values.hopeHeading3,
                    programmeCards: values.programmeCards,
                },
                section3: {
                    hopeHeading4: values.hopeHeading4,
                    hContent: values.hContent,
                    hPoints: values.hPoints,
                    oContent: values.oContent,
                    oPoints: values.oPoints,
                    pContent: values.pContent,
                    pPoints: values.pPoints,
                    eContent: values.eContent,
                    ePoints: values.ePoints
                }
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

    const handlePointsChange = (e, index) => {
        const { value } = e.target;
        formik.setFieldValue(
            "objectivesPoints",
            formik.values.objectivesPoints.map((point, i) => (i === index ? value : point))
        );
    };

    const handleAddPoint = () => {
        formik.setFieldValue("objectivesPoints", [
            ...formik.values.objectivesPoints,
            "",
        ]);
    };

    const handleDeletePoint = (index) => {
        formik.setFieldValue(
            "objectivesPoints",
            formik.values.objectivesPoints.filter((_, i) => i !== index)
        );
    };

    const handleDescriptionChange = (e, cardIndex, descIndex) => {
        const { value } = e.target;
        const newProgrammeCards = formik.values.programmeCards.map((card, i) => {
            if (i === cardIndex) {
                return {
                    ...card,
                    description: card.description.map((desc, j) =>
                        j === descIndex ? value : desc
                    ),
                };
            }
            return card;
        });
        formik.setFieldValue("programmeCards", newProgrammeCards);
    };

    const handleAddDescription = (cardIndex) => {
        const newProgrammeCards = formik.values.programmeCards.map((card, i) => {
            if (i === cardIndex) {
                return {
                    ...card,
                    description: [...card.description, ""],
                };
            }
            return card;
        });
        formik.setFieldValue("programmeCards", newProgrammeCards);
    };

    const handleDeleteDescription = (cardIndex, descIndex) => {
        const newProgrammeCards = formik.values.programmeCards.map((card, i) => {
            if (i === cardIndex) {
                return {
                    ...card,
                    description: card.description.filter((_, j) => j !== descIndex),
                };
            }
            return card;
        });
        formik.setFieldValue("programmeCards", newProgrammeCards);
    };

    const handlePointsChange1 = (e, index) => {
        const { value } = e.target;
        formik.setFieldValue(
            "hPoints",
            formik.values.hPoints.map((point, i) => (i === index ? value : point))
        );
    };

    const handleAddPoint1 = () => {
        formik.setFieldValue("hPoints", [
            ...formik.values.hPoints,
            "",
        ]);
    };

    const handleDeletePoint1 = (index) => {
        formik.setFieldValue(
            "hPoints",
            formik.values.hPoints.filter((_, i) => i !== index)
        );
    };

    const handlePointsChange2 = (e, index) => {
        const { value } = e.target;
        formik.setFieldValue(
            "oPoints",
            formik.values.oPoints.map((point, i) => (i === index ? value : point))
        );
    };

    const handleAddPoint2 = () => {
        formik.setFieldValue("oPoints", [
            ...formik.values.oPoints,
            "",
        ]);
    };

    const handleDeletePoint2 = (index) => {
        formik.setFieldValue(
            "oPoints",
            formik.values.oPoints.filter((_, i) => i !== index)
        );
    };

    const handlePointsChange3 = (e, index) => {
        const { value } = e.target;
        formik.setFieldValue(
            "pPoints",
            formik.values.pPoints.map((point, i) => (i === index ? value : point))
        );
    };

    const handleAddPoint3 = () => {
        formik.setFieldValue("pPoints", [
            ...formik.values.pPoints,
            "",
        ]);
    };

    const handleDeletePoint3 = (index) => {
        formik.setFieldValue(
            "pPoints",
            formik.values.pPoints.filter((_, i) => i !== index)
        );
    };

    const handlePointsChange4 = (e, index) => {
        const { value } = e.target;
        formik.setFieldValue(
            "ePoints",
            formik.values.ePoints.map((point, i) => (i === index ? value : point))
        );
    };

    const handleAddPoint4 = () => {
        formik.setFieldValue("ePoints", [
            ...formik.values.ePoints,
            "",
        ]);
    };

    const handleDeletePoint4 = (index) => {
        formik.setFieldValue(
            "ePoints",
            formik.values.ePoints.filter((_, i) => i !== index)
        );
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <section className="pt-5">
                {/* Section 1 */}
                <div className="container hopeSection1">
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
                                        <ul style={{ listStyle: "none", padding: 0 }} className="me-2">
                                            {formik.values.objectivesPoints.map((point, index) => (
                                                <li key={index} className="d-flex align-items-center mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={point}
                                                        onChange={(e) => handlePointsChange(e, index)}
                                                    />
                                                    <IoIosCloseCircleOutline
                                                        className="ms-2 mt-2 sectionHome1Cancel"
                                                        onClick={() => handleDeletePoint(index)}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="d-flex">
                                            <FaPlus onClick={handleAddPoint} className="text-success" />
                                            <FaSave onClick={formik.handleSubmit} className="text-primary mx-2" />
                                            <FaTimes onClick={() => setEditMode({})} className="text-danger" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <ul style={{ listStyle: "none", padding: 0 }}>
                                            {formik.values.objectivesPoints.map((point, index) => (
                                                <li key={index}>{index + 1}. {point}</li>
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
                </div>
                {/* Section 2 */}
                <div className="container py-5 hopeSection1">
                    {editMode.hopeHeading3 ? (
                        <div className='d-flex'>
                            <input
                                type="text"
                                className="form-control mb-3"
                                name="hopeHeading3"
                                value={formik.values.hopeHeading3}
                                onChange={formik.handleChange}
                            />
                            <FaSave onClick={formik.handleSubmit} className="mt-2 mx-2 text-primary" />
                            <FaTimes onClick={() => setEditMode({})} className="mt-2 text-danger" />
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center align-items-center">
                            <h1 className="fw-bolder mb-5" style={{ color: "#7C2C83" }}>
                                {formik.values.hopeHeading3}
                            </h1>
                            <FaEdit
                                className="mb-5 ms-2 text-secondary"
                                onClick={() => handleEditClick("hopeHeading3")}
                            />
                        </div>
                    )}
                    <div className="row">
                        {formik.values.programmeCards.map((card, cardIndex) => (
                            <div className="col-md-6 col-lg-6 col-xl-3 col-12 mb-3" key={cardIndex}>
                                <div className="card programmeCard h-100">
                                    <div className="programmeHeading">
                                        {card.heading}
                                    </div>
                                    <div className="card-body">
                                        {editMode[`card-${cardIndex}`] ? (
                                            <>
                                                <ul style={{ listStyle: "none", padding: 0 }} className="me-2">
                                                    {card.description.map((desc, descIndex) => (
                                                        <li key={descIndex} className="d-flex align-items-center mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={desc}
                                                                onChange={(e) => handleDescriptionChange(e, cardIndex, descIndex)}
                                                            />
                                                            <IoIosCloseCircleOutline
                                                                className="ms-2 mt-2 sectionHome1Cancel"
                                                                onClick={() => handleDeleteDescription(cardIndex, descIndex)}
                                                            />
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="d-flex">
                                                    <FaPlus onClick={() => handleAddDescription(cardIndex)} className="text-success" />
                                                    <FaSave onClick={formik.handleSubmit} className="text-primary mx-2" />
                                                    <FaTimes onClick={() => setEditMode({})} className="text-danger" />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <ul style={{ listStyle: "none" }}>
                                                    {card.description.map((desc, descIndex) => (
                                                        <li key={descIndex} className="mb-3">
                                                            <IoSend color="#7C2C83" /> {desc}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <FaEdit
                                                    className="position-absolute top-0 end-0 mt-5 me-3 text-secondary"
                                                    onClick={() => handleEditClick(`card-${cardIndex}`)}
                                                />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Section 3 */}
                <section className='hopeSection2 pb-5'>
                    <div className='container py-4'>
                        {editMode.hopeHeading4 ? (
                            <div className='d-flex'>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    name="hopeHeading4"
                                    value={formik.values.hopeHeading4}
                                    onChange={formik.handleChange}
                                />
                                <FaSave onClick={formik.handleSubmit} className="mt-2 mx-2 text-primary" />
                                <FaTimes onClick={() => setEditMode({})} className="mt-2 text-danger" />
                            </div>
                        ) : (
                            <div className="d-flex justify-content-center align-items-center">
                                <h1 className="fw-bolder mb-5">
                                    {formik.values.hopeHeading4}
                                </h1>
                                <FaEdit
                                    className="mb-5 ms-2 text-secondary"
                                    onClick={() => handleEditClick("hopeHeading4")}
                                />
                            </div>
                        )}
                        <div className='row hopeCardRow pt-5'>
                            <div className='col-md-3 col-12 hopeImageCard1'>
                                <div className='card modulesCard p-3'>
                                    <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'><span className='modulesHeading'>H</span>OPE</h1>
                                    {editMode.hContent ? (
                                        <div className='d-flex'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="hContent"
                                                value={formik.values.hContent}
                                                onChange={formik.handleChange}
                                            />
                                            <FaSave onClick={formik.handleSubmit} className="mt-2 mx-2 text-primary" />
                                            <FaTimes onClick={() => setEditMode({})} className="mt-2 text-danger" />
                                        </div>
                                    ) : (
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h4 className="text-center">
                                                {formik.values.hContent}
                                            </h4>
                                            <FaEdit
                                                className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                                onClick={() => handleEditClick("hContent")}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='col-md-9 col-12'>
                                <div className='card modulesSubcard1 p-3'>
                                    {editMode.hPoints ? (
                                        <>
                                            <ul style={{ listStyle: "none", padding: 0 }} className="me-2">
                                                {formik.values.hPoints.map((point, index) => (
                                                    <li key={index} className="d-flex align-items-center mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={point}
                                                            onChange={(e) => handlePointsChange1(e, index)}
                                                        />
                                                        <IoIosCloseCircleOutline
                                                            className="ms-2 mt-2 sectionHome1Cancel"
                                                            onClick={() => handleDeletePoint1(index)}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="d-flex">
                                                <FaPlus onClick={handleAddPoint1} className="text-success" />
                                                <FaSave onClick={formik.handleSubmit} className="text-primary mx-2" />
                                                <FaTimes onClick={() => setEditMode({})} className="text-danger" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <ul style={{ listStyle: "none", padding: 0 }}>
                                                {formik.values.hPoints.map((point, index) => (
                                                    <li key={index} className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1' /> {point}</li>
                                                ))}
                                            </ul>
                                            <FaEdit
                                                className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                                onClick={() => handleEditClick("hPoints")}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='row hopeCardRow2 mt-5 pt-5'>
                            <div className='col-md-9 col-12 order-md-1 order-2'>
                                <div className='card modulesSubcard2 p-3'>
                                    {editMode.oPoints ? (
                                        <>
                                            <ul style={{ listStyle: "none", padding: 0 }} className="me-2">
                                                {formik.values.oPoints.map((point, index) => (
                                                    <li key={index} className="d-flex align-items-center mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={point}
                                                            onChange={(e) => handlePointsChange2(e, index)}
                                                        />
                                                        <IoIosCloseCircleOutline
                                                            className="ms-2 mt-2 sectionHome1Cancel"
                                                            onClick={() => handleDeletePoint2(index)}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="d-flex">
                                                <FaPlus onClick={handleAddPoint2} className="text-success" />
                                                <FaSave onClick={formik.handleSubmit} className="text-primary mx-2" />
                                                <FaTimes onClick={() => setEditMode({})} className="text-danger" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <ul style={{ listStyle: "none", padding: 0 }}>
                                                {formik.values.oPoints.map((point, index) => (
                                                    <li key={index} className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1' /> {point}</li>
                                                ))}
                                            </ul>
                                            <FaEdit
                                                className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                                onClick={() => handleEditClick("oPoints")}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className='col-md-3 col-12 hopeImageCard2 order-md-2 order-1'>
                                <div className='card modulesCard p-3'>
                                    <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'>H<span className='modulesHeading'>O</span>PE</h1>
                                    {editMode.oContent ? (
                                        <div className='d-flex'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="oContent"
                                                value={formik.values.oContent}
                                                onChange={formik.handleChange}
                                            />
                                            <FaSave onClick={formik.handleSubmit} className="mt-2 mx-2 text-primary" />
                                            <FaTimes onClick={() => setEditMode({})} className="mt-2 text-danger" />
                                        </div>
                                    ) : (
                                        <>
                                            <FaEdit
                                                className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                                onClick={() => handleEditClick("oContent")}
                                            />
                                            <h4 className="text-center">
                                                {formik.values.oContent}
                                            </h4>
                                            
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='row hopeCardRow pt-5' style={{ marginTop: "100px" }}>
                            <div className='col-md-3 col-12 hopeImageCard1'>
                                <div className='card modulesCard p-3'>
                                    <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'>HO<span className='modulesHeading'>P</span>E</h1>
                                    {editMode.pContent ? (
                                        <div className='d-flex'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="pContent"
                                                value={formik.values.pContent}
                                                onChange={formik.handleChange}
                                            />
                                            <FaSave onClick={formik.handleSubmit} className="mt-2 mx-2 text-primary" />
                                            <FaTimes onClick={() => setEditMode({})} className="mt-2 text-danger" />
                                        </div>
                                    ) : (
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h4 className="text-center">
                                                {formik.values.pContent}
                                            </h4>
                                            <FaEdit
                                                className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                                onClick={() => handleEditClick("pContent")}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='col-md-9 col-12'>
                                <div className='card modulesSubcard1 p-3'>
                                    {editMode.pPoints ? (
                                        <>
                                            <ul style={{ listStyle: "none", padding: 0 }} className="me-2">
                                                {formik.values.pPoints.map((point, index) => (
                                                    <li key={index} className="d-flex align-items-center mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={point}
                                                            onChange={(e) => handlePointsChange3(e, index)}
                                                        />
                                                        <IoIosCloseCircleOutline
                                                            className="ms-2 mt-2 sectionHome1Cancel"
                                                            onClick={() => handleDeletePoint3(index)}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="d-flex">
                                                <FaPlus onClick={handleAddPoint3} className="text-success" />
                                                <FaSave onClick={formik.handleSubmit} className="text-primary mx-2" />
                                                <FaTimes onClick={() => setEditMode({})} className="text-danger" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <ul style={{ listStyle: "none", padding: 0 }}>
                                                {formik.values.pPoints.map((point, index) => (
                                                    <li key={index} className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1' /> {point}</li>
                                                ))}
                                            </ul>
                                            <FaEdit
                                                className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                                onClick={() => handleEditClick("pPoints")}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='row hopeCardRow2 mt-5 pt-5'>
                            <div className='col-md-9 col-12 order-md-1 order-2'>
                                <div className='card modulesSubcard2 p-3'>
                                    {editMode.ePoints ? (
                                        <>
                                            <ul style={{ listStyle: "none", padding: 0 }} className="me-2">
                                                {formik.values.ePoints.map((point, index) => (
                                                    <li key={index} className="d-flex align-items-center mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={point}
                                                            onChange={(e) => handlePointsChange4(e, index)}
                                                        />
                                                        <IoIosCloseCircleOutline
                                                            className="ms-2 mt-2 sectionHome1Cancel"
                                                            onClick={() => handleDeletePoint4(index)}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="d-flex">
                                                <FaPlus onClick={handleAddPoint4} className="text-success" />
                                                <FaSave onClick={formik.handleSubmit} className="text-primary mx-2" />
                                                <FaTimes onClick={() => setEditMode({})} className="text-danger" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <ul style={{ listStyle: "none", padding: 0 }}>
                                                {formik.values.ePoints.map((point, index) => (
                                                    <li key={index} className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1' /> {point}</li>
                                                ))}
                                            </ul>
                                            <FaEdit
                                                className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                                onClick={() => handleEditClick("ePoints")}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className='col-md-3 col-12 hopeImageCard2 order-md-2 order-1'>
                                <div className='card modulesCard p-3'>
                                    <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'>HOP<span className='modulesHeading'>E</span></h1>
                                    {editMode.eContent ? (
                                        <div className='d-flex'>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="eContent"
                                                value={formik.values.eContent}
                                                onChange={formik.handleChange}
                                            />
                                            <FaSave onClick={formik.handleSubmit} className="mt-2 mx-2 text-primary" />
                                            <FaTimes onClick={() => setEditMode({})} className="mt-2 text-danger" />
                                        </div>
                                    ) : (
                                        <>
                                            <FaEdit
                                                className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                                onClick={() => handleEditClick("eContent")}
                                            />
                                            <h4 className="text-center">
                                                {formik.values.eContent}
                                            </h4>
                                            
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </form>
    );
}

export default AdminHope;