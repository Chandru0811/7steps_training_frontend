import React, { useState } from "react";
import cardIcon1 from "../../assets/VISION.png";
import cardIcon2 from "../../assets/MISSION.png";
import cardIcon3 from "../../assets/CORE VALUES.png";
import cardIcon4 from "../../assets/OBJECTIVES.png";
import person_1 from "../../assets/AGORA SINGAPORE.png";
import person_2 from "../../assets/MILLIONAIRE SPEAKERS CLUB (MSN).png";
import person_3 from "../../assets/VISAKHA ORATORS JUNIOR (VIZAG).png";
import person_4 from "../../assets/EDUFAM INTERNATIONAL PL.png";
import person_5 from "../../assets/ELEFPI LEARNSCAPE.png";
import { ImCheckmark } from "react-icons/im";
import heroImg from "../../assets/About_hero_image.png";
import { useFormik } from "formik";
import { FaEdit, FaSave, FaTimes, FaPlus } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

function AdminAbout() {
  const [isEditing, setIsEditing] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [data, setData] = useState({
    homeHeroImg: heroImg,
    heroTitle: `7STEPS LIFE TRANSFORMATION PTE LTD`,
    heroContent: `A LIFE COACHING COMPANY THAT ASPIRES TO CHANGE LIVES THROUGH
                MINDSET AWAKENING AND REPROGRAMMING.`,
    heroFounded: `FOUNDED BY 13 NOV 2020 / UEN 202036839N`,

    whatDoTitle: `What We Do`,
    whatDoContent: `We believe that every person has a life mission to fulfill and we
              provide the intervention to guide and enable the individual to live
              his or her best potential life.

              Often times as humans, we encounter challenges and life traumas and
              become stuck at our own limitations due to these experiences and
              thus we cannot move forward. Be it in business, career,
              relationships, health or finances.

              At 7Steps we provide the Intervention that they need to unblock
              these obstacles so as to enable them to BREAK-FREE AND BREAKTHROUGH
              TO A LIMITLESS LIFE. `,

    heroCard: [
      {
        id: 1,
        cardIcon: cardIcon1,
        title: "VISION",
        description: [
          "An empowered world is built by individuals realizing their full potential and taking proactive control of their lives, fostering collective societal flourishing."
        ],
      },
      {
        id: 2,
        cardIcon: cardIcon2,
        title: "MISSION",
        description: [
          "To support every individual, child or adult, regardless of background, culture, or limitations, in their endeavor to better themselves and the world through the 3 E’s - Education, Entrepreneurship, and Empowerment."
        ],
      },
      {
        id: 3,
        cardIcon: cardIcon3,
        title: "CORE VALUES",
        description: [
          "R – Raise Ourselves",
          "S – Serve Many",
          "I – Inspire Others",
          "E – Empower All",
        ],
      },
      {
        id: 4,
        cardIcon: cardIcon4,
        title: "OBJECTIVES",
        description: [
          "To provide a safe and supportive environment to nurture, grow and learn.",
          "To Inspire, Educate and Empower."
        ],
      },
    ],

    partnerTitle: "OUR PARTNERS",
    partnerContent: `Essential allies who share our vision and commitment, working
                    collaboratively to drive meaningful change and achieve shared goals.`,
    partnerCard: [
      {
        id: 1,
        partnerImg: person_1,
        partnerName: "AGORA SINGAPORE",
      },
      {
        id: 2,
        partnerImg: person_2,
        partnerName: "MILLIONAIRE SPEAKERS CLUB (MSN)",
      },
      {
        id: 3,
        partnerImg: person_3,
        partnerName: "VISAKHA ORATORS JUNIOR (VIZAG)",
      },
      {
        id: 4,
        partnerImg: person_4,
        partnerName: "EDUFAM INTERNATIONAL P/L",
      },
      {
        id: 5,
        partnerImg: person_5,
        partnerName: "ELEFPI LEARNSCAPE",
      },
    ],
  });

  const formik = useFormik({
    initialValues: data,
    onSubmit: (values) => {
      console.log("About Datas:", values);
      setData(values);
    },
  });

  const handleEditClick = (field, index = null) => {
    setIsEditing(field);
    setEditingIndex(index);
  };

  const handleSaveClick = () => {
    formik.handleSubmit();
    setIsEditing(null);
    setEditingIndex(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fieldName = e.target.name;
    if (fieldName.startsWith("heroCard")) {
      const [field, index, key] = fieldName.split(".");
      formik.setFieldValue(`heroCard[${index}].${key}`, file);
    } else {
      formik.setFieldValue(fieldName, file);
    }
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleCancel = () => {
    setIsEditing(null);
    setEditingIndex(null);
  };

  const handleDescriptionChange = (e, cardIndex, descIndex) => {
    const { value } = e.target;
    const newHeroCard = formik.values.heroCard.map((card, i) => {
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
    formik.setFieldValue("heroCard", newHeroCard);
  };

  const handleAddDescription = (cardIndex) => {
    const newHeroCard = formik.values.heroCard.map((card, i) => {
      if (i === cardIndex) {
        return {
          ...card,
          description: [...card.description, ""],
        };
      }
      return card;
    });
    formik.setFieldValue("heroCard", newHeroCard);
  };

  const handleDeleteDescription = (cardIndex, descIndex) => {
    const newHeroCard = formik.values.heroCard.map((card, i) => {
      if (i === cardIndex) {
        return {
          ...card,
          description: card.description.filter((_, j) => j !== descIndex),
        };
      }
      return card;
    });
    formik.setFieldValue("heroCard", newHeroCard);
  };

  return (
    <section>
      <div className="container-fluid py-2 bg-white">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">About</h5>
            <div>
              <button type="button" className="btn btn-button btn-sm px-4 py-2">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          {/* Hero Section */}
          <div className="hero-section" style={{ position: 'relative', textAlign: 'center', maxHeight: '100vh', overflow: 'hidden' }}>
            <div className="row mb-5">
              {isEditing === 'homeHeroImg' ? (
                <div>
                  <div className="d-flex justify-content-center mb-2">
                    <FaSave onClick={handleSaveClick} className="text-primary" />
                    <FaTimes onClick={handleCancel} style={{ marginLeft: '10px' }} className="text-danger" />
                  </div>
                  <input
                    type="file"
                    name="homeHeroImg"
                    onChange={handleFileChange}
                    className="form-control"
                    style={{ margin: '0 auto', width: '300px' }}
                  />
                </div>
              ) : (
                <div>
                  <FaEdit onClick={() => setIsEditing('homeHeroImg')} className="text-secondary" />
                </div>
              )}
              <div style={{ position: 'relative', width: '100%' }}>
                {formik.values.homeHeroImg &&
                  (typeof formik.values.homeHeroImg === 'string' ? (
                    <img
                      src={formik.values.homeHeroImg}
                      alt="heroImg"
                      className="img-fluid"
                      style={{ width: '100%', height: '100vh', opacity: '0.3', objectFit: 'cover' }}
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(formik.values.homeHeroImg)}
                      alt="heroImg"
                      className="img-fluid"
                      style={{ width: '100%', height: '100vh', opacity: '0.3', objectFit: 'cover' }}
                    />
                  ))}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                    width: '100%',
                    padding: '0 10px',
                  }}
                >
                  {isEditing === 'heroTitle' ? (
                    <div>
                      <div className="d-flex justify-content-center mb-2">
                        <FaSave onClick={handleSaveClick} className="text-primary" />
                        <FaTimes onClick={handleCancel} style={{ marginLeft: '10px' }} className="text-danger" />
                      </div>
                      <input
                        type="text"
                        name="heroTitle"
                        {...formik.getFieldProps('heroTitle')}
                        onChange={formik.handleChange}
                        className="form-control"
                        style={{ margin: '0 auto', width: '300px' }}
                      />
                    </div>
                  ) : (
                    <div>
                      <FaEdit onClick={() => handleEditClick('heroTitle')} className="text-secondary" />
                      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{formik.values.heroTitle}</h1>
                    </div>
                  )}
                  {isEditing === 'heroContent' ? (
                    <div>
                      <div className="d-flex justify-content-center mb-2">
                        <FaSave onClick={handleSaveClick} className="text-primary" />
                        <FaTimes onClick={handleCancel} style={{ marginLeft: '10px' }} className="text-danger" />
                      </div>
                      <textarea
                        name="heroContent"
                        {...formik.getFieldProps('heroContent')}
                        onChange={formik.handleChange}
                        className="form-control"
                        rows="3"
                        style={{ margin: '0 auto', width: '300px' }}
                      />
                    </div>
                  ) : (
                    <div>
                      <FaEdit onClick={() => handleEditClick('heroContent')} className="text-secondary" />
                      <p style={{ fontSize: '1.2rem' }}>{formik.values.heroContent}</p>
                    </div>
                  )}
                  {isEditing === 'heroFounded' ? (
                    <div>
                      <div className="d-flex justify-content-center mb-2">
                        <FaSave onClick={handleSaveClick} className="text-primary" />
                        <FaTimes onClick={handleCancel} style={{ marginLeft: '10px' }} className="text-danger" />
                      </div>
                      <input
                        type="text"
                        name="heroFounded"
                        {...formik.getFieldProps('heroFounded')}
                        onChange={formik.handleChange}
                        className="form-control"
                        style={{ margin: '0 auto', width: '300px' }}
                      />
                    </div>
                  ) : (
                    <div>
                      <FaEdit onClick={() => handleEditClick('heroFounded')} className="text-secondary" />
                      <p style={{ fontSize: '1rem' }}>{formik.values.heroFounded}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* What We Do Section */}
          <div className="row mb-5">
            {isEditing === "whatDoTitle" ? (
              <div>
                <div className="d-flex">
                  <FaSave onClick={() => handleSaveClick("whatDoTitle")} className="text-primary" />
                  <FaTimes onClick={handleCancel} className="text-danger" />
                </div>
                <input
                  type="text"
                  name="whatDoTitle"
                  {...formik.getFieldProps("whatDoTitle")}
                  onChange={formik.handleChange}
                  className="form-control"
                />
              </div>
            ) : (
              <>
                <h3 className="text-center"
                  style={{ textDecoration: "underline" }}>
                  {formik.values.whatDoTitle}</h3>
                <FaEdit onClick={() => handleEditClick("whatDoTitle")} className="text-secondary" />
              </>
            )}
            {isEditing === "whatDoContent" ? (
              <div>
                <div className="d-flex">
                  <FaSave onClick={() => handleSaveClick("whatDoContent")} className="text-primary" />
                  <FaTimes onClick={handleCancel} className="text-danger" />
                </div>
                <textarea
                  type="text"
                  name="whatDoContent"
                  {...formik.getFieldProps("whatDoContent")}
                  onChange={formik.handleChange}
                  className="form-control"
                  rows="4"
                />
              </div>
            ) : (
              <>
                <p className="text-center">{formik.values.whatDoContent}</p>
                <FaEdit onClick={() => handleEditClick("whatDoContent")} className="text-secondary" />
              </>
            )}
          </div>
          {/* Card Section */}
          <div className="container mb-5">
            <div className="row">
              {formik.values.heroCard.map((card, cardIndex) => (
                <div className="col-md-6 col-12 mb-3" key={card.id}>
                  <div className="card about-card h-100">
                    <div className="card-body p-4">
                      {isEditing === 'heroCard' && editingIndex === cardIndex ? (
                        <div>
                          <input
                            type="file"
                            name={`heroCard.${cardIndex}.cardIcon`}
                            onChange={handleFileChange}
                            className="form-control mb-3"
                          />
                          <input
                            type="text"
                            name={`heroCard.${cardIndex}.title`}
                            value={card.title}
                            onChange={formik.handleChange}
                            className="form-control mb-3"
                          />
                          {card.description.map((desc, descIndex) => (
                            <div key={descIndex} className="d-flex">
                              <input
                                value={desc}
                                onChange={(e) => handleDescriptionChange(e, cardIndex, descIndex)}
                                rows="2"
                                className="form-control mb-3"
                                style={{ margin: '5px 0' }}
                              />
                              <IoIosCloseCircleOutline color="Red" size={25}
                                className="ms-2 mt-2"
                                onClick={() => handleDeleteDescription(cardIndex, descIndex)}
                              />
                            </div>
                          ))}
                          <div className="d-flex">
                            <FaPlus onClick={() => handleAddDescription(cardIndex)} className="text-success" />
                            <FaSave onClick={handleSaveClick} className="mx-2 text-primary" />
                            <FaTimes onClick={handleCancel} className="text-danger" />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src={
                                typeof card.cardIcon === "string"
                                  ? card.cardIcon
                                  : URL.createObjectURL(card.cardIcon)
                              }
                              alt={card.title}
                              className="img-fluid"
                              style={{ width: '30px' }}
                            />
                            <h5 className="mt-2 mx-2">{card.title}</h5>
                          </div>
                          {card.description.map((desc, descIndex) => (
                            <p key={descIndex}><ImCheckmark style={{ color: "#7c2c83" }} /> {desc}</p>
                          ))}
                          <FaEdit
                            onClick={() => handleEditClick('heroCard', cardIndex)}
                            className="position-absolute top-0 end-0 mt-3 me-3 text-secondary"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Our Partner */}
          <div className="container mb-5">
            {isEditing === "partnerTitle" ? (
              <div>
                <div className="d-flex">
                  <FaSave onClick={() => handleSaveClick("partnerTitle")} className="text-primary" />
                  <FaTimes onClick={handleCancel} className="text-danger" />
                </div>
                <input
                  type="text"
                  name="partnerTitle"
                  {...formik.getFieldProps("partnerTitle")}
                  onChange={formik.handleChange}
                  className="form-control"
                />
              </div>
            ) : (
              <>
                <h3 className="text-center" style={{ textDecoration: "underline" }}>
                  {formik.values.partnerTitle}
                </h3>
                <FaEdit onClick={() => handleEditClick("partnerTitle")} className="text-secondary" />
              </>
            )}
            {isEditing === "partnerContent" ? (
              <div>
                <div className="d-flex">
                  <FaSave onClick={() => handleSaveClick("partnerContent")} className="text-primary" />
                  <FaTimes onClick={handleCancel} className="text-danger" />
                </div>
                <textarea
                  type="text"
                  name="partnerContent"
                  {...formik.getFieldProps("partnerContent")}
                  onChange={formik.handleChange}
                  className="form-control"
                  rows="4"
                />
              </div>
            ) : (
              <>
                <p className="text-center">{formik.values.partnerContent}</p>
                <FaEdit onClick={() => handleEditClick("partnerContent")} className="text-secondary" />
              </>
            )}
            <div className="row">
              <div className="container d-flex flex-wrap justify-content-between">
                {formik.values.partnerCard.map((card, index) => (
                  <div className="col-12 col-md-2 mb-3" key={card.id}>
                    <FaEdit onClick={() => handleEditClick("partnerCard", index)} className="text-secondary" />
                    <div className="Admin-ourPartner">
                      {isEditing === "partnerCard" && editingIndex === index ? (
                        <div>
                          <div className="d-flex">
                            <FaSave onClick={handleSaveClick} className="text-primary" />
                            <FaTimes onClick={handleCancel} className="text-danger" />
                          </div>
                          <input
                            type="file"
                            name={`partnerCard.${index}.partnerImg`}
                            onChange={handleFileChange}
                            className="form-control"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            src={
                              typeof card.partnerImg === "string"
                                ? card.partnerImg
                                : URL.createObjectURL(card.partnerImg)
                            }
                            className="img-fluid"
                            alt="Partner"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      {isEditing === `partnerName${index}` ? (
                        <div>
                          <div className="d-flex">
                            <FaSave onClick={handleSaveClick} className="text-primary" />
                            <FaTimes onClick={handleCancel} className="text-danger" />
                          </div>
                          <input
                            type="text"
                            name={`partnerCard[${index}].partnerName`}
                            {...formik.getFieldProps(`partnerCard[${index}].partnerName`)}
                            className="form-control"
                          />
                        </div>
                      ) : (
                        <div>
                          <FaEdit onClick={() => handleEditClick(`partnerName${index}`)} className="text-secondary" />
                          <p className="text-center">{card.partnerName}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>

    </section>
  );
}
export default AdminAbout;