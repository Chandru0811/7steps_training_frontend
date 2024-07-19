import React, { useState } from "react";
import goalImage from "../../../assets/Hope1.jpg";
import { FaEdit, FaSave, FaTimes, FaPlus, FaTrash } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function HopeSection1() {
  const [editMode, setEditMode] = useState({
    hopeImage: false,
    heading1: false,
    description1: false,
    heading2: false,
    description2: false,
    objectivesPoints: false,
    card1Heading: false,
    subcard1Description: false,
    subcard2Description: false,
    subcard3Description: false,
  });

  const [section1Text, setSection1Text] = useState({
    hopeImage: goalImage,
    heading1: "Goals",
    description1:
      "To develop the 21st Century Competencies that are essential for the child to develop to prepare them for the future.",
    heading2: "Objectives",
    description2:
      "To cover the 5 social emotional competencies necessary for children to develop healthy identities, recognize and manage emotion, develop a sense of responsibility, care and concern for others, relate to others and develop positive relationships, handle changes, make responsible decisions and act for the good of self, others and the society.",
    objectivesPoints: [
      "Self Awareness",
      "Self-Management",
      "Responsible Decision-Making",
      "Social Awareness",
      "Relationship Management",
    ],
  });

  const [section2Text, setSection2Text] = useState({
    card1Heading: "Programme Outcomes",
    subcard1Heading: "H",
    subcard1Description: [
      "Acquire lifelong skill that help youth navigate through life",
      "Be competent",
      "Install success habits",
    ],
    subcard2Heading: "O",
    subcard2Description: [
      "Create Empowering Belief",
      " Gain self-awareness through self love, self confidence and self esteem",
      " Develop positive and progressive self-identity and mindset",
    ],
    subcard3Heading: "P",
    subcard3Description: [
      "Discover your purpose through aligning your Vision, Mission and Values",
      "Discover your potential through your G.S.T-Gifts, Strengths and Talents",
      "Discover your passions and create your dream vision",
    ],
    subcard4Heading: "E",
    subcard4Description: [
      "Become confident leaders",
      "Become leaders with empathy",
      "Become agents of change in the world",
    ],
  });

  const [newImage, setNewImage] = useState(null);
  const [newPoint, setNewPoint] = useState("");
  const [showNewPointInput, setShowNewPointInput] = useState(true);

  const handleEditClick = (section) => {
    setEditMode((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setSection1Text((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handlePointsChange = (e, index) => {
    const { value } = e.target;
    setSection1Text((prevState) => {
      const updatedPoints = [...prevState.objectivesPoints];
      updatedPoints[index] = value;
      return {
        ...prevState,
        objectivesPoints: updatedPoints,
      };
    });
  };

  const handleAddPoint = () => {
    if (newPoint.trim() !== "") {
      setSection1Text((prevState) => ({
        ...prevState,
        objectivesPoints: [...prevState.objectivesPoints, newPoint],
      }));
      setNewPoint("");
      setShowNewPointInput(true);
    }
  };

  const handleDeletePoint = (index) => {
    setSection1Text((prevState) => {
      const updatedPoints = [...prevState.objectivesPoints];
      updatedPoints.splice(index, 1);
      return {
        ...prevState,
        objectivesPoints: updatedPoints,
      };
    });
  };

  const handleDeleteNewPointInput = () => {
    setNewPoint("");
    setShowNewPointInput(false);
  };

  const handleSave = () => {
    if (newImage) {
      setSection1Text((prevState) => ({
        ...prevState,
        hopeImage: URL.createObjectURL(newImage),
      }));
      setNewImage(null);
    }
    setEditMode({
      hopeImage: false,
      heading1: false,
      description1: false,
      heading2: false,
      description2: false,
      objectivesPoints: false,
      card1Heading: false,
      subcard1Description: false,
      subcard2Description: false,
      subcard3Description: false,
      subcard4Description: false,
    });
  };

  const handleCancel = () => {
    setNewImage(null);
    setEditMode({
      hopeImage: false,
      heading1: false,
      description1: false,
      heading2: false,
      description2: false,
      objectivesPoints: false,
      card1Heading: false,
      subcard1Description: false,
      subcard2Description: false,
      subcard3Description: false,
      subcard4Description: false,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0]);
    }
  };

  const handlecard1HeadingChange = (e) => {
    setSection2Text((prevState) => ({
      ...prevState,
      card1Heading: e.target.value,
    }));
  };

  const handleDeleteSubDescription = (index) => {
    setSection2Text((prevState) => {
      const updatedDescriptions = [...prevState.subcard1Description];
      updatedDescriptions.splice(index, 1);
      return {
        ...prevState,
        subcard1Description: updatedDescriptions,
      };
    });
  };

  const handleAddSubDescription = () => {
    if (newPoint.trim() !== "") {
      setSection2Text((prevState) => ({
        ...prevState,
        subcard1Description: [...prevState.subcard1Description, newPoint],
      }));
      setNewPoint("");
    }
  };

  const handleDeleteSubDescription2 = (index) => {
    setSection2Text((prevState) => {
      const updatedDescriptions = [...prevState.subcard2Description];
      updatedDescriptions.splice(index, 1);
      return {
        ...prevState,
        subcard2Description: updatedDescriptions,
      };
    });
  };

  const handleAddSubDescription2 = () => {
    if (newPoint.trim() !== "") {
      setSection2Text((prevState) => ({
        ...prevState,
        subcard2Description: [...prevState.subcard2Description, newPoint],
      }));
      setNewPoint("");
    }
  };

  const handleDeleteSubDescription3 = (index) => {
    setSection2Text((prevState) => {
      const updatedDescriptions = [...prevState.subcard3Description];
      updatedDescriptions.splice(index, 1);
      return {
        ...prevState,
        subcard3Description: updatedDescriptions,
      };
    });
  };

  const handleAddSubDescription3 = () => {
    if (newPoint.trim() !== "") {
      setSection2Text((prevState) => ({
        ...prevState,
        subcard3Description: [...prevState.subcard3Description, newPoint],
      }));
      setNewPoint("");
    }
  };

  const handleDeleteSubDescription4 = (index) => {
    setSection2Text((prevState) => {
      const updatedDescriptions = [...prevState.subcard4Description];
      updatedDescriptions.splice(index, 1);
      return {
        ...prevState,
        subcard4Description: updatedDescriptions,
      };
    });
  };

  const handleAddSubDescription4 = () => {
    if (newPoint.trim() !== "") {
      setSection2Text((prevState) => ({
        ...prevState,
        subcard4Description: [...prevState.subcard4Description, newPoint],
      }));
      setNewPoint("");
    }
  };

  return (
    <section className="hopeSection1 pt-5">
      <div className="container">
        {/* Section 1 */}
        <div className="row flex-1 justify-content-center align-items-center">
          <div className="col-lg-5 col-12 mb-3">
            {!editMode.hopeImage && (
              <div className="d-flex justify-content-end mx-4 mb-1">
                <FaEdit onClick={() => handleEditClick("hopeImage")} />
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
                <FaSave onClick={handleSave} />
                <FaTimes onClick={handleCancel} />
              </>
            ) : (
              <img
                src={section1Text.hopeImage}
                alt="Hope Image"
                className="hopeImage"
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </div>

          <div className="col-lg-7 col-12 mb-3">
            <div className="d-flex justify-content-end mx-4 mb-1">
              {!editMode.heading1 && (
                <FaEdit onClick={() => handleEditClick("heading1")} />
              )}
            </div>
            <div>
              {editMode.heading1 ? (
                <>
                  <input
                    type="text"
                    className="form-control"
                    value={section1Text.heading1}
                    onChange={(e) => handleInputChange(e, "heading1")}
                  />
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} />
                </>
              ) : (
                <h2 className="hopeHeading">{section1Text.heading1}</h2>
              )}
            </div>
            <div className="d-flex justify-content-end mx-4 mb-1">
              {!editMode.description1 && (
                <FaEdit onClick={() => handleEditClick("description1")} />
              )}
            </div>
            <div>
              {editMode.description1 ? (
                <>
                  <textarea
                    className="form-control"
                    value={section1Text.description1}
                    onChange={(e) => handleInputChange(e, "description1")}
                  />
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} />
                </>
              ) : (
                <p className="hopeDescription">{section1Text.description1}</p>
              )}
            </div>
          </div>
        </div>

        <div className="row flex-1 justify-content-center align-items-center">
          <div className="col-lg-5 col-12 mb-3">
            <div className="d-flex justify-content-end mx-4 mb-1">
              {!editMode.heading2 && (
                <FaEdit onClick={() => handleEditClick("heading2")} />
              )}
            </div>
            <div>
              {editMode.heading2 ? (
                <>
                  <input
                    type="text"
                    className="form-control"
                    value={section1Text.heading2}
                    onChange={(e) => handleInputChange(e, "heading2")}
                  />
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} />
                </>
              ) : (
                <h2 className="hopeHeading">{section1Text.heading2}</h2>
              )}
            </div>
          </div>

          <div className="col-lg-7 col-12 mb-3">
            <div className="d-flex justify-content-end mx-4 mb-1">
              {!editMode.description2 && (
                <FaEdit onClick={() => handleEditClick("description2")} />
              )}
            </div>
            <div>
              {editMode.description2 ? (
                <>
                  <textarea
                    className="form-control"
                    value={section1Text.description2}
                    onChange={(e) => handleInputChange(e, "description2")}
                  />
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} />
                </>
              ) : (
                <p className="hopeDescription">{section1Text.description2}</p>
              )}
            </div>
          </div>
        </div>

        {/* Objectives Points */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="hopeHeading">Objectives</h3>
          {!editMode.objectivesPoints && (
            <FaEdit onClick={() => handleEditClick("objectivesPoints")} />
          )}
        </div>
        <div className="row">
          {editMode.objectivesPoints ? (
            <>
              <ul>
                {section1Text.objectivesPoints.map((point, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      className="form-control"
                      value={point}
                      onChange={(e) => handlePointsChange(e, index)}
                    />
                    <FaTrash onClick={() => handleDeletePoint(index)} />
                  </li>
                ))}
                {showNewPointInput && (
                  <li>
                    <input
                      type="text"
                      className="form-control"
                      value={newPoint}
                      onChange={(e) => setNewPoint(e.target.value)}
                      placeholder="Add new point"
                    />
                    <FaPlus onClick={handleAddPoint} />
                    <FaTimes onClick={handleDeleteNewPointInput} />
                  </li>
                )}
              </ul>
              <FaSave onClick={handleSave} />
              <FaTimes onClick={handleCancel} />
            </>
          ) : (
            <ul>
              {section1Text.objectivesPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default HopeSection1;
