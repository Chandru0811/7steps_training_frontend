import React, { useState } from 'react';
import Logo from "../../assets/Logo.png";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

function AdminHeader() {
  const [newImage, setNewImage] = useState(null);

  const [headerText, setHeaderText] = useState({
    headerLogo: Logo,
    logoText: "7 STEPS"
  });

  const [editMode, setEditMode] = useState({
    headerLogo: false,
    logoText: false
  });

  const handleEditClick = (section) => {
    setEditMode((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleSave = () => {
    if (newImage) {
      setHeaderText((prevState) => ({
        ...prevState,
        headerLogo: URL.createObjectURL(newImage),
      }));
      setNewImage(null);
    }
    setEditMode({
      headerLogo: false,
      logoText: false
    });
  };

  const handleCancel = () => {
    setEditMode({
      headerLogo: false,
      logoText: false
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0]);
    }
  };

  const handlelogoTextChange = (e) => {
    setHeaderText((prevState) => ({
      ...prevState,
      logoText: e.target.value,
    }));
  };

  return (
    <section>
      <div className="container-fluid py-2 bg-white">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">Header</h5>
            <div>
              <button type="button" className="btn btn-button btn-sm px-4">
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
                  <FaEdit onClick={() => handleEditClick("headerLogo")} />
                </div>
              )}
              {editMode.headerLogo ? (
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
              ) : null}
              <img
                src={headerText.headerLogo}
                alt="Goal"
                className="img-fluid goalImg"
                width={50}
              />
            </div>
            <div className='ms-2'>
              {!editMode.logoText ? (
                <div className='d-flex align-items-center mt-4'>
                  <span style={{ color: "#7C2C83", fontWeight: "bolder", fontSize: "24px" }}>{headerText.logoText}</span>
                  <FaEdit onClick={() => handleEditClick("logoText")} className='mx-1 mb-4' />
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    className="form-control mb-1"
                    value={headerText.logoText}
                    onChange={handlelogoTextChange}
                  />
                  <FaSave onClick={handleSave} />
                  <FaTimes onClick={handleCancel} className='mx-2' />
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