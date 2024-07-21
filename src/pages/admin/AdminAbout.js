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
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";


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

    partnerTitle: " OUR PARTNERS",
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
      console.log("Aboud Datas :", values);
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

  const handleAddPoint = () => {
    formik.setFieldValue("heroCard", [
      ...formik.values.heroCard,
      "",
    ]);
  };

  const handleDeletePoint = (index) => {
    formik.setFieldValue(
      "heroCard",
      formik.values.heroCard.filter((_, i) => i !== index)
    );
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
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          {/* Hero Section */}
          <div className="hero-section" style={{ position: 'relative', textAlign: 'center', maxHeight: '100vh', overflow: 'hidden' }}>
            <div className="row mb-5">
              {isEditing === 'homeHeroImg' ? (
                <div>
                  <div className="d-flex justify-content-center mb-2">
                    <FaSave onClick={handleSaveClick} style={{ cursor: 'pointer' }} />
                    <FaTimes onClick={handleCancel} style={{ cursor: 'pointer', marginLeft: '10px' }} />
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
                  <FaEdit onClick={() => setIsEditing('homeHeroImg')} style={{ cursor: 'pointer' }} />
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
                        <FaSave onClick={handleSaveClick} style={{ cursor: 'pointer' }} />
                        <FaTimes onClick={handleCancel} style={{ cursor: 'pointer', marginLeft: '10px' }} />
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
                      <FaEdit onClick={() => handleEditClick('heroTitle')} style={{ cursor: 'pointer' }} />
                      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{formik.values.heroTitle}</h1>
                    </div>
                  )}
                  {isEditing === 'heroContent' ? (
                    <div>
                      <div className="d-flex justify-content-center mb-2">
                        <FaSave onClick={handleSaveClick} style={{ cursor: 'pointer' }} />
                        <FaTimes onClick={handleCancel} style={{ cursor: 'pointer', marginLeft: '10px' }} />
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
                      <FaEdit onClick={() => handleEditClick('heroContent')} style={{ cursor: 'pointer' }} />
                      <p style={{ fontSize: '1.2rem' }}>{formik.values.heroContent}</p>
                    </div>
                  )}
                  {isEditing === 'heroFounded' ? (
                    <div>
                      <div className="d-flex justify-content-center mb-2">
                        <FaSave onClick={handleSaveClick} style={{ cursor: 'pointer' }} />
                        <FaTimes onClick={handleCancel} style={{ cursor: 'pointer', marginLeft: '10px' }} />
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
                      <FaEdit onClick={() => handleEditClick('heroFounded')} style={{ cursor: 'pointer' }} />
                      <p style={{ fontSize: '1rem' }}>{formik.values.heroFounded}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* What we do */}
          <div className="row mb-5">
            {isEditing === "whatDoTitle" ? (
              <div>
                <div className="d-flex">
                  <FaSave onClick={() => handleSaveClick("whatDoTitle")} />
                  <FaTimes onClick={handleCancel} />
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
                <FaEdit onClick={() => handleEditClick("whatDoTitle")} />
              </>
            )}
            {isEditing === "whatDoContent" ? (
              <div>
                <div className="d-flex">
                  <FaSave onClick={() => handleSaveClick("whatDoContent")} />
                  <FaTimes onClick={handleCancel} />
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
                <FaEdit onClick={() => handleEditClick("whatDoContent")} />
              </>
            )}
          </div>
          {/* Card Section */}
          <div className="container mb-5">
            <div className="row">
              {formik.values.heroCard.map((card, index) => (
                <div className="col-md-6 col-12 mb-3" key={card.id}>
                  <div className="card about-card h-100">
                    <div className="card-body p-4" style={{ backgroundColor: "#FFF5E1", borderRadius: "10px" }}>
                      <div className="card-heading d-flex align-items-center justify-content-center mb-3">
                        {isEditing === "heroCard" && editingIndex === index ? (
                          <div>
                            <div className="d-flex">
                              <FaSave onClick={handleSaveClick} />
                              <FaTimes onClick={handleCancel} />
                            </div>
                            <input
                              type="file"
                              name={`heroCard.${index}.cardIcon`}
                              onChange={handleFileChange}
                              className="form-control"
                            />
                          </div>
                        ) : (
                          <div>
                            <FaEdit onClick={() => handleEditClick("heroCard", index)} />
                            <img
                              src={
                                typeof card.cardIcon === "string"
                                  ? card.cardIcon
                                  : URL.createObjectURL(card.cardIcon)
                              }
                              className="img-fluid me-2"
                              alt="Card Icon"
                              style={{ width: "30px", height: "30px" }}
                            />
                          </div>
                        )}
                        {isEditing === `title${index}` ? (
                          <div>
                            <div className="d-flex">
                              <FaSave onClick={handleSaveClick} />
                              <FaTimes onClick={handleCancel} />
                            </div>
                            <input
                              type="text"
                              name={`heroCard[${index}].title`}
                              {...formik.getFieldProps(`heroCard[${index}].title`)}
                              className="form-control"
                            />
                          </div>
                        ) : (
                          <div>
                            <FaEdit onClick={() => handleEditClick(`title${index}`)} />
                            <h5 className="text-center head-color ps-2">{card.title}</h5>
                          </div>
                        )}
                      </div>
                      <div className="card-body">
                        <ul>
                          {card.description.map((desc, descIndex) => (
                            <li key={descIndex} style={{ listStyle: "none" }}>
                              {isEditing === `cardDescription${index}_${descIndex}` ? (
                                <div>
                                  <div className="d-flex">
                                    <FaSave onClick={handleSaveClick} />
                                    <FaTimes onClick={handleCancel} />
                                  </div>
                                  <textarea
                                    name={`heroCard[${index}].description[${descIndex}]`}
                                    {...formik.getFieldProps(`heroCard[${index}].description[${descIndex}]`)}
                                    className="form-control"
                                    rows="3"
                                  />
                                </div>
                              ) : (
                                <>
                                  <FaEdit onClick={() => handleEditClick(`cardDescription${index}_${descIndex}`)} />
                                  <div className="">
                                  <p><ImCheckmark style={{ color: "#7c2c83" }} />{desc}</p>
                                  </div>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
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
                  <FaSave onClick={() => handleSaveClick("partnerTitle")} />
                  <FaTimes onClick={handleCancel} />
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
                <FaEdit onClick={() => handleEditClick("partnerTitle")} />
              </>
            )}
            {isEditing === "partnerContent" ? (
              <div>
                <div className="d-flex">
                  <FaSave onClick={() => handleSaveClick("partnerContent")} />
                  <FaTimes onClick={handleCancel} />
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
                <FaEdit onClick={() => handleEditClick("partnerContent")} />
              </>
            )}
            <div className="row">
              <div className="container d-flex flex-wrap justify-content-between">
                {formik.values.partnerCard.map((card, index) => (
                  <div className="col-12 col-md-2 mb-3" key={card.id}>
                    <FaEdit onClick={() => handleEditClick("partnerCard", index)} />
                    <div className="Admin-ourPartner">
                      {isEditing === "partnerCard" && editingIndex === index ? (
                        <div>
                          <div className="d-flex">
                            <FaSave onClick={handleSaveClick} />
                            <FaTimes onClick={handleCancel} />
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
                            <FaSave onClick={handleSaveClick} />
                            <FaTimes onClick={handleCancel} />
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
                          <FaEdit onClick={() => handleEditClick(`partnerName${index}`)} />
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