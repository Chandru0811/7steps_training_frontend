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
    initialValues: {
      heroTitle: data.heroTitle,
      heroContent: data.heroContent,
      heroSubTitle: data.heroSubTitle,
      heroSubContent: data.heroSubContent,
      heroCard: data.heroCard,
      homeHeroImg: data.homeHeroImg,
    },
    onSubmit: (values) => {
      setData("values", values);
    },
  });

  const [isEditing, setIsEditing] = useState(null);
  const [newData, setNewData] = useState(data);

  const handleEditClick = (field) => {
    setIsEditing(field);
  };

  const handleSaveClick = () => {
    setIsEditing(null);
    setData(newData);
  };

  const handleCancel = () => {
    setIsEditing(null);
  };
  const [editingIndex, setEditingIndex] = useState(null);

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
                      <input
                        type="text"
                        name="heroContent"
                        {...formik.getFieldProps("heroContent")}
                        onChange={formik.handleChange}
                        className="form-control"
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
                        <input
                          type="text"
                          name="heroSubContent"
                          {...formik.getFieldProps("heroSubContent")}
                          onChange={formik.handleChange}
                          className="form-control"
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
              <div className="col-md-5 col-12 d-flex justify-content-center">
                <div className="hero-img px-5 py-2">
                  {isEditing === "homeHeroImg" ? (
                    <div>
                      <div className="d-flex">
                        <button
                          onClick={() => setIsEditing(false)}
                          className="btn btn-sm link-primary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setIsEditing(null)}
                          className="btn btn-sm link-danger  ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaTimes />
                        </button>
                      </div>
                      <input
                        type="file"
                        name="homeHeroImg"
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="btn btn-sm link-secondary ms-2 edit-button"
                        style={{ width: "fit-content" }}
                      >
                        <FaEdit />
                      </button>
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
                  )}
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
                      <Formik
                        initialValues={{
                          title: card.title,
                          description: card.description,
                          cardIcon: card.cardIcon,
                        }}
                        onSubmit={(values) => {
                          const updatedCards = [...formik.values.heroCard];
                          updatedCards[index] = values;
                          formik.setFieldValue("heroCard", updatedCards);
                          setEditingIndex(null);
                        }}
                      >
                        {({
                          values,
                          handleChange,
                          handleSubmit,
                          setFieldValue,
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="data-section">
                              {editingIndex === index ? (
                                <>
                                  <div className="d-flex">
                                    <button
                                      onClick={handleSubmit}
                                      className="btn btn-sm link-primary ms-2 edit-button"
                                      style={{ width: "fit-content" }}
                                    >
                                      <FaSave />
                                    </button>
                                    <button
                                      onClick={() => setEditingIndex(null)}
                                      className="btn btn-sm link-danger  ms-2 edit-button"
                                      style={{ width: "fit-content" }}
                                    >
                                      <FaTimes />
                                    </button>
                                  </div>
                                  <input
                                    type="file"
                                    onChange={(event) => {
                                      const file = event.target.files[0];
                                      if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                          setFieldValue(
                                            "cardIcon",
                                            reader.result
                                          );
                                        };
                                        reader.readAsDataURL(file);
                                      }
                                    }}
                                  />
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => setEditingIndex(index)}
                                    className="btn btn-sm link-secondary ms-2 edit-button"
                                    style={{ width: "fit-content" }}
                                  >
                                    <FaEdit />
                                  </button>
                                </>
                              )}
                            </div>
                            {editingIndex === index ? (
                              <>
                                <input
                                  type="text"
                                  name="title"
                                  value={values.title}
                                  onChange={handleChange}
                                  className="form-control my-2"
                                />
                                <textarea
                                  name="description"
                                  value={values.description}
                                  onChange={handleChange}
                                  className="form-control"
                                  style={{ height: "250px" }}
                                />
                              </>
                            ) : (
                              <>
                                <div className="d-flex justify-content-center">
                                  <span>
                                    <img
                                      src={values.cardIcon}
                                      alt="cardIcon"
                                      className="img-fluid"
                                    />
                                  </span>
                                  &nbsp; &nbsp;
                                  <span>
                                    <h4>{values.title}</h4>
                                  </span>
                                </div>
                                <p
                                  className="text-start"
                                  style={{ whiteSpace: "pre-wrap" }}
                                >
                                  {values.description}
                                </p>
                              </>
                            )}
                          </form>
                        )}
                      </Formik>
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
