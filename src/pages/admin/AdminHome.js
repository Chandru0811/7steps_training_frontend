import React, { useState } from "react";
import heroImg from "../../assets/Home hero img.jpg";
import cardIcon1 from "../../assets/Home-card-icon-1.jpg";
import cardIcon2 from "../../assets/Home-card-icon-2.jpg";
import cardIcon3 from "../../assets/Home-card-icon-3.jpg";
import cardIcon4 from "../../assets/Home-card-icon-4.jpg";
import cardIcon5 from "../../assets/Home-card-icon-5.jpg";
import cardIcon6 from "../../assets/Home-card-icon-6.jpg";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { Formik, useFormik } from "formik";

function AdminHome() {
  const [data, setData] = useState({
    heroTitle: `Hello! I'm Reihana, Intervention Coach`,
    heroContent: `I'm a specialising in and Emotional Healing. She
                    “intervenes” in helping individuals, entrepreneurs and
                    business persons in overcoming their limiting beliefs and
                    bring positive mindset changes, resulting in them achieving
                    breakthroughs and becoming champions of their lives.`,
    heroSubTitle: `My Calling`,
    heroSubContent: `She had discovered her life's calling through her work in schools and how she
     could make an impact to the youths and children and create positive changes in them.`,
    heroCard: [
      {
        id: 1,
        cardIcon: cardIcon1,
        title: "My Journey",
        description: `Having lost her mum to schizophrenia. Her own journey of losing her identity of low self-esteem, resentments and unfulfillment with life. Her eventual rock bottom came when she found herself on a hospital bed almost going to be paralysed from the waist down, due to spinal issues (cauda equina syndrome). 
     
Her spine surgery in 2019 which put 6 metal screws and a metal cage in her spine, and her having to relearn walking again. Her estrangement with her family due to strained relationships which almost ended up in divorce. And everything in her life became out of balance.`,
      },
      {
        id: 2,
        cardIcon: cardIcon2,
        title: "My Transformation",
        description: `In 2019-2020, she managed to turn her life around, awakening herself out of darkness and regaining her power to emerge successful in her health, finances, relations, career and life. 

All this was due to her changing her mindset - shift in her thinking, speaking, behaviour and positive actions, together with persistence and perserverence.`,
      },
      {
        id: 3,
        cardIcon: cardIcon3,
        title: "My Mission",
        description: `Realising that many people were, like herself, victims of self-doubt, self-sabotage and self-destruction due to trauma, negative thoughts and past programming and events which have occurred in their lives, which often lead to destructive behaviours, depression and suicide, she felt she had to step up to help others.
      
With experiences from her own life, her mum’s, her work with students and individuals, she is now on a mission transforming lives and empowering and inspiring many.,`,
      },
      {
        id: 4,
        cardIcon: cardIcon4,
        title: "My Success",
        description: `In a few short years, she has changed her life drastically and the life of her family and participants. She has regained back her confidence; her life, finances, relationships and career.`,
      },
      {
        id: 5,
        cardIcon: cardIcon5,
        title: "My Passion",
        description: `Her passion still remails with working with youths and the vulnerable of society`,
      },
      {
        id: 6,
        cardIcon: cardIcon6,
        title: "My Motto",
        description: `Passion and commitment in all that I do.
      
Become a progressivist in your own life.`,
      },
    ],
    homeHeroImg: heroImg,
  });

  const formik = useFormik({
    initialValues: data,
    onSubmit: (values) => {
      console.log("values", values);
      setData("values", values);
    },
  });

  const [isEditing, setIsEditing] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleEditClick = (field, index = null) => {
    setIsEditing(field);
    setEditingIndex(index);
  };

  const handleSaveClick = () => {
    setIsEditing(null);
    setEditingIndex(null);
    formik.handleSubmit();
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

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="home pb-4">
          {/* banner start*/}
          <div className="container py-5">
            <div className="row m-0">
              <div className="col-md-7 col-12">
                <div className="hero">
                  {isEditing === "heroTitle" ? (
                    <div>
                      <div className="d-flex">
                        <button
                          onClick={() => handleSaveClick("heroTitle")}
                          className="btn btn-sm link-primary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="btn btn-sm link-danger  ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaTimes />
                        </button>
                      </div>
                      <input
                        type="text"
                        name="heroTitle"
                        {...formik.getFieldProps("heroTitle")}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleEditClick("heroTitle")}
                        className="btn btn-sm link-secondary ms-2 edit-button"
                        style={{ width: "fit-content" }}
                      >
                        <FaEdit />
                      </button>
                      <h1
                        className="fw-bolder"
                        dangerouslySetInnerHTML={{
                          __html: formik.values.heroTitle,
                        }}
                      ></h1>
                    </div>
                  )}
                  {isEditing === "heroContent" ? (
                    <div>
                      <div className="d-flex">
                        <button
                          onClick={() => handleSaveClick("heroContent")}
                          className="btn btn-sm link-primary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="btn btn-sm link-danger  ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaTimes />
                        </button>
                      </div>
                      <textarea
                        name="heroContent"
                        {...formik.getFieldProps("heroContent")}
                        onChange={formik.handleChange}
                        className="form-control"
                        rows="4"
                      />
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleEditClick("heroContent")}
                        className="btn btn-sm link-secondary ms-2 edit-button"
                        style={{ width: "fit-content" }}
                      >
                        <FaEdit />
                      </button>
                      <p>{formik.values.heroContent}</p>
                    </div>
                  )}
                  <div className="second-heading">
                    {isEditing === "heroSubTitle" ? (
                      <div>
                        <div className="d-flex">
                          <button
                            onClick={() => handleSaveClick("heroSubTitle")}
                            className="btn btn-sm link-primary ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaSave />
                          </button>
                          <button
                            onClick={handleCancel}
                            className="btn btn-sm link-danger  ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaTimes />
                          </button>
                        </div>
                        <input
                          type="text"
                          name="heroSubTitle"
                          {...formik.getFieldProps("heroSubTitle")}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleEditClick("heroSubTitle")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <h3>{formik.values.heroSubTitle}</h3>
                      </div>
                    )}
                    {isEditing === "heroSubContent" ? (
                      <div>
                        <div className="d-flex">
                          <button
                            onClick={() => handleSaveClick("heroSubContent")}
                            className="btn btn-sm link-primary ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaSave />
                          </button>
                          <button
                            onClick={handleCancel}
                            className="btn btn-sm link-danger  ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaTimes />
                          </button>
                        </div>
                        <textarea
                          type="text"
                          name="heroSubContent"
                          {...formik.getFieldProps("heroSubContent")}
                          onChange={formik.handleChange}
                          className="form-control"
                          rows="4"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleEditClick("heroSubContent")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <p>{formik.values.heroSubContent}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-md-5 col-12">
                {isEditing === "homeHeroImg" ? (
                  <div>
                    <div className="d-flex">
                      <button
                        onClick={handleSaveClick}
                        className="btn btn-sm link-primary ms-2 edit-button"
                        style={{ width: "fit-content" }}
                      >
                        <FaSave />
                      </button>
                      <button
                        onClick={handleCancel}
                        className="btn btn-sm link-danger  ms-2 edit-button"
                        style={{ width: "fit-content" }}
                      >
                        <FaTimes />
                      </button>
                    </div>
                    <input
                      type="file"
                      name="homeHeroImg"
                      onChange={handleFileChange}
                      className="form-control"
                    />
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setIsEditing("homeHeroImg")}
                      className="btn btn-sm link-secondary ms-5 edit-button"
                      style={{ width: "fit-content" }}
                    >
                      <FaEdit />
                    </button>
                  </div>
                )}
                <div className="hero-img px-5 py-2 ms-5 d-flex justify-content-center">
                  <div>
                    {formik.values.homeHeroImg &&
                      (typeof formik.values.homeHeroImg === "string" ? (
                        <img
                          src={formik.values.homeHeroImg}
                          alt="heroImg"
                          className="img-fluid"
                        />
                      ) : (
                        <img
                          src={URL.createObjectURL(formik.values.homeHeroImg)}
                          alt="heroImg"
                          className="img-fluid"
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* banner end*/}
          {/* cards start*/}
          <div className="container">
            <div className="row py-2">
              {formik.values.heroCard.map((card, index) => (
                <div key={card.id} className="col-md-4 col-12 my-3">
                  <div className="card hero-cards h-100">
                    <div className="border-design"></div>
                    <div className="card-body text-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <div>
                          {isEditing === "heroCard" &&
                          editingIndex === index ? (
                            <div>
                              <div className="d-flex">
                                <button
                                  onClick={handleSaveClick}
                                  className="btn btn-sm link-primary ms-2 edit-button"
                                  style={{ width: "fit-content" }}
                                >
                                  <FaSave />
                                </button>
                                <button
                                  onClick={handleCancel}
                                  className="btn btn-sm link-danger  ms-2 edit-button"
                                  style={{ width: "fit-content" }}
                                >
                                  <FaTimes />
                                </button>
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
                              <button
                                type="button"
                                onClick={() =>
                                  handleEditClick("heroCard", index)
                                }
                                className="btn btn-sm link-secondary ms-2 edit-button"
                                style={{ width: "fit-content" }}
                              >
                                <FaEdit />
                              </button>
                              <img
                                style={{ height: "2rem" }}
                                src={
                                  typeof card.cardIcon === "string"
                                    ? card.cardIcon
                                    : URL.createObjectURL(card.cardIcon)
                                }
                                className="img-fluid"
                                alt="Card Icon"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          {isEditing === `title${index}` ? (
                            <div>
                              <div className="d-flex">
                                <button
                                  onClick={handleSaveClick}
                                  className="btn btn-sm link-primary ms-2 edit-button"
                                  style={{ width: "fit-content" }}
                                >
                                  <FaSave />
                                </button>
                                <button
                                  onClick={handleCancel}
                                  className="btn btn-sm link-danger  ms-2 edit-button"
                                  style={{ width: "fit-content" }}
                                >
                                  <FaTimes />
                                </button>
                              </div>
                              <input
                                type="text"
                                name={`heroCard[${index}].title`}
                                {...formik.getFieldProps(
                                  `heroCard[${index}].title`
                                )}
                                className="form-control"
                              />
                            </div>
                          ) : (
                            <div>
                              <button
                                type="button"
                                onClick={() => handleEditClick(`title${index}`)}
                                className="btn btn-sm link-secondary ms-2 edit-button"
                                style={{ width: "fit-content" }}
                              >
                                <FaEdit />
                              </button>
                              <h5 className="text-center ps-2">{card.title}</h5>
                            </div>
                          )}
                        </div>
                      </div>
                      {isEditing === `cardDescription${index}` ? (
                        <div>
                          <div className="d-flex">
                            <button
                              onClick={handleSaveClick}
                              className="btn btn-sm link-primary ms-2 edit-button"
                              style={{ width: "fit-content" }}
                            >
                              <FaSave />
                            </button>
                            <button
                              onClick={handleCancel}
                              className="btn btn-sm link-danger  ms-2 edit-button"
                              style={{ width: "fit-content" }}
                            >
                              <FaTimes />
                            </button>
                          </div>
                          <textarea
                            name={`heroCard[${index}].description`}
                            {...formik.getFieldProps(
                              `heroCard[${index}].description`
                            )}
                            className="form-control"
                            rows="10"
                          />
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            onClick={() =>
                              handleEditClick(`cardDescription${index}`)
                            }
                            className="btn btn-sm link-secondary ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaEdit />
                          </button>
                          <p className="card-text">{card.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* cards end*/}
        </div>
      </form>
    </>
  );
}

export default AdminHome;
