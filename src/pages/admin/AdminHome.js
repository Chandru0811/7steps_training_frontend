import React, { useState, useEffect } from "react";
import api from "../../config/URL";
import imgUrl from "../../config/ImgUrl";
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
    heroTitle: "",
    heroContent: "",
    heroSubTitle: "",
    heroSubContent: "",
    heroCard: [],
    homeHeroImg: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("homepage");
        const apiData = response.data;

        const formattedData = {
          heroTitle: apiData.title,
          heroContent: apiData.description,
          heroSubTitle: apiData.subtitle,
          heroSubContent: apiData.subdescription,
          heroCard: [
            {
              id: 1,
              cardIcon: cardIcon1, // Adjust if the icons are different
              title: apiData.journey,
              description: apiData.journeydescription,
            },
            {
              id: 2,
              cardIcon: cardIcon2,
              title: apiData.transformation,
              description: apiData.transformationdescription,
            },
            {
              id: 3,
              cardIcon: cardIcon3,
              title: apiData.mission,
              description: apiData.missiondescription,
            },
            {
              id: 4,
              cardIcon: cardIcon4,
              title: apiData.success,
              description: apiData.successdescription,
            },
            {
              id: 5,
              cardIcon: cardIcon5,
              title: apiData.passion,
              description: apiData.passiondescription,
            },
            {
              id: 6,
              cardIcon: cardIcon6,
              title: apiData.moto,
              description: apiData.motodescription,
            },
          ],
          homeHeroImg: `${imgUrl}${apiData.image_path}`,
        };

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: data,
    enableReinitialize: true,
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
