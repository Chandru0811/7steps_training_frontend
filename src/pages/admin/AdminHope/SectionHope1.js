import React, { useState } from 'react';
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
    subcard1Heading: false,
    subcard1Description: false,
    subcard2Heading: false,
    subcard2Description: false,
    subcard3Heading: false,
    subcard3Description: false,
  });

  const [section1Text, setSection1Text] = useState({
    hopeImage: goalImage,
    heading1: "Goals",
    description1: "To develop the 21st Century Competencies that are essential for the child to develop to prepare them for the future.",
    heading2: "Objectives",
    description2: "To cover the 5 social emotional competencies necessary for children to develop healthy identities, recognize and manage emotion, develop a sense of responsibility, care and concern for others, relate to others and develop positive relationships, handle changes, make responsible decisions and act for the good of self, others and the society.",
    objectivesPoints: [
      "Self Awareness",
      "Self-Management",
      "Responsible Decision-Making",
      "Social Awareness",
      "Relationship Management"
    ]
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
    ]
  });

  const [newImage, setNewImage] = useState(null);
  const [newPoint, setNewPoint] = useState('');

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
    if (newPoint.trim() !== '') {
      setSection1Text((prevState) => ({
        ...prevState,
        objectivesPoints: [...prevState.objectivesPoints, newPoint],
      }));
      setNewPoint('');
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
      subcard1Heading: false,
      subcard1Description: false,
      subcard2Heading: false,
      subcard2Description: false,
      subcard3Heading: false,
      subcard3Description: false,
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
      subcard1Heading: false,
      subcard1Description: false,
      subcard2Heading: false,
      subcard2Description: false,
      subcard3Heading: false,
      subcard3Description: false,
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

  const handlesubcard1HeadingChange = (e) => {
    setSection2Text((prevState) => ({
      ...prevState,
      subcard1Heading: e.target.value,
    }));
  };

  const handlesubcard2HeadingChange = (e) => {
    setSection2Text((prevState) => ({
      ...prevState,
      subcard2Heading: e.target.value,
    }));
  };

  const handlesubcard3HeadingChange = (e) => {
    setSection2Text((prevState) => ({
      ...prevState,
      subcard3Heading: e.target.value,
    }));
  };

  const handlesubcard4HeadingChange = (e) => {
    setSection2Text((prevState) => ({
      ...prevState,
      subcard4Heading: e.target.value,
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
    if (newPoint.trim() !== '') {
      setSection2Text((prevState) => ({
        ...prevState,
        subcard1Description: [...prevState.subcard1Description, newPoint],
      }));
      setNewPoint('');
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
    if (newPoint.trim() !== '') {
      setSection2Text((prevState) => ({
        ...prevState,
        subcard2Description: [...prevState.subcard2Description, newPoint],
      }));
      setNewPoint('');
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
    if (newPoint.trim() !== '') {
      setSection2Text((prevState) => ({
        ...prevState,
        subcard3Description: [...prevState.subcard3Description, newPoint],
      }));
      setNewPoint('');
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
    if (newPoint.trim() !== '') {
      setSection2Text((prevState) => ({
        ...prevState,
        subcard3Description: [...prevState.subcard4Description, newPoint],
      }));
      setNewPoint('');
    }
  };

  return (
    <section className='hopeSection1 pt-5'>
      <div className='container'>
        {/* Section 1 */}
        <div className='row flex-1 justify-content-center align-items-center'>
          <div className='col-lg-5 col-12 mb-3'>
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
                <FaTimes onClick={handleCancel} className='mx-2' />
              </>
            ) : (
              <img
                src={section1Text.hopeImage}
                alt="Goal"
                className="img-fluid goalImg"
              />
            )}
          </div>
          <div className='col-lg-7 col-12 '>
            <div className="d-flex align-items-center mb-3">
              {editMode.heading1 ? (
                <>
                  <input
                    type="text"
                    className="form-control me-2"
                    value={section1Text.heading1}
                    onChange={(e) => handleInputChange(e, 'heading1')}
                  />
                  <FaSave onClick={handleSave} className='' />
                  <FaTimes onClick={handleCancel} className='mx-2' />
                </>
              ) : (
                <>
                  <h5 className='fw-bold mb-0' style={{ color: "#7C2C83" }}>{section1Text.heading1}</h5>
                  <FaEdit className="ms-2" onClick={() => handleEditClick("heading1")} />
                </>
              )}
            </div>
            <div className="d-flex align-items-center mb-4">
              {editMode.description1 ? (
                <>
                  <textarea
                    className="form-control me-2"
                    value={section1Text.description1}
                    onChange={(e) => handleInputChange(e, 'description1')}
                  />
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} className='mx-2' />
                </>
              ) : (
                <>
                  <p className='mb-0'>{section1Text.description1}
                    <FaEdit className="ms-2" onClick={() => handleEditClick("description1")} />
                  </p>
                </>
              )}
            </div>
            <div className="d-flex align-items-center mb-3">
              {editMode.heading2 ? (
                <>
                  <input
                    type="text"
                    className="form-control me-2"
                    value={section1Text.heading2}
                    onChange={(e) => handleInputChange(e, 'heading2')}
                  />
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} className='mx-2' />
                </>
              ) : (
                <>
                  <h5 className='fw-bold mb-0' style={{ color: "#7C2C83" }}>{section1Text.heading2}</h5>
                  <FaEdit className="ms-2" onClick={() => handleEditClick("heading2")} />
                </>
              )}
            </div>
            <div className="d-flex align-items-center mb-4">
              {editMode.description2 ? (
                <>
                  <textarea
                    className="form-control me-2"
                    value={section1Text.description2}
                    onChange={(e) => handleInputChange(e, 'description2')}
                  />
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} className='mx-2' />
                </>
              ) : (
                <>
                  <p className='mb-0'>{section1Text.description2}<FaEdit className="ms-2" onClick={() => handleEditClick("description2")} /></p>
                </>
              )}
            </div>
            <div className="d-flex align-items-center mb-3">
              {editMode.objectivesPoints ? (
                <>
                  <ul style={{ listStyle: "none", padding: 0 }} className="me-2">
                    {section1Text.objectivesPoints.map((point, index) => (
                      <li key={index} className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          value={point}
                          onChange={(e) => handlePointsChange(e, index)}
                        />
                        <FaTrash onClick={() => handleDeletePoint(index)} className="ms-2" />
                      </li>
                    ))}
                    <li className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        value={newPoint}
                        onChange={(e) => setNewPoint(e.target.value)}
                        placeholder="Add new point"
                      />
                    </li>
                  </ul>
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} className='mx-2' />
                  <FaPlus onClick={handleAddPoint} />
                </>
              ) : (
                <>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {section1Text.objectivesPoints.map((point, index) => (
                      <li key={index} className="mb-2">{index + 1}. {point}</li>
                    ))}
                    {section1Text.objectivesPoints.length > 0 && (
                      <FaEdit className="ms-2" onClick={() => handleEditClick("objectivesPoints")} />
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className='row py-5'>
          {!editMode.card1Heading ? (
            <div className='d-flex justify-content-center align-items-center'>
              <h1 className='fw-bolder mb-5' style={{ color: "#7C2C83" }}>{section2Text.card1Heading}</h1>
              <FaEdit
                onClick={() => handleEditClick("card1Heading")} className='mb-5 mx-2' />
            </div>
          ) : (
            <div className='d-flex'>
              <input
                type="text"
                className="form-control mb-3"
                value={section2Text.card1Heading}
                onChange={handlecard1HeadingChange}
              />
              <FaSave onClick={handleSave} className='mx-2 mt-2' />
              <FaTimes onClick={handleCancel} className='mt-2' />
            </div>
          )}
          <div className='col-md-6 col-lg-6 col-xl-3 col-12 mb-3'>
            {!editMode.subcard1Heading ? (
              <div className='card programmeCard h-100'>
                <div className='programmeHeading'>{section2Text.subcard1Heading}</div>
                <div className='card-body'>
                  <ul style={{ listStyle: "none" }}>
                    {section2Text.subcard1Description.map((description, index) => (
                      <li key={index} className='mb-3'>
                        <IoSend color="#7C2C83" /> {description}
                      </li>
                    ))}
                  </ul>
                  <FaEdit
                    onClick={() => handleEditClick("subcard1Heading")}
                    className="position-absolute top-0 end-0 mt-3 me-3"
                  />
                </div>
              </div>
            ) : (
              <div className='card programmeCard h-100 p-3'>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={section2Text.subcard1Heading}
                  onChange={handlesubcard1HeadingChange}
                />
                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                  {section2Text.subcard1Description.map((item, index) => (
                    <li key={index} className='mb-3 d-flex'>
                      <input
                        type="text"
                        className="form-control"
                        value={item}
                        onChange={(e) => handleInputChange(e, `subcard1Description[${index}]`)}
                      />
                      <FaTrash onClick={() => handleDeleteSubDescription(index)} className="ms-2 mt-2" />
                    </li>
                  ))}
                  <li>
                    <input
                      type="text"
                      className="form-control"
                      value={newPoint}
                      onChange={(e) => setNewPoint(e.target.value)}
                      placeholder="Add new outcome"
                    />
                  </li>
                </ul>
                <span>
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} className='mx-2' />
                  <FaPlus onClick={handleAddSubDescription} />
                </span>
              </div>
            )}
          </div>
          <div className='col-md-6 col-lg-6 col-xl-3 col-12 mb-3'>
            {!editMode.subcard2Heading ? (
              <div className='card programmeCard h-100'>
                <div className='programmeHeading'>{section2Text.subcard2Heading}</div>
                <div className='card-body'>
                  <ul style={{ listStyle: "none" }}>
                    {section2Text.subcard2Description.map((description, index) => (
                      <li key={index} className='mb-3'>
                        <IoSend color="#7C2C83" /> {description}
                      </li>
                    ))}
                  </ul>
                  <FaEdit
                    onClick={() => handleEditClick("subcard2Heading")}
                    className="position-absolute top-0 end-0 mt-3 me-3"
                  />
                </div>
              </div>
            ) : (
              <div className='card programmeCard h-100 p-3'>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={section2Text.subcard2Heading}
                  onChange={handlesubcard2HeadingChange}
                />
                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                  {section2Text.subcard2Description.map((item, index) => (
                    <li key={index} className='mb-3 d-flex'>
                      <input
                        type="text"
                        className="form-control"
                        value={item}
                        onChange={(e) => handleInputChange(e, `subcard2Description[${index}]`)}
                      />
                      <FaTrash onClick={() => handleDeleteSubDescription2(index)} className="ms-2 mt-2" />
                    </li>
                  ))}
                  <li>
                    <input
                      type="text"
                      className="form-control"
                      value={newPoint}
                      onChange={(e) => setNewPoint(e.target.value)}
                      placeholder="Add new outcome"
                    />
                  </li>
                </ul>
                <span>
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} className='mx-2' />
                  <FaPlus onClick={handleAddSubDescription2} />
                </span>
              </div>
            )}
          </div>
          <div className='col-md-6 col-lg-6 col-xl-3 col-12 mb-3'>
            {!editMode.subcard3Heading ? (
              <div className='card programmeCard h-100'>
                <div className='programmeHeading'>{section2Text.subcard3Heading}</div>
                <div className='card-body'>
                  <ul style={{ listStyle: "none" }}>
                    {section2Text.subcard3Description.map((description, index) => (
                      <li key={index} className='mb-3'>
                        <IoSend color="#7C2C83" /> {description}
                      </li>
                    ))}
                  </ul>
                  <FaEdit
                    onClick={() => handleEditClick("subcard3Heading")}
                    className="position-absolute top-0 end-0 mt-3 me-3"
                  />
                </div>
              </div>
            ) : (
              <div className='card programmeCard h-100 p-3'>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={section2Text.subcard3Heading}
                  onChange={handlesubcard3HeadingChange}
                />
                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                  {section2Text.subcard3Description.map((item, index) => (
                    <li key={index} className='mb-3 d-flex'>
                      <input
                        type="text"
                        className="form-control"
                        value={item}
                        onChange={(e) => handleInputChange(e, `subcard3Description[${index}]`)}
                      />
                      <FaTrash onClick={() => handleDeleteSubDescription3(index)} className="ms-2 mt-2" />
                    </li>
                  ))}
                  <li>
                    <input
                      type="text"
                      className="form-control"
                      value={newPoint}
                      onChange={(e) => setNewPoint(e.target.value)}
                      placeholder="Add new outcome"
                    />
                  </li>
                </ul>
                <span>
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} className='mx-2' />
                  <FaPlus onClick={handleAddSubDescription3} />
                </span>
              </div>
            )}
          </div>
          <div className='col-md-6 col-lg-6 col-xl-3 col-12 mb-3'>
            {!editMode.subcard4Heading ? (
              <div className='card programmeCard h-100'>
                <div className='programmeHeading'>{section2Text.subcard4Heading}</div>
                <div className='card-body'>
                  <ul style={{ listStyle: "none" }}>
                    {section2Text.subcard4Description.map((description, index) => (
                      <li key={index} className='mb-3'>
                        <IoSend color="#7C2C83" /> {description}
                      </li>
                    ))}
                  </ul>
                  <FaEdit
                    onClick={() => handleEditClick("subcard4Heading")}
                    className="position-absolute top-0 end-0 mt-3 me-3"
                  />
                </div>
              </div>
            ) : (
              <div className='card programmeCard h-100 p-3'>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={section2Text.subcard4Heading}
                  onChange={handlesubcard4HeadingChange}
                />
                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                  {section2Text.subcard4Description.map((item, index) => (
                    <li key={index} className='mb-3 d-flex'>
                      <input
                        type="text"
                        className="form-control"
                        value={item}
                        onChange={(e) => handleInputChange(e, `subcard4Description[${index}]`)}
                      />
                      <FaTrash onClick={() => handleDeleteSubDescription4(index)} className="ms-2 mt-2" />
                    </li>
                  ))}
                  <li>
                    <input
                      type="text"
                      className="form-control"
                      value={newPoint}
                      onChange={(e) => setNewPoint(e.target.value)}
                      placeholder="Add new outcome"
                    />
                  </li>
                </ul>
                <span>
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} className='mx-2' />
                  <FaPlus onClick={handleAddSubDescription4} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HopeSection1;