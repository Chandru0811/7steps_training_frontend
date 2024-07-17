/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { useFormik } from "formik";

function AdminContact() {
  const [editMode, setEditMode] = useState({});
  const [datas, setDatas] = useState({
    contactMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.597764489138!2d80.25717047359075!3d13.061256012909292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526615d71d8163%3A0x234b611e7d1f61ea!2sShakti%20Towers%2C%20Sakthi%20Tower%20Ln%2C%20Anna%20Salai%2C%20Thousand%20Lights%2C%20Chennai%2C%20Tamil%20Nadu%20600002!5e0!3m2!1sen!2sin!4v1717675377721!5m2!1sen!2sin",
    location: "The Alexiar,237 Alexandra Road,#04-10,Singapore-159929.",
    email: "7Stepscoach.sg@gmail.com",
    phoneNumber: "(+65) 90214952",
    faceBook:
      "https://www.facebook.com/profile.php?id=100076189750922&mibextid=9R9pX",
    instagram: "https://instagram.com/7stepscoach?utm_source=qr&igshid=MzNlNGNkZWQ4M",
    linkdin: "https://www.linkedin.com/in/reihana-abdullah",
    youtube: "https://www.youtube.com/@fight2fit582",
    tiktok: "https://www.tiktok.com/@the7stepscoach?_t=8f1ZaezjUhu&_r=1",
    whatapp: "https://wa.me/6590214952",
    facebook1: "https://www.facebook.com/Meena013?mibextid=ZbWKwL",
  });

  const formik = useFormik({
    initialValues: {
      contactMap: datas.contactMap,
      location: datas.location,
      email: datas.email,
      phoneNumber: datas.phoneNumber,
      faceBook: datas.faceBook,
      instagram: datas.instagram,
      linkdin: datas.linkdin,
      tiktok: datas.tiktok,
      whatapp: datas.whatapp,
      youtube: datas.youtube,
      facebook1: datas.facebook1,
    },
    onSubmit: (values) => {
      console.log("ContactUs Data :", values);
      setDatas(values);
      setEditMode({});
    },
  });

  const handleEditClick = (field) => {
    setEditMode((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleSave = (field) => {
    formik.handleSubmit();
    setEditMode((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  const handleCancel = (field) => {
    formik.resetForm();
    setEditMode((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  const handleChange = (e, key) => {
    formik.setFieldValue(key, e.target.value);
  };

  return (
    <section className="contactUs">
      <form onSubmit={formik.handleSubmit}>
        <div className="card m-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="mt-5">
                  <h1 style={{ color: "#F6C00B" }}>Get in touch</h1>
                  <p>We are here for you! How can we help?</p>
                </div>
                <div className="row mt-5">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email address
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea rows={5} className="form-control" />
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn contactBtn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                {editMode.contactMap ? (
                  <div className="row mb-5">
                    <div className="">
                      <input
                        type="text"
                        className="form-control mt-4"
                        {...formik.getFieldProps("contactMap")}
                        value={formik.values.contactMap}
                        onChange={(e) => handleChange(e, "contactMap")}
                      />
                      <FaSave onClick={() => handleSave("contactMap")} className="ms-2" />
                      <FaTimes onClick={() => handleCancel("contactMap")} className="ms-2" />
                    </div>
                  </div>
                ) : (
                  <div className="card mt-5">
                    <FaEdit onClick={() => handleEditClick("contactMap")} className="ms-3" />
                    <iframe
                      src={datas.contactMap}
                      width="100%"
                      height="450"
                      style={{ borderRadius: "5px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                )}
                <div className="row mt-3">
                  <div className="">
                    <p>
                      <SlLocationPin size={20} color="#7C2C83" />{" "}
                      {editMode.location ? (
                        <>
                          <input
                            type="text"
                            className="form-control mt-4"
                            {...formik.getFieldProps("location")}
                            value={formik.values.location}
                            onChange={(e) => handleChange(e, "location")}
                          />
                          <FaSave onClick={() => handleSave("location")} className="ms-2" />
                          <FaTimes onClick={() => handleCancel("location")} className="ms-2" />
                        </>
                      ) : (
                        datas.location
                      )}
                    </p>{" "}
                    {!editMode.location && (
                      <FaEdit onClick={() => handleEditClick("location")} className="ms-3" />
                    )}
                    <p>
                      <IoCallOutline size={20} color="#7C2C83" />{" "}
                      {editMode.phoneNumber ? (
                        <>
                          <input
                            type="text"
                            className="form-control mt-4"
                            {...formik.getFieldProps("phoneNumber")}
                            value={formik.values.phoneNumber}
                            onChange={(e) => handleChange(e, "phoneNumber")}
                          />
                          <FaSave onClick={() => handleSave("phoneNumber")} className="ms-2" />
                          <FaTimes onClick={() => handleCancel("phoneNumber")} className="ms-2" />
                        </>
                      ) : (
                        datas.phoneNumber
                      )}
                    </p>{" "}
                    {!editMode.phoneNumber && (
                      <FaEdit onClick={() => handleEditClick("phoneNumber")} className="ms-3" />
                    )}
                    <p>
                      <CiMail size={20} color="#7C2C83" />{" "}
                      {editMode.email ? (
                        <>
                          <input
                            type="text"
                            className="form-control mt-4"
                            {...formik.getFieldProps("email")}
                            value={formik.values.email}
                            onChange={(e) => handleChange(e, "email")}
                          />
                          <FaSave onClick={() => handleSave("email")} className="ms-2" />
                          <FaTimes onClick={() => handleCancel("email")} className="ms-2" />
                        </>
                      ) : (
                        datas.email
                      )}
                    </p>{" "}
                    {!editMode.email && (
                      <FaEdit onClick={() => handleEditClick("email")} className="ms-3" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end align-items-end">
            <div
              className="card p-3"
              style={{
                borderRadius: "15px",
                border: "none",
                background: "#f6bf0b38",
              }}
            >
              {editMode.faceBook ? (
                <div>
                  <input
                    type="text"
                    className="form-control mt-4"
                    value={formik.values.faceBook}
                    onChange={(e) => handleChange(e, "faceBook")}
                  />
                  <FaSave onClick={() => handleSave("faceBook")} className="ms-2" />
                  <FaTimes onClick={() => handleCancel("faceBook")} className="ms-2" />
                </div>
              ) : (
                <>                <a href={datas.faceBook} target="_blank" rel="noopener noreferrer">
                  <p className="card socialMedia-card p-3">
                    <FaFacebookF />

                  </p>
                </a>
                  <FaEdit onClick={() => handleEditClick("faceBook")} className="ms-3" />
                </>
              )}
              {editMode.instagram ? (
                <div>
                  <input
                    type="text"
                    className="form-control mt-4"
                    value={formik.values.instagram}
                    onChange={(e) => handleChange(e, "instagram")}
                  />
                  <FaSave onClick={() => handleSave("instagram")} className="ms-2" />
                  <FaTimes onClick={() => handleCancel("instagram")} className="ms-2" />
                </div>
              ) : (
                <>                <a href={datas.instagram} target="_blank" rel="noopener noreferrer">
                  <p className="card socialMedia-card p-3">
                    <FaInstagram />

                  </p>
                </a>
                  <FaEdit onClick={() => handleEditClick("instagram")} className="ms-3" />
                </>
              )}
              {/* <a href={datas.instagram} target="_blank" rel="noopener noreferrer">
                <p className="card socialMedia-card p-3">
                  <FaInstagram />
                </p>
              </a>  */}
              {editMode.linkdin ? (
                <div>
                  <input
                    type="text"
                    className="form-control mt-4"
                    value={formik.values.linkdin}
                    onChange={(e) => handleChange(e, "linkdin")}
                  />
                  <FaSave onClick={() => handleSave("linkdin")} className="ms-2" />
                  <FaTimes onClick={() => handleCancel("linkdin")} className="ms-2" />
                </div>
              ) : (
                <>                <a href={datas.linkdin} target="_blank" rel="noopener noreferrer">
                  <p className="card socialMedia-card p-3">
                    <FaLinkedin />

                  </p>
                </a>
                  <FaEdit onClick={() => handleEditClick("linkdin")} className="ms-3" />
                </>
              )}
              {/* 
              <a href={datas.linkdin} target="_blank" rel="noopener noreferrer">
                <p className="card socialMedia-card p-3">
                  <FaLinkedin />
                </p>
              </a> */}
              {editMode.youtube ? (
                <div>
                  <input
                    type="text"
                    className="form-control mt-4"
                    value={formik.values.youtube}
                    onChange={(e) => handleChange(e, "youtube")}
                  />
                  <FaSave onClick={() => handleSave("youtube")} className="ms-2" />
                  <FaTimes onClick={() => handleCancel("youtube")} className="ms-2" />
                </div>
              ) : (
                <>                <a href={datas.youtube} target="_blank" rel="noopener noreferrer">
                  <p className="card socialMedia-card p-3">
                    <FaYoutube />

                  </p>
                </a>
                  <FaEdit onClick={() => handleEditClick("youtube")} className="ms-3" />
                </>
              )}
              {/* <a href={datas.youtube} target="_blank" rel="noopener noreferrer">
                <p className="card socialMedia-card p-3">
                  <FaYoutube />
                </p>
              </a> */}
              {editMode.whatapp ? (
                <div>
                  <input
                    type="text"
                    className="form-control mt-4"
                    value={formik.values.whatapp}
                    onChange={(e) => handleChange(e, "whatapp")}
                  />
                  <FaSave onClick={() => handleSave("whatapp")} className="ms-2" />
                  <FaTimes onClick={() => handleCancel("whatapp")} className="ms-2" />
                </div>
              ) : (
                <>                <a href={datas.whatapp} target="_blank" rel="noopener noreferrer">
                  <p className="card socialMedia-card p-3">
                    <FaWhatsapp />

                  </p>
                </a>
                  <FaEdit onClick={() => handleEditClick("whatapp")} className="ms-3" />
                </>
              )}
              {/* <a href={datas.whatapp} target="_blank" rel="noopener noreferrer">
                <p className="card socialMedia-card p-3">
                  <FaWhatsapp />
                </p>
              </a> */}
              {editMode.tiktok ? (
                <div>
                  <input
                    type="text"
                    className="form-control mt-4"
                    value={formik.values.tiktok}
                    onChange={(e) => handleChange(e, "tiktok")}
                  />
                  <FaSave onClick={() => handleSave("tiktok")} className="ms-2" />
                  <FaTimes onClick={() => handleCancel("tiktok")} className="ms-2" />
                </div>
              ) : (
                <>                <a href={datas.tiktok} target="_blank" rel="noopener noreferrer">
                  <p className="card socialMedia-card p-3">
                    <AiFillTikTok />

                  </p>
                </a>
                  <FaEdit onClick={() => handleEditClick("tiktok")} className="ms-3" />
                </>
              )}
              {/* <a href={datas.tiktok} target="_blank" rel="noopener noreferrer">
                <p className="card socialMedia-card p-3">
                  <AiFillTikTok />
                </p>
              </a> */}
              {editMode.facebook1 ? (
                <div>
                  <input
                    type="text"
                    className="form-control mt-4"
                    value={formik.values.facebook1}
                    onChange={(e) => handleChange(e, "facebook1")}
                  />
                  <FaSave onClick={() => handleSave("facebook1")} className="ms-2" />
                  <FaTimes onClick={() => handleCancel("facebook1")} className="ms-2" />
                </div>
              ) : (
                <>                <a href={datas.facebook1} target="_blank" rel="noopener noreferrer">
                  <p className="card socialMedia-card p-3">
                    <FaFacebookF />

                  </p>
                </a>
                  <FaEdit onClick={() => handleEditClick("facebook1")} className="ms-3" />
                </>
              )}
              {/* <a href={datas.facebook1} target="_blank" rel="noopener noreferrer">
                <p className="card socialMedia-card p-3">
                  <FaFacebookF />
                </p>
              </a> */}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AdminContact;