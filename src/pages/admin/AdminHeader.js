import React, { useState } from 'react';
import Logo from "../../assets/Logo.png";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { useFormik } from "formik";

function AdminHeader() {
  const [editMode, setEditMode] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const [datas, setDatas] = useState({
    headerLogo: Logo,
    logoText: "7 STEPS"
  });

  const formik = useFormik({
    initialValues: {
      headerLogo: datas.headerLogo,
      logoText: datas.logoText,
    },
    onSubmit: (values) => {
      console.log("Header Datas :", values);
      if (previewImage) {
        values.headerLogo = URL.createObjectURL(previewImage);
      }
      setDatas({
        headerLogo: values.headerLogo,
        logoText: values.logoText,
      });
      setEditMode({});
      setPreviewImage(null);
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
    setPreviewImage(null); 
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
        setPreviewImage(e.target.files[0]);
    }
  };

  return (
    <section>
      <div className="container-fluid py-2 bg-white">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">Header</h5>
            <div>
              <button type="button" className="btn btn-button btn-sm px-4 py-2">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12 d-flex align-items-center'>
            <div>
              {!editMode.headerLogo && (
                <div>
                  <FaEdit onClick={() => handleEditClick("headerLogo")} className='text-secondary' />
                </div>
              )}
              {editMode.headerLogo ? (
                <>
                  <input
                    type="file"
                    className="form-control mb-2"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <FaSave onClick={() => handleSave("headerLogo")} className='text-primary' />
                  <FaTimes onClick={() => handleCancel("headerLogo")} className='mx-2 text-danger' />
                </>
              ) : null}
              <img
                src={previewImage ? URL.createObjectURL(previewImage) : formik.values.headerLogo}
                alt="Goal"
                className="img-fluid goalImg"
                width={50}
              />
            </div>
            <div className='ms-2'>
              {!editMode.logoText ? (
                <div className='d-flex align-items-center mt-4'>
                  <span style={{ color: "#7C2C83", fontWeight: "bolder", fontSize: "24px" }}>{datas.logoText}</span>
                  <FaEdit onClick={() => handleEditClick("logoText")} className='mx-1 mb-4 text-secondary' />
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    className="form-control mb-1"
                    {...formik.getFieldProps("logoText")}
                    value={formik.values.logoText}
                    onChange={(e) => formik.setFieldValue("logoText", e.target.value)}
                  />
                  <FaSave onClick={() => handleSave("logoText")} className='text-primary' />
                  <FaTimes onClick={() => handleCancel("logoText")} className='mx-2 text-danger' />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminHeader;