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
import { useFormik } from "formik";
import toast from "react-hot-toast";

function AdminHome() {
  const [data, setData] = useState({
    title: "",
    description: "",
    subtitle: "",
    subdescription: "",
    journey: "",
    journeydescription: "",
    transformation: "",
    transformationdescription: "",
    mission: "",
    missiondescription: "",
    success: "",
    successdescription: "",
    passion: "",
    passiondescription: "",
    moto: "",
    motodescription: "",
    image_path: "",
  });
  const [isEditing, setIsEditing] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("homepage/edit");
        const {
          title,
          description,
          subtitle,
          subdescription,
          journey,
          journeydescription,
          transformation,
          transformationdescription,
          mission,
          missiondescription,
          success,
          successdescription,
          passion,
          passiondescription,
          moto,
          motodescription,
          image_path,
        } = response.data;

        formik.setValues({
          title,
          description,
          subtitle,
          subdescription,
          journey,
          journeydescription,
          transformation,
          transformationdescription,
          mission,
          missiondescription,
          success,
          successdescription,
          passion,
          passiondescription,
          moto,
          motodescription,
          image_path: `${imgUrl}${image_path}`,
        });

        setPreviewImage(`${imgUrl}${image_path}`);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const formik = useFormik({
    initialValues: data,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });

        const response = await api.post("homepage/save-draft", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {
          toast.success(response.data.message);
        }
      } catch (error) {
        console.error("Error saving data:", error.message);
      }
    },
  });

  const handleEditClick = (field) => {
    setIsEditing(field);
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  const saveContent = async (field) => {
    setIsEditing(null);
    const formData = new FormData();
    formData.append(field, formik.values[field]);

    try {
      const response = await api.post("homepage/save-draft", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  const PublishHomeSection = async () => {
    try {
      const response = await api.post("homepage/approve", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    formik.setFieldValue(e.target.name, file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="container-fluid py-2">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">Home</h5>
            <div>
              <button
                onClick={PublishHomeSection}
                type="button"
                className="btn btn-button btn-sm px-4 py-2"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="home pb-4">
          {/* banner start*/}
          <div className="container py-5">
            <div className="row m-0">
              <div className="col-md-7 col-12">
                <div className="hero">
                  {isEditing === "title" ? (
                    <div>
                      <div className="d-flex">
                        <button
                          type="button"
                          onClick={() => saveContent("title")}
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
                        name="title"
                        {...formik.getFieldProps("title")}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleEditClick("title")}
                        className="btn btn-sm link-secondary ms-2 edit-button"
                        style={{ width: "fit-content" }}
                      >
                        <FaEdit />
                      </button>
                      <h1
                        className="fw-bolder"
                        dangerouslySetInnerHTML={{
                          __html: formik.values.title,
                        }}
                      ></h1>
                    </div>
                  )}
                  {isEditing === "description" ? (
                    <div>
                      <div className="d-flex">
                        <button
                          type="button"
                          onClick={() => saveContent("description")}
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
                        name="description"
                        {...formik.getFieldProps("description")}
                        onChange={formik.handleChange}
                        className="form-control"
                        rows="4"
                      />
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleEditClick("description")}
                        className="btn btn-sm link-secondary ms-2 edit-button"
                        style={{ width: "fit-content" }}
                      >
                        <FaEdit />
                      </button>
                      <p>{formik.values.description}</p>
                    </div>
                  )}
                  <div className="second-heading">
                    {isEditing === "subtitle" ? (
                      <div>
                        <div className="d-flex">
                          <button
                            type="button"
                            onClick={() => saveContent("subtitle")}
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
                          name="subtitle"
                          {...formik.getFieldProps("subtitle")}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() => handleEditClick("subtitle")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <h3>{formik.values.subtitle}</h3>
                      </div>
                    )}
                    {isEditing === "subdescription" ? (
                      <div>
                        <div className="d-flex">
                          <button
                            type="button"
                            onClick={() => saveContent("subdescription")}
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
                          name="subdescription"
                          {...formik.getFieldProps("subdescription")}
                          onChange={formik.handleChange}
                          className="form-control"
                          rows="4"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() => handleEditClick("subdescription")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <p>{formik.values.subdescription}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-md-5 col-12">
                {isEditing === "image_path" ? (
                  <div>
                    <div className="d-flex">
                      <button
                        onClick={() => saveContent("image_path")}
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
                      name="image_path"
                      onChange={handleFileChange}
                      className="form-control"
                    />
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setIsEditing("image_path")}
                      className="btn btn-sm link-secondary ms-5 edit-button"
                      style={{ width: "fit-content" }}
                    >
                      <FaEdit />
                    </button>
                  </div>
                )}
                <div className="hero-img px-5 py-2 ms-5 d-flex justify-content-center">
                  <div>
                    {formik.values.image_path &&
                      (typeof formik.values.image_path === "string" ? (
                        <img
                          src={formik.values.image_path}
                          alt="heroImg"
                          className="img-fluid"
                        />
                      ) : (
                        <img
                          src={URL.createObjectURL(formik.values.image_path)}
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
              {/* Card 1 */}
              <div className="col-md-4 col-12 my-3">
                <div className="card hero-cards h-100">
                  <div className="border-design"></div>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={cardIcon1} alt="cardIcon" />
                      {isEditing === "journey" ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => saveContent("journey")}
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
                          <input
                            type="text"
                            name="journey"
                            {...formik.getFieldProps("journey")}
                            onChange={formik.handleChange}
                            className="form-control"
                          />
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            onClick={() => handleEditClick("journey")}
                            className="btn btn-sm link-secondary ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaEdit />
                          </button>
                          <h5 className="text-center ps-2">
                            {formik.values.journey}
                          </h5>
                        </div>
                      )}
                    </div>
                    {isEditing === "journeydescription" ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => saveContent("journeydescription")}
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
                        <input
                          type="text"
                          name="journeydescription"
                          {...formik.getFieldProps("journeydescription")}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() => handleEditClick("journeydescription")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <p className="text-start ps-2">
                          {formik.values.journeydescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4 col-12 my-3">
                <div className="card hero-cards h-100">
                  <div className="border-design"></div>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={cardIcon1} alt="cardIcon" />
                      {isEditing === "transformation" ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => saveContent("transformation")}
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
                          <input
                            type="text"
                            name="transformation"
                            {...formik.getFieldProps("transformation")}
                            onChange={formik.handleChange}
                            className="form-control"
                          />
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            onClick={() => handleEditClick("transformation")}
                            className="btn btn-sm link-secondary ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaEdit />
                          </button>
                          <h5 className="text-center ps-2">
                            {formik.values.transformation}
                          </h5>
                        </div>
                      )}
                    </div>
                    {isEditing === "transformationdescription" ? (
                      <div>
                        <button
                          onClick={() =>
                            saveContent("transformationdescription")
                          }
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
                        <input
                          type="text"
                          name="transformationdescription"
                          {...formik.getFieldProps("transformationdescription")}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() =>
                            handleEditClick("transformationdescription")
                          }
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <p className="text-start ps-2">
                          {formik.values.transformationdescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4 col-12 my-3">
                <div className="card hero-cards h-100">
                  <div className="border-design"></div>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={cardIcon1} alt="cardIcon" />
                      {isEditing === "mission" ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => saveContent("mission")}
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
                          <input
                            type="text"
                            name="mission"
                            {...formik.getFieldProps("mission")}
                            onChange={formik.handleChange}
                            className="form-control"
                          />
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            onClick={() => handleEditClick("mission")}
                            className="btn btn-sm link-secondary ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaEdit />
                          </button>
                          <h5 className="text-center ps-2">
                            {formik.values.mission}
                          </h5>
                        </div>
                      )}
                    </div>
                    {isEditing === "missiondescription" ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => saveContent("missiondescription")}
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
                        <input
                          type="text"
                          name="missiondescription"
                          {...formik.getFieldProps("missiondescription")}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() => handleEditClick("missiondescription")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <p className="text-start ps-2">
                          {formik.values.missiondescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-4 col-12 my-3">
                <div className="card hero-cards h-100">
                  <div className="border-design"></div>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={cardIcon1} alt="cardIcon" />
                      {isEditing === "success" ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => saveContent("success")}
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
                          <input
                            type="text"
                            name="success"
                            {...formik.getFieldProps("success")}
                            onChange={formik.handleChange}
                            className="form-control"
                          />
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            onClick={() => handleEditClick("success")}
                            className="btn btn-sm link-secondary ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaEdit />
                          </button>
                          <h5 className="text-center ps-2">
                            {formik.values.success}
                          </h5>
                        </div>
                      )}
                    </div>
                    {isEditing === "successdescription" ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => saveContent("successdescription")}
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
                        <input
                          type="text"
                          name="successdescription"
                          {...formik.getFieldProps("successdescription")}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() => handleEditClick("successdescription")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <p className="text-start ps-2">
                          {formik.values.successdescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-md-4 col-12 my-3">
                <div className="card hero-cards h-100">
                  <div className="border-design"></div>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={cardIcon1} alt="cardIcon" />
                      {isEditing === "passion" ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => saveContent("passion")}
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
                          <input
                            type="text"
                            name="passion"
                            {...formik.getFieldProps("passion")}
                            onChange={formik.handleChange}
                            className="form-control"
                          />
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            onClick={() => handleEditClick("passion")}
                            className="btn btn-sm link-secondary ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaEdit />
                          </button>
                          <h5 className="text-center ps-2">
                            {formik.values.passion}
                          </h5>
                        </div>
                      )}
                    </div>
                    {isEditing === "passiondescription" ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => saveContent("passiondescription")}
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
                        <input
                          type="text"
                          name="passiondescription"
                          {...formik.getFieldProps("passiondescription")}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() => handleEditClick("passiondescription")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <p className="text-start ps-2">
                          {formik.values.passiondescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-md-4 col-12 my-3">
                <div className="card hero-cards h-100">
                  <div className="border-design"></div>
                  <div className="card-body text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={cardIcon1} alt="cardIcon" />
                      {isEditing === "moto" ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => saveContent("moto")}
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
                          <input
                            type="text"
                            name="moto"
                            {...formik.getFieldProps("moto")}
                            onChange={formik.handleChange}
                            className="form-control"
                          />
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            onClick={() => handleEditClick("moto")}
                            className="btn btn-sm link-secondary ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaEdit />
                          </button>
                          <h5 className="text-center ps-2">
                            {formik.values.moto}
                          </h5>
                        </div>
                      )}
                    </div>
                    {isEditing === "motodescription" ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => saveContent("motodescription")}
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
                        <input
                          type="text"
                          name="motodescription"
                          {...formik.getFieldProps("motodescription")}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() => handleEditClick("motodescription")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <p className="text-start ps-2">
                          {formik.values.motodescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AdminHome;
