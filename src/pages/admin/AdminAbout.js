import React, { useState } from "react";
import vision from "../../assets/VISION.png";
import mission from "../../assets/MISSION.png";
import coreValue from "../../assets/CORE VALUES.png";
import objective from "../../assets/OBJECTIVES.png";
import person_1 from "../../assets/AGORA SINGAPORE.png";
import person_2 from "../../assets/MILLIONAIRE SPEAKERS CLUB (MSN).png";
import person_3 from "../../assets/VISAKHA ORATORS JUNIOR (VIZAG).png";
import person_4 from "../../assets/EDUFAM INTERNATIONAL PL.png";
import person_5 from "../../assets/ELEFPI LEARNSCAPE.png";
import { ImCheckmark } from "react-icons/im";
import { FaEdit, FaSave, FaTimes, FaPlus, FaTrash } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import defaultBgImage from "../../assets/About_hero_image.png";

function AdminAbout() {
  const [show, setShow] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [newPoint, setNewPoint] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (section) => {
    setCurrentSection(section);
    setShow(true);
  };

  const handleAddPoint = () => {
    if (newPoint.trim() !== "") {
      setCardSection1((prevState) => ({
        ...prevState,
        cardParagraph: [...prevState.cardParagraph, newPoint],
      }));
      setNewPoint("");
    }
  };

  const handleDeletePoint = (index) => {
    setCardSection1((prevState) => {
      const updatedPoints = [...prevState.cardParagraph];
      updatedPoints.splice(index, 1);
      return {
        ...prevState,
        cardParagraph: updatedPoints,
      };
    });
  };

  const handlePointsChange = (e, index) => {
    const { value } = e.target;
    setCardSection1((prevState) => {
      const updatedPoints = [...prevState.cardParagraph];
      updatedPoints[index] = value;
      return {
        ...prevState,
        cardParagraph: updatedPoints,
      };
    });
  };

  const handleAddPoint2 = () => {
    if (newPoint.trim() !== "") {
      setCardSection2((prevState) => ({
        ...prevState,
        cardParagraph: [...prevState.cardParagraph, newPoint],
      }));
      setNewPoint("");
    }
  };

  const handleDeletePoint2 = (index) => {
    setCardSection2((prevState) => {
      const updatedPoints = [...prevState.cardParagraph];
      updatedPoints.splice(index, 1);
      return {
        ...prevState,
        cardParagraph: updatedPoints,
      };
    });
  };

  const handlePointsChange2 = (e, index) => {
    const { value } = e.target;
    setCardSection2((prevState) => {
      const updatedPoints = [...prevState.cardParagraph];
      updatedPoints[index] = value;
      return {
        ...prevState,
        cardParagraph: updatedPoints,
      };
    });
  };

  const handleAddPoint3 = () => {
    if (newPoint.trim() !== "") {
      setCardSection3((prevState) => ({
        ...prevState,
        cardParagraph: [...prevState.cardParagraph, newPoint],
      }));
      setNewPoint("");
    }
  };

  const handleDeletePoint3 = (index) => {
    setCardSection3((prevState) => {
      const updatedPoints = [...prevState.cardParagraph];
      updatedPoints.splice(index, 1);
      return {
        ...prevState,
        cardParagraph: updatedPoints,
      };
    });
  };

  const handlePointsChange3 = (e, index) => {
    const { value } = e.target;
    setCardSection3((prevState) => {
      const updatedPoints = [...prevState.cardParagraph];
      updatedPoints[index] = value;
      return {
        ...prevState,
        cardParagraph: updatedPoints,
      };
    });
  };

  const handleAddPoint4 = () => {
    if (newPoint.trim() !== "") {
      setCardSection4((prevState) => ({
        ...prevState,
        cardParagraph: [...prevState.cardParagraph, newPoint],
      }));
      setNewPoint("");
    }
  };

  const handleDeletePoint4 = (index) => {
    setCardSection4((prevState) => {
      const updatedPoints = [...prevState.cardParagraph];
      updatedPoints.splice(index, 1);
      return {
        ...prevState,
        cardParagraph: updatedPoints,
      };
    });
  };

  const handlePointsChange4 = (e, index) => {
    const { value } = e.target;
    setCardSection4((prevState) => {
      const updatedPoints = [...prevState.cardParagraph];
      updatedPoints[index] = value;
      return {
        ...prevState,
        cardParagraph: updatedPoints,
      };
    });
  };

  const [editMode, setEditMode] = useState({
    heroSection: false,
    heroImage: false,
    heroHeader: false,
    heroDescription: false,
    heroFounder: false,
    whatWeDo: false,
    whatWeDoHeading: false,
    whatWeDoDescription: false,
    cardSection1: false,
    cardSection1Image: false,
    cardSection1Heading: false,
    cardSection1Paragraph: false,
    cardSection2: false,
    cardSection3: false,
    cardSection4: false,
    ourPartner: false,
    ourPartnerHeader: false,
    ourPartnerParagraph: false,
    ourPartnerPersonImg1: false,
    ourPartnerPersonName1: false,
    ourPartnerPersonImg2: false,
    ourPartnerPersonName2: false,
    ourPartnerPersonImg3: false,
    ourPartnerPersonName3: false,
    ourPartnerPersonImg4: false,
    ourPartnerPersonName4: false,
    ourPartnerPersonImg5: false,
    ourPartnerPersonName5: false,
  });

  const [heroText, setHeroText] = useState({
    bgImage: defaultBgImage,
    header: "7STEPS LIFE TRANSFORMATION PTE LTD",
    description:
      "A LIFE COACHING COMPANY THAT ASPIRES TO CHANGE LIVES THROUGH MINDSET AWAKENING AND REPROGRAMMING.",
    founded: "FOUNDED BY 13 NOV 2020 / UEN 202036839N",
  });

  const [whatWeDoText, setWhatWeDoText] = useState({
    heading: "What We Do",
    paragraph1:
      "Often times as humans, we encounter challenges and life traumas and become stuck at our own limitations due to these experiences and thus we cannot move forward. Be it in business, career, relationships, health or finances.",
    // paragraph3: "At 7Steps we provide the Intervention that they need to unblock these obstacles so as to enable them to BREAK-FREE AND BREAKTHROUGH TO A LIMITLESS LIFE",
  });

  const [cardSection1, setCardSection1] = useState({
    cardImage: vision,
    cardHeading: "VISION",
    cardParagraph: [
      "An empowered world is built by individuals realizing their full potential and taking proactive control of their lives, fostering collective societal flourishing.",
    ],
  });

  const [cardSection2, setCardSection2] = useState({
    cardImage: mission,
    cardHeading: "MISSION",
    cardParagraph: [
      "To support every individual, child or adult, irregardless of background, culture or limitations, in his or her endeavour to better themselves and the world through the 3 E’s - Education, Entrepreneurship and Empowerment.",
    ],
  });

  const [cardSection3, setCardSection3] = useState({
    cardImage: coreValue,
    cardHeading: "CORE VALUES",
    cardParagraph: [
      "R – Raise Ourself",
      "S – Serve Many",
      "I – Inspire Others",
      "E – Empower All",
    ],
  });

  const [cardSection4, setCardSection4] = useState({
    cardImage: objective,
    cardHeading: "OBJECTIVES",
    cardParagraph: [
      "To provide a safe and supportive environment to nurture, grow and learn.",
    ],
  });

  const [ourPartner, setOurPartner] = useState({
    partnerImg1: person_1,
    partnerName1: "AGORA SINGAPORE",
    partnerImg2: person_2,
    partnerName2: "MILLIONAIRE SPEAKERS CLUB (MSN)",
    partnerImg3: person_3,
    partnerName3: "VISAKHA ORATORS JUNIOR (VIZAG)",
    partnerImg4: person_4,
    partnerName4: "EDUFAM INTERNATIONAL P/L",
    partnerImg5: person_5,
    partnerName5: "ELEFPI LEARNSCAPE",
    ourHeading: "OUR PARTNER",
    ourParagraph:
      "Essential allies who share our vision and commitment, working collaboratively to drive meaningful change and achieve shared goals.",
  });

  const handleEditClick = (section) => {
    setEditMode((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleChange = (e, setText, key) => {
    if (key === "bgImage") {
      setText((prevState) => ({
        ...prevState,
        [key]: URL.createObjectURL(e.target.files[0]),
      }));
    } else if (key === "cardImage" || key === "bgImage") {
      setText((prevState) => ({
        ...prevState,
        [key]: URL.createObjectURL(e.target.files[0]),
      }));
    } else if (key === "cardList") {
      const newList = [...cardSection3.cardList];
      newList[e.target.dataset.index] = e.target.value;
      setText((prevState) => ({ ...prevState, cardList: newList }));
    } else if (key.startsWith("partnerImg")) {
      setText((prevState) => ({
        ...prevState,
        [key]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setText((prevState) => ({ ...prevState, [key]: e.target.value }));
    }
  };

  const handleSave = () => {
    console.log("Hero Section:", heroText);
    console.log("Card Section 1:", cardSection1);
    console.log("Card Section 2:", cardSection2);
    console.log("Card Section 3:", cardSection3);
    console.log("Card Section 4:", cardSection4);
    console.log("Our Partners:", ourPartner);

    setEditMode({
      heroSection: false,
      heroImage: false,
      heroHeader: false,
      heroDescription: false,
      heroFounder: false,
      whatWeDo: false,
      whatWeDoHeading: false,
      whatWeDoDescription: false,
      cardSection1: false,
      cardSection1Image: false,
      cardSection1Heading: false,
      cardSection1Paragraph: false,
      cardSection2: false,
      cardSection3: false,
      cardSection4: false,
      ourPartner: false,
      ourPartnerHeader: false,
      ourPartnerParagraph: false,
      ourPartnerPersonImg1: false,
      ourPartnerPersonName1: false,
      ourPartnerPersonImg2: false,
      ourPartnerPersonName2: false,
      ourPartnerPersonImg3: false,
      ourPartnerPersonName3: false,
      ourPartnerPersonImg4: false,
      ourPartnerPersonName4: false,
      ourPartnerPersonImg5: false,
      ourPartnerPersonName5: false,
    });
    setShow(false);
  };

  const handleCancel = () => {
    setEditMode({
      heroSection: false,
      heroImage: false,
      heroHeader: false,
      heroDescription: false,
      heroFounder: false,
      whatWeDo: false,
      whatWeDoHeading: false,
      whatWeDoDescription: false,
      cardSection1: false,
      cardSection1Image: false,
      cardSection1Heading: false,
      cardSection1Paragraph: false,
      cardSection2: false,
      cardSection3: false,
      cardSection4: false,
      ourPartner: false,
      ourPartnerHeader: false,
      ourPartnerParagraph: false,
      ourPartnerPersonImg1: false,
      ourPartnerPersonName1: false,
      ourPartnerPersonImg2: false,
      ourPartnerPersonName2: false,
      ourPartnerPersonImg3: false,
      ourPartnerPersonName3: false,
      ourPartnerPersonImg4: false,
      ourPartnerPersonName4: false,
      ourPartnerPersonImg5: false,
      ourPartnerPersonName5: false,
    });
    setShow(false);
  };

  return (
    <section>
      <div className="container-fluid py-4">
        {/* Hero Section */}
        <section>
          <div>
            <FaEdit
              onClick={() => handleEditClick("heroImage")}
              className="ms-3"
            />

            {!editMode.heroSection && (
              <div className="row mb-5">
                <div
                  className="about-container edit-container"
                  style={{
                    backgroundImage: `url(${
                      heroText.bgImage || defaultBgImage
                    })`,
                    width: "100%",
                    height: "auto",
                    maxHeight: "120vh",
                    opacity: "0.3",
                  }}
                >
                  {editMode.heroImage && (
                    <>
                      <input
                        type="file"
                        className="form-control mt-4"
                        accept="image/*"
                        onChange={(e) =>
                          handleChange(e, setHeroText, "bgImage")
                        }
                      />
                      <FaSave onClick={handleSave} />
                      <FaTimes onClick={handleCancel} />
                    </>
                  )}

                  {editMode.heroHeader ? (
                    <>
                      <input
                        type="text"
                        className="form-control mt-5"
                        value={heroText.header}
                        onChange={(e) => handleChange(e, setHeroText, "header")}
                      />
                      <FaSave onClick={handleSave} />
                      <FaTimes onClick={handleCancel} />
                    </>
                  ) : (
                    <h1
                    // style={{
                    //   width: "100%",
                    //   fontSize: "clamp(18px, 4vw, 48px)",
                    //   textAlign: "center",
                    //   background: "transparent",
                    //   border: "none",
                    //   fontWeight: "bolder",
                    //   minHeight: "50%",
                    // }}
                    >
                      {heroText.header}
                      <FaEdit
                        onClick={() => handleEditClick("heroHeader")}
                        className="ms-3"
                      />
                    </h1>
                  )}
                  {editMode.heroDescription ? (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        value={heroText.description}
                        onChange={(e) =>
                          handleChange(e, setHeroText, "description")
                        }
                      />
                      <FaSave onClick={handleSave} />
                      <FaTimes onClick={handleCancel} />
                    </>
                  ) : (
                    <p>
                      {heroText.description}
                      <FaEdit
                        onClick={() => handleEditClick("heroDescription")}
                        className="ms-3"
                      />
                    </p>
                  )}
                  {editMode.heroFounder ? (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        value={heroText.founded}
                        onChange={(e) =>
                          handleChange(e, setHeroText, "founded")
                        }
                      />
                      <FaSave onClick={handleSave} />
                      <FaTimes onClick={handleCancel} />
                    </>
                  ) : (
                    <p>
                      {heroText.founded}
                      <FaEdit
                        onClick={() => handleEditClick("heroFounder")}
                        className="ms-3"
                      />
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
        {/* What we do */}
        <section>
          <div className="edit-container">
            {editMode.whatWeDoHeading ? (
              <>
                <input
                  type="text"
                  className="form-control"
                  value={whatWeDoText.heading}
                  onChange={(e) => handleChange(e, setWhatWeDoText, "heading")}
                />
                <FaSave onClick={handleSave} />
                <FaTimes onClick={handleCancel} />
              </>
            ) : (
              <h2
                className="text-center"
                style={{ textDecoration: "underline" }}
              >
                {whatWeDoText.heading}
                <FaEdit
                  onClick={() => handleEditClick("whatWeDoHeading")}
                  className="ms-3"
                />
              </h2>
            )}
            {editMode.whatWeDoDescription ? (
              <>
                <textarea
                  className="form-control"
                  value={whatWeDoText.paragraph1}
                  onChange={(e) =>
                    handleChange(e, setWhatWeDoText, "paragraph1")
                  }
                />
                <FaSave onClick={handleSave} />
                <FaTimes onClick={handleCancel} />
              </>
            ) : (
              <p className="text-center">
                {whatWeDoText.paragraph1}
                <FaEdit
                  onClick={() => handleEditClick("whatWeDoDescription")}
                  className="ms-3"
                />
              </p>
            )}
          </div>
        </section>
        {/* Card Section */}
        <section>
          <div className="container mb-5">
            <div className="row d-flex justify-content-between ">
              {/* Card Section */}
              <>
                <div className="col-md-6 col-12 mb-2">
                  <FaEdit
                    onClick={() => handleShow("cardSection1")}
                    className="mb-4"
                  />
                  <div className="card about-card h-100">
                    <div className="card-heading text-center">
                      <h4 className="head-color pt-3">
                        <img
                          src={cardSection1.cardImage}
                          alt="vision"
                          className="image-fluid iconImage m-2"
                        />
                        {cardSection1.cardHeading}
                      </h4>
                    </div>
                    <div className="card-body">
                      <ul style={{ listStyle: "none" }}>
                        {cardSection1.cardParagraph.map((paragraph, index) => (
                          <li key={index}>
                            <ImCheckmark style={{ color: "#7c2c83" }} />{" "}
                            {paragraph}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-2">
                  <FaEdit
                    onClick={() => handleShow("cardSection2")}
                    className="mb-4"
                  />
                  <div className="card about-card h-100">
                    <div className="card-heading text-center">
                      <h4 className="head-color pt-3">
                        <img
                          src={cardSection2.cardImage}
                          alt="vision"
                          className="image-fluid iconImage m-2"
                        />
                        {cardSection2.cardHeading}
                      </h4>
                    </div>
                    <div className="card-body">
                      <ul style={{ listStyle: "none" }}>
                        {Array.isArray(cardSection2.cardParagraph) &&
                          cardSection2.cardParagraph.map((paragraph, index) => (
                            <li key={index}>
                              <ImCheckmark style={{ color: "#7c2c83" }} />{" "}
                              {paragraph}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-2 pt-5">
                  <FaEdit
                    onClick={() => handleShow("cardSection3")}
                    className="mb-4"
                  />
                  <div className="card about-card h-100">
                    <div className="card-heading text-center">
                      <h4 className="head-color pt-3">
                        <img
                          src={cardSection3.cardImage}
                          alt="vision"
                          className="image-fluid iconImage m-2"
                        />
                        {cardSection3.cardHeading}
                      </h4>
                    </div>
                    <div className="card-body">
                      <ul style={{ listStyle: "none" }}>
                        {Array.isArray(cardSection3.cardParagraph) &&
                          cardSection3.cardParagraph.map((paragraph, index) => (
                            <li key={index}>
                              <ImCheckmark style={{ color: "#7c2c83" }} />{" "}
                              {paragraph}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-2 pt-5">
                  <FaEdit
                    onClick={() => handleShow("cardSection4")}
                    className="mb-4"
                  />
                  <div className="card about-card h-100">
                    <div className="card-heading text-center">
                      <h4 className="head-color pt-3">
                        <img
                          src={cardSection4.cardImage}
                          alt="vision"
                          className="image-fluid iconImage m-2"
                        />
                        {cardSection4.cardHeading}
                      </h4>
                    </div>
                    <div className="card-body">
                      <ul style={{ listStyle: "none" }}>
                        {Array.isArray(cardSection4.cardParagraph) &&
                          cardSection4.cardParagraph.map((paragraph, index) => (
                            <li key={index}>
                              <ImCheckmark style={{ color: "#7c2c83" }} />{" "}
                              {paragraph}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Section</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {currentSection === "cardSection1" && (
                      <>
                        <input
                          type="file"
                          className="form-control mb-3"
                          accept="image/*"
                          onChange={(e) =>
                            handleChange(e, setCardSection1, "cardImage")
                          }
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          value={cardSection1.cardHeading}
                          onChange={(e) =>
                            handleChange(e, setCardSection1, "cardHeading")
                          }
                        />
                        <ul
                          style={{ listStyle: "none", padding: 0 }}
                          className="me-2"
                        >
                          {cardSection1.cardParagraph.map(
                            (paragraph, index) => (
                              <li key={index} className="mb-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={paragraph}
                                  onChange={(e) => handlePointsChange(e, index)}
                                />
                                <FaTrash
                                  onClick={() => handleDeletePoint(index)}
                                  className="ms-2"
                                />
                              </li>
                            )
                          )}
                          <li className="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              value={newPoint}
                              onChange={(e) => setNewPoint(e.target.value)}
                            />
                          </li>
                        </ul>
                        <FaSave onClick={handleSave} />
                        <FaTimes onClick={handleCancel} className="mx-2" />
                        <FaPlus onClick={handleAddPoint} />
                      </>
                    )}
                    {currentSection === "cardSection2" && (
                      <>
                        <input
                          type="file"
                          className="form-control mb-3"
                          accept="image/*"
                          onChange={(e) =>
                            handleChange(e, setCardSection2, "cardImage")
                          }
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          value={cardSection2.cardHeading}
                          onChange={(e) =>
                            handleChange(e, setCardSection2, "cardHeading")
                          }
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          value={cardSection2.cardParagraph.join(", ")}
                          onChange={(e) =>
                            handleChange(e, setCardSection2, "cardParagraph")
                          }
                        />
                        <ul
                          style={{ listStyle: "none", padding: 0 }}
                          className="me-2"
                        >
                          {cardSection2.cardParagraph.map(
                            (paragraph, index) => (
                              <li key={index} className="mb-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={paragraph}
                                  onChange={(e) =>
                                    handlePointsChange2(e, index)
                                  }
                                />
                                <FaTrash
                                  onClick={() => handleDeletePoint2(index)}
                                  className="ms-2"
                                />
                              </li>
                            )
                          )}
                          <li className="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              value={newPoint}
                              onChange={(e) => setNewPoint(e.target.value)}
                            />
                          </li>
                        </ul>
                        <FaSave onClick={handleSave} />
                        <FaTimes onClick={handleCancel} className="mx-2" />
                        <FaPlus onClick={handleAddPoint2} />
                      </>
                    )}
                    {currentSection === "cardSection3" && (
                      <>
                        <input
                          type="file"
                          className="form-control mb-3"
                          accept="image/*"
                          onChange={(e) =>
                            handleChange(e, setCardSection3, "cardImage")
                          }
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          value={setCardSection3.cardHeading}
                          onChange={(e) =>
                            handleChange(e, setCardSection3, "cardHeading")
                          }
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          value={cardSection3.cardParagraph.join(", ")}
                          onChange={(e) =>
                            handleChange(e, setCardSection3, "cardParagraph")
                          }
                        />
                        <ul
                          style={{ listStyle: "none", padding: 0 }}
                          className="me-2"
                        >
                          {cardSection3.cardParagraph.map(
                            (paragraph, index) => (
                              <li key={index} className="mb-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={paragraph}
                                  onChange={(e) =>
                                    handlePointsChange3(e, index)
                                  }
                                />
                                <FaTrash
                                  onClick={() => handleDeletePoint3(index)}
                                  className="ms-2"
                                />
                              </li>
                            )
                          )}
                          <li className="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              value={newPoint}
                              onChange={(e) => setNewPoint(e.target.value)}
                            />
                          </li>
                        </ul>
                        <FaSave onClick={handleSave} />
                        <FaTimes onClick={handleCancel} className="mx-2" />
                        <FaPlus onClick={handleAddPoint3} />
                      </>
                    )}
                    {currentSection === "cardSection4" && (
                      <>
                        <input
                          type="file"
                          className="form-control mb-3"
                          accept="image/*"
                          onChange={(e) =>
                            handleChange(e, setCardSection4, "cardImage")
                          }
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          value={setCardSection4.cardHeading}
                          onChange={(e) =>
                            handleChange(e, setCardSection4, "cardHeading")
                          }
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          value={cardSection4.cardParagraph.join(", ")}
                          onChange={(e) =>
                            handleChange(e, setCardSection4, "cardParagraph")
                          }
                        />
                        <ul
                          style={{ listStyle: "none", padding: 0 }}
                          className="me-2"
                        >
                          {cardSection4.cardParagraph.map(
                            (paragraph, index) => (
                              <li key={index} className="mb-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={paragraph}
                                  onChange={(e) =>
                                    handlePointsChange4(e, index)
                                  }
                                />
                                <FaTrash
                                  onClick={() => handleDeletePoint4(index)}
                                  className="ms-2"
                                />
                              </li>
                            )
                          )}
                          <li className="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              value={newPoint}
                              onChange={(e) => setNewPoint(e.target.value)}
                            />
                          </li>
                        </ul>
                        <FaSave onClick={handleSave} />
                        <FaTimes onClick={handleCancel} className="mx-2" />
                        <FaPlus onClick={handleAddPoint4} />
                      </>
                    )}
                  </Modal.Body>
                  <Modal.Footer></Modal.Footer>
                </Modal>
              </>
            </div>
          </div>
        </section>
        {/* Our Partner */}
        <section>
          <div className="container mt-5 mb-5">
            <>
              {editMode.ourPartnerHeader ? (
                <>
                  <input
                    type="text"
                    className="form-control"
                    value={ourPartner.ourHeading}
                    onChange={(e) =>
                      handleChange(e, setOurPartner, "ourHeading")
                    }
                  />
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} />
                </>
              ) : (
                <h2
                  className="text-center pt-5"
                  style={{ textDecoration: "underline" }}
                >
                  {ourPartner.ourHeading}
                  <FaEdit
                    onClick={() => handleEditClick("ourPartnerHeader")}
                    className="ms-3"
                  />
                </h2>
              )}
              {editMode.ourPartnerParagraph ? (
                <>
                  <textarea
                    type="text"
                    className="form-control"
                    value={ourPartner.ourParagraph}
                    onChange={(e) =>
                      handleChange(e, setOurPartner, "ourParagraph")
                    }
                  />
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} />
                </>
              ) : (
                <p className="text-center">
                  {ourPartner.ourParagraph}
                  <FaEdit
                    onClick={() => handleEditClick("ourPartnerParagraph")}
                  />
                </p>
              )}
            </>
            {!editMode.ourPartner && (
              <div>
                <div className="row">
                  <div className="container d-flex flex-wrap justify-content-between">
                    <div className="col-6 col-md-2">
                      <FaEdit
                        onClick={() => handleEditClick("ourPartnerPersonImg1")}
                      />
                      {editMode.ourPartnerPersonImg1 ? (
                        <>
                          <input
                            type="file"
                            className="form-control"
                            onChange={(e) =>
                              handleChange(e, setOurPartner, "partnerImg1")
                            }
                          />
                          <FaSave onClick={handleSave} />
                          <FaTimes onClick={handleCancel} />
                        </>
                      ) : (
                        <div className="ourPartner">
                          <img
                            src={ourPartner.partnerImg1}
                            className="img-fluid partnet-img"
                            alt="our Partner"
                          />
                        </div>
                      )}
                      {editMode.ourPartnerPersonName1 ? (
                        <>
                          <input
                            type="text"
                            className="form-control"
                            value={ourPartner.partnerName1}
                            onChange={(e) =>
                              handleChange(e, setOurPartner, "partnerName1")
                            }
                          />

                          <FaSave onClick={handleSave} />
                          <FaTimes onClick={handleCancel} />
                        </>
                      ) : (
                        <>
                          <p className="text-center">
                            {ourPartner.partnerName1}
                          </p>
                          <FaEdit
                            onClick={() =>
                              handleEditClick("ourPartnerPersonName1")
                            }
                          />
                        </>
                      )}
                    </div>
                    <div className="col-6 col-md-2">
                      <FaEdit
                        onClick={() => handleEditClick("ourPartnerPersonImg2")}
                      />
                      {editMode.ourPartnerPersonImg2 ? (
                        <>
                          <input
                            type="file"
                            className="form-control"
                            onChange={(e) =>
                              handleChange(e, setOurPartner, "partnerImg2")
                            }
                          />
                          <FaSave onClick={handleSave} />
                          <FaTimes onClick={handleCancel} />
                        </>
                      ) : (
                        <div className="ourPartner">
                          <img
                            src={ourPartner.partnerImg2}
                            className="img-fluid partnet-img"
                            alt="our Partner"
                          />
                        </div>
                      )}
                      {editMode.ourPartnerPersonName2 ? (
                        <>
                          <input
                            type="text"
                            className="form-control"
                            value={ourPartner.partnerName2}
                            onChange={(e) =>
                              handleChange(e, setOurPartner, "partnerName2")
                            }
                          />

                          <FaSave onClick={handleSave} />
                          <FaTimes onClick={handleCancel} />
                        </>
                      ) : (
                        <>
                          <p className="text-center">
                            {ourPartner.partnerName2}
                          </p>
                          <FaEdit
                            onClick={() =>
                              handleEditClick("ourPartnerPersonName2")
                            }
                          />
                        </>
                      )}
                    </div>
                    <div className="col-6 col-md-2">
                      <FaEdit
                        onClick={() => handleEditClick("ourPartnerPersonImg3")}
                      />
                      {editMode.ourPartnerPersonImg3 ? (
                        <>
                          <input
                            type="file"
                            className="form-control"
                            onChange={(e) =>
                              handleChange(e, setOurPartner, "partnerImg3")
                            }
                          />
                          <FaSave onClick={handleSave} />
                          <FaTimes onClick={handleCancel} />
                        </>
                      ) : (
                        <div className="ourPartner">
                          <img
                            src={ourPartner.partnerImg3}
                            className="img-fluid partnet-img"
                            alt="our Partner"
                          />
                        </div>
                      )}
                      {editMode.ourPartnerPersonName3 ? (
                        <>
                          <input
                            type="text"
                            className="form-control"
                            value={ourPartner.partnerName3}
                            onChange={(e) =>
                              handleChange(e, setOurPartner, "partnerName3")
                            }
                          />

                          <FaSave onClick={handleSave} />
                          <FaTimes onClick={handleCancel} />
                        </>
                      ) : (
                        <>
                          <p className="text-center">
                            {ourPartner.partnerName3}
                          </p>
                          <FaEdit
                            onClick={() =>
                              handleEditClick("ourPartnerPersonName3")
                            }
                          />
                        </>
                      )}
                    </div>
                    <div className="col-6 col-md-2">
                      <FaEdit
                        onClick={() => handleEditClick("ourPartnerPersonImg4")}
                      />
                      {editMode.ourPartnerPersonImg4 ? (
                        <>
                          <input
                            type="file"
                            className="form-control"
                            onChange={(e) =>
                              handleChange(e, setOurPartner, "partnerImg4")
                            }
                          />
                          <FaSave onClick={handleSave} />
                          <FaTimes onClick={handleCancel} />
                        </>
                      ) : (
                        <div className="ourPartner">
                          <img
                            src={ourPartner.partnerImg4}
                            className="img-fluid partnet-img"
                            alt="our Partner"
                          />
                        </div>
                      )}
                      {editMode.ourPartnerPersonName4 ? (
                        <>
                          <input
                            type="text"
                            className="form-control"
                            value={ourPartner.partnerName4}
                            onChange={(e) =>
                              handleChange(e, setOurPartner, "partnerName4")
                            }
                          />

                          <FaSave onClick={handleSave} />
                          <FaTimes onClick={handleCancel} />
                        </>
                      ) : (
                        <>
                          <p className="text-center">
                            {ourPartner.partnerName4}
                          </p>
                          <FaEdit
                            onClick={() =>
                              handleEditClick("ourPartnerPersonName4")
                            }
                          />
                        </>
                      )}
                    </div>
                    <div className="col-6 col-md-2">
                      <FaEdit
                        onClick={() => handleEditClick("ourPartnerPersonImg5")}
                      />
                      {editMode.ourPartnerPersonImg5 ? (
                        <>
                          <input
                            type="file"
                            className="form-control"
                            onChange={(e) =>
                              handleChange(e, setOurPartner, "partnerImg5")
                            }
                          />
                          <FaSave onClick={handleSave} />
                          <FaTimes onClick={handleCancel} />
                        </>
                      ) : (
                        <div className="ourPartner">
                          <img
                            src={ourPartner.partnerImg5}
                            className="img-fluid partnet-img"
                            alt="our Partner"
                          />
                        </div>
                      )}
                      {editMode.ourPartnerPersonName5 ? (
                        <>
                          <input
                            type="text"
                            className="form-control"
                            value={ourPartner.ourPartnerPersonName5}
                            onChange={(e) =>
                              handleChange(e, setOurPartner, "partnerName5")
                            }
                          />

                          <FaSave onClick={handleSave} />
                          <FaTimes onClick={handleCancel} />
                        </>
                      ) : (
                        <>
                          <p className="text-center">
                            {ourPartner.partnerName5}
                          </p>
                          <FaEdit
                            onClick={() =>
                              handleEditClick("ourPartnerPersonName5")
                            }
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

export default AdminAbout;
