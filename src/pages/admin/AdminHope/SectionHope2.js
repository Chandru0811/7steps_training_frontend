import React, { useState } from 'react';
import { FaCheckSquare } from "react-icons/fa";
import { FaEdit, FaSave, FaTimes, FaPlus } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

function HopeSection2() {

    const [newPoint, setNewPoint] = useState('');

    const [section3Text, setSection3Text] = useState({
        heading: "Modules",
        card1Content: "HARNESSING LIFELONG HABITS",
        subcard1Description: [
            "Speaking Success (Speaking and Communicating effectively)",
            "Exam and Study Success (Acing Your Exams)",
            "Interview Success (Getting through any Interview)",
            "Self-Management Success (Managing your Time, Procrastination & Organisation skills/Atomic habits)",
            "Money Success (Money management system - Budgeting, Spending and Investing Wisely)",
            "Health Success (Physical, Mental & Emotional Wellbeing - Managing Stress, Self-care,Grooming, Nutrition ,Exercise, Hobbies, Developing Creativity)"
        ],
        card2Content: "OPTIMISED MINDSET",
        subcard2Description: [
            "Self Love",
            "Self esteem",
            "Self confidence",
            "Belief and Your Subconscious Mind",
            "Positive, Resilience & Growth Mindset"
        ],
        card3Content: "PURPOSE, POTENTIAL AND PASSION",
        subcard3Description: [
            "Crafting your vision, mission and value (P1)",
            "Strength Finder/Discover your GST (gift, strength, talent)",
            "Developing potential",
            "Goal setting",
            "Future Planning"
        ],
        card4Content: "EMPOWERED LEADER",
        subcard4Description: [
            "Understanding Leadership",
            "Building Confidence",
            "Empathy",
            "Be the Change",
            "Guiding the Team - Leading Others",
            "Student Leaders in Action"
        ]
    });

    const [editMode, setEditMode] = useState({
        heading: false,
        card1Content: false,
        subcard1Description: false,
        card2Content: false,
        subcard2Description: false,
        card3Content: false,
        subcard3Description: false,
        card4Content: false,
        subcard4Description: false,
    });

    const handleEditClick = (section) => {
        setEditMode((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const handleSave = () => {
        setEditMode({
            heading: false,
            card1Content: false,
            subcard1Description: false,
            card2Content: false,
            subcard2Description: false,
            card3Content: false,
            subcard3Description: false,
            card4Content: false,
            subcard4Description: false,
        });
    };

    const handleCancel = () => {
        setEditMode({
            heading: false,
            card1Content: false,
            subcard1Description: false,
            card2Content: false,
            subcard2Description: false,
            card3Content: false,
            subcard3Description: false,
            card4Content: false,
            subcard4Description: false,
        });
    };

    const handleheadingChange = (e) => {
        setSection3Text((prevState) => ({
            ...prevState,
            heading: e.target.value,
        }));
    };

    const handlecard1ContentChange = (e) => {
        setSection3Text((prevState) => ({
            ...prevState,
            card1Content: e.target.value,
        }));
    };

    const handlecard2ContentChange = (e) => {
        setSection3Text((prevState) => ({
            ...prevState,
            card2Content: e.target.value,
        }));
    };

    const handlecard3ContentChange = (e) => {
        setSection3Text((prevState) => ({
            ...prevState,
            card3Content: e.target.value,
        }));
    };

    const handlecard4ContentChange = (e) => {
        setSection3Text((prevState) => ({
            ...prevState,
            card4Content: e.target.value,
        }));
    };

    const handlePointsChange1 = (e, index) => {
        const { value } = e.target;
        setSection3Text((prevState) => {
            const updatedPoints = [...prevState.subcard1Description];
            updatedPoints[index] = value;
            return {
                ...prevState,
                subcard1Description: updatedPoints,
            };
        });
    };

    const handleDeleteSubDescription = (index) => {
        setSection3Text((prevState) => {
            const updatedDescriptions = [...prevState.subcard1Description];
            updatedDescriptions.splice(index, 1);
            return {
                ...prevState,
                subcard1Description: updatedDescriptions,
            };
        });
    };

    const handleAddSubDescription = () => {
        setSection3Text((prevState) => ({
          ...prevState,
          subcard1Description: [...prevState.subcard1Description, newPoint],
        }));
      };

    const handlePointsChange2 = (e, index) => {
        const { value } = e.target;
        setSection3Text((prevState) => {
            const updatedPoints = [...prevState.subcard2Description];
            updatedPoints[index] = value;
            return {
                ...prevState,
                subcard2Description: updatedPoints,
            };
        });
    };

    const handleDeleteSubDescription2 = (index) => {
        setSection3Text((prevState) => {
            const updatedDescriptions = [...prevState.subcard2Description];
            updatedDescriptions.splice(index, 1);
            return {
                ...prevState,
                subcard2Description: updatedDescriptions,
            };
        });
    };

    const handleAddSubDescription2 = () => {
        setSection3Text((prevState) => ({
          ...prevState,
          subcard2Description: [...prevState.subcard2Description, newPoint],
        }));
      };

    const handlePointsChange3 = (e, index) => {
        const { value } = e.target;
        setSection3Text((prevState) => {
            const updatedPoints = [...prevState.subcard3Description];
            updatedPoints[index] = value;
            return {
                ...prevState,
                subcard3Description: updatedPoints,
            };
        });
    };

    const handleDeleteSubDescription3 = (index) => {
        setSection3Text((prevState) => {
            const updatedDescriptions = [...prevState.subcard3Description];
            updatedDescriptions.splice(index, 1);
            return {
                ...prevState,
                subcard3Description: updatedDescriptions,
            };
        });
    };

    const handleAddSubDescription3 = () => {
        setSection3Text((prevState) => ({
          ...prevState,
          subcard3Description: [...prevState.subcard3Description, newPoint],
        }));
      };

    const handlePointsChange4 = (e, index) => {
        const { value } = e.target;
        setSection3Text((prevState) => {
            const updatedPoints = [...prevState.subcard4Description];
            updatedPoints[index] = value;
            return {
                ...prevState,
                subcard4Description: updatedPoints,
            };
        });
    };

    const handleDeleteSubDescription4 = (index) => {
        setSection3Text((prevState) => {
            const updatedDescriptions = [...prevState.subcard4Description];
            updatedDescriptions.splice(index, 1);
            return {
                ...prevState,
                subcard4Description: updatedDescriptions,
            };
        });
    };

    const handleAddSubDescription4 = () => {
        setSection3Text((prevState) => ({
          ...prevState,
          subcard4Description: [...prevState.subcard4Description, newPoint],
        }));
      };

    return (
        <section className='hopeSection2 pb-5'>
            <div className='container py-4'>
                {!editMode.heading ? (
                    <div className='d-flex justify-content-center align-items-center'>
                        <h1 className='fw-bolder mb-5' style={{ color: "#7C2C83" }}>{section3Text.heading}</h1>
                        <FaEdit
                            onClick={() => handleEditClick("heading")} className='mb-5 mx-2 text-secondary' />
                    </div>
                ) : (
                    <div className='d-flex'>
                        <input
                            type="text"
                            className="form-control mb-5"
                            value={section3Text.heading}
                            onChange={handleheadingChange}
                        />
                        <FaSave onClick={handleSave} className='mx-2 mt-2 text-primary' />
                        <FaTimes onClick={handleCancel} className='mt-2 text-danger' />
                    </div>
                )}
                <div className='row hopeCardRow pt-5'>
                    <div className='col-md-3 col-12 hopeImageCard1'>
                        <div className='card modulesCard p-3'>
                            <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'><span className='modulesHeading'>H</span>OPE</h1>
                            {!editMode.card1Content ? (
                                <div className='d-flex justify-content-center align-items-center'>
                                    <h4 className='text-center'>{section3Text.card1Content}</h4>
                                    <FaEdit size={25} className='text-secondary'
                                        onClick={() => handleEditClick("card1Content")} />
                                </div>
                            ) : (
                                <div className='d-flex'>
                                    <input
                                        type="text"
                                        className="form-control mb-5"
                                        value={section3Text.card1Content}
                                        onChange={handlecard1ContentChange}
                                    />
                                    <FaSave onClick={handleSave} className='mx-2 mt-2 text-primary' />
                                    <FaTimes onClick={handleCancel} className='mt-2 text-danger' />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-md-9 col-12'>
                        <div className='card modulesSubcard1 p-3'>
                            {!editMode.subcard1Description ? (
                                <>
                                    <ul style={{ listStyle: "none" }}>
                                        {section3Text.subcard1Description.map((description, index) => (
                                            <li key={index} className='mb-3'>
                                                <FaCheckSquare color="#F6C00B" className='mb-1' /> {description}
                                            </li>
                                        ))}
                                    </ul>
                                    <FaEdit
                                        onClick={() => handleEditClick("subcard1Description")}
                                        className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                    /></>
                            ) : (
                                <div>
                                    <ul className="mx-1" style={{ listStyle: "none", paddingLeft: "0px" }}>
                                        {section3Text.subcard1Description.map((item, index) => (
                                            <li key={index} className='mb-3 d-flex'>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={item}
                                                    onChange={(e) => handlePointsChange1(e, index)}
                                                />
                                                <IoIosCloseCircleOutline onClick={() => handleDeleteSubDescription(index)} className="ms-2 mt-2 sectionHome1Cancel" />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='mx-2'>
                                        <FaSave onClick={handleSave} className='text-primary' />
                                        <FaTimes onClick={handleCancel} className='mx-2 text-danger' />
                                        <FaPlus onClick={handleAddSubDescription} />
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='row hopeCardRow2 mt-5 pt-5'>
                    <div className='col-md-9 col-12 order-md-1 order-2'>
                        <div className='card modulesSubcard2 p-3'>
                            {!editMode.subcard2Description ? (
                                <>
                                    <ul style={{ listStyle: "none" }}>
                                        {section3Text.subcard2Description.map((description, index) => (
                                            <li key={index} className='mb-3'>
                                                <FaCheckSquare color="#F6C00B" className='mb-1' /> {description}
                                            </li>
                                        ))}
                                    </ul>
                                    <FaEdit
                                        onClick={() => handleEditClick("subcard2Description")}
                                        className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                    /></>
                            ) : (
                                <div>
                                    <ul className="mx-1" style={{ listStyle: "none", paddingLeft: "0px" }}>
                                        {section3Text.subcard2Description.map((item, index) => (
                                            <li key={index} className='mb-3 d-flex'>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={item}
                                                    onChange={(e) => handlePointsChange2(e, index)}
                                                />
                                                <IoIosCloseCircleOutline onClick={() => handleDeleteSubDescription2(index)} className="ms-2 mt-2 sectionHome1Cancel" />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='mx-2'>
                                        <FaSave onClick={handleSave} className='text-primary' />
                                        <FaTimes onClick={handleCancel} className='mx-2 text-danger' />
                                        <FaPlus onClick={handleAddSubDescription2} />
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-md-3 col-12 hopeImageCard2 order-md-2 order-1'>
                        <div className='card modulesCard p-3'>
                            <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'>H<span className='modulesHeading'>O</span>PE</h1>
                            {!editMode.card2Content ? (
                                <div className='d-flex justify-content-center align-items-center'>
                                    <h4 className='text-center'>{section3Text.card2Content}</h4>
                                    <FaEdit className='mb-2 mx-2 text-secondary'
                                        onClick={() => handleEditClick("card2Content")} />
                                </div>
                            ) : (
                                <div className='d-flex'>
                                    <input
                                        type="text"
                                        className="form-control mb-5"
                                        value={section3Text.card2Content}
                                        onChange={handlecard2ContentChange}
                                    />
                                    <FaSave onClick={handleSave} className='mx-2 mt-2 text-primary' />
                                    <FaTimes onClick={handleCancel} className='mt-2 text-danger' />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='row hopeCardRow pt-5' style={{ marginTop: "100px" }}>
                    <div className='col-md-3 col-12 hopeImageCard1'>
                        <div className='card modulesCard p-3'>
                            <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'>HO<span className='modulesHeading'>P</span>E</h1>
                            {!editMode.card3Content ? (
                                <div className='d-flex justify-content-center align-items-center'>
                                    <h4 className='text-center'>{section3Text.card3Content}</h4>
                                    <FaEdit size={25} className='text-secondary'
                                        onClick={() => handleEditClick("card3Content")} />
                                </div>
                            ) : (
                                <div className='d-flex'>
                                    <input
                                        type="text"
                                        className="form-control mb-5"
                                        value={section3Text.card3Content}
                                        onChange={handlecard3ContentChange}
                                    />
                                    <FaSave onClick={handleSave} className='mx-2 mt-2 text-primary' />
                                    <FaTimes onClick={handleCancel} className='mt-2 text-danger' />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-md-9 col-12'>
                        <div className='card modulesSubcard1 p-3'>
                            {!editMode.subcard3Description ? (
                                <>
                                    <ul style={{ listStyle: "none" }}>
                                        {section3Text.subcard3Description.map((description, index) => (
                                            <li key={index} className='mb-3'>
                                                <FaCheckSquare color="#F6C00B" className='mb-1' /> {description}
                                            </li>
                                        ))}
                                    </ul>
                                    <FaEdit
                                        onClick={() => handleEditClick("subcard3Description")}
                                        className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                    /></>
                            ) : (
                                <div>
                                    <ul className="mx-1" style={{ listStyle: "none", paddingLeft: "0px" }}>
                                        {section3Text.subcard3Description.map((item, index) => (
                                            <li key={index} className='mb-3 d-flex'>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={item}
                                                    onChange={(e) => handlePointsChange3(e, index)}
                                                />
                                                <IoIosCloseCircleOutline onClick={() => handleDeleteSubDescription3(index)} className="ms-2 mt-2 sectionHome1Cancel" />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='mx-2'>
                                        <FaSave onClick={handleSave} className='text-primary' />
                                        <FaTimes onClick={handleCancel} className='mx-2 text-danger' />
                                        <FaPlus onClick={handleAddSubDescription3} />
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='row hopeCardRow2 mt-5 pt-5'>
                    <div className='col-md-9 col-12 order-md-1 order-2'>
                        <div className='card modulesSubcard2 p-3'>
                            {!editMode.subcard4Description ? (
                                <>
                                    <ul style={{ listStyle: "none" }}>
                                        {section3Text.subcard4Description.map((description, index) => (
                                            <li key={index} className='mb-3'>
                                                <FaCheckSquare color="#F6C00B" className='mb-1' /> {description}
                                            </li>
                                        ))}
                                    </ul>
                                    <FaEdit
                                        onClick={() => handleEditClick("subcard4Description")}
                                        className="position-absolute top-0 end-0 mt-2 me-3 text-secondary"
                                    /></>
                            ) : (
                                <div>
                                    <ul className="mx-1" style={{ listStyle: "none", paddingLeft: "0px" }}>
                                        {section3Text.subcard4Description.map((item, index) => (
                                            <li key={index} className='mb-3 d-flex'>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={item}
                                                    onChange={(e) => handlePointsChange4(e, index)}
                                                />
                                                <IoIosCloseCircleOutline onClick={() => handleDeleteSubDescription4(index)} className="ms-2 mt-2 sectionHome1Cancel" />
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='mx-2'>
                                        <FaSave onClick={handleSave} className='text-primary' />
                                        <FaTimes onClick={handleCancel} className='mx-2 text-danger' />
                                        <FaPlus onClick={handleAddSubDescription4} />
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-md-3 col-12 hopeImageCard2 order-md-2 order-1'>
                        <div className='card modulesCard p-3'>
                            <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'>HOP<span className='modulesHeading'>E</span></h1>
                            {!editMode.card4Content ? (
                                <div className='d-flex justify-content-center align-items-center'>
                                    <h4 className='text-center'>{section3Text.card4Content}</h4>
                                    <FaEdit className='mb-2 text-secondary' style={{ marginLeft: "10px" }}
                                        onClick={() => handleEditClick("card4Content")} />
                                </div>
                            ) : (
                                <div className='d-flex'>
                                    <input
                                        type="text"
                                        className="form-control mb-5"
                                        value={section3Text.card4Content}
                                        onChange={handlecard4ContentChange}
                                    />
                                    <FaSave onClick={handleSave} className='mx-2 mt-2 text-primary' />
                                    <FaTimes onClick={handleCancel} className='mt-2 text-danger' />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HopeSection2;