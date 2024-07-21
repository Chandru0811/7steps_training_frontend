import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ourCardImg1 from "../../assets/Rectangle 1.jpg";
import ourCardImg2 from "../../assets/Rectangle 2.jpg";
import ourCardImg3 from "../../assets/Rectangle 3.jpg";
import ourCardImg4 from "../../assets/Rectangle 4.jpg";
import ourCardImg5 from "../../assets/Rectangle 5.jpg";
import programmesCardImg from "../../assets/Rectangle 75.jpg";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { useFormik } from "formik";

function AdminOurProgrammes() {
  const cardContent = [
    {
      id: 1,
      cardImg: ourCardImg1,
      title: "Awakening Your Power",
      description: "Mindset Transformation",
      subTitle:
        "It is a 4-hour mindset transformation workshop. It covers the following topics:",
      programmesCard: programmesCardImg,
      subContent:
        "UNLOCK your subconscious beliefs that has been ruining your life-script and sabotaging your life",
      btnTextColor: "#b7316e",
    },
    {
      id: 2,
      cardImg: ourCardImg2,
      title: "Regaining Your Power",
      description: "Self Transformation",
      subTitle:
        "It is a 4-hour mindset transformation workshop. It covers the following topics:",
      programmesCard: programmesCardImg,
      subContent:
        "UNLOCK your subconscious beliefs that has been ruining your life-script and sabotaging your life",
      btnTextColor: "#01bb00",
    },
    {
      id: 3,
      cardImg: ourCardImg3,
      title: "Living In Power",
      description: "Lifestyle Transformation",
      subTitle:
        "It is a 4-hour mindset transformation workshop. It covers the following topics:",
      programmesCard: programmesCardImg,
      subContent:
        "UNLOCK your subconscious beliefs that has been ruining your life-script and sabotaging your life",
      btnTextColor: "#ef6036",
    },
    {
      id: 4,
      cardImg: ourCardImg4,
      title: "Awaken the Entrepreneur",
      description: "Journey to Entrepreneurship",
      subTitle:
        "It is a 4-hour mindset transformation workshop. It covers the following topics:",
      programmesCard: programmesCardImg,
      subContent:
        "UNLOCK your subconscious beliefs that has been ruining your life-script and sabotaging your life",
      btnTextColor: "#019bff",
    },
    {
      id: 5,
      cardImg: ourCardImg5,
      title: "Awaken the Youth",
      description: "Youth Empowerment series (Project H.O.P.E)",
      subTitle:
        "It is a 4-hour mindset transformation workshop. It covers the following topics:",
      programmesCard: programmesCardImg,
      subContent:
        "UNLOCK your subconscious beliefs that has been ruining your life-script and sabotaging your life",
      btnTextColor: "#b7316e",
    },
  ];

  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditing, setIsEditing] = useState(null);

  const formik = useFormik({
    initialValues: {
      ourTitle: "Our Programmes",
      ourSubTitle: `We offer a series of programmes to bring you step by step from where you are to where you want to be – in the process become the ultimate version of yourself.`,
      cardValues: cardContent,
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  const handleEditClick = (field) => {
    setIsEditing(field);
  };

  const handleSaveClick = () => {
    setIsEditing(null);
    formik.handleSubmit();
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  const handleClose = () => setShow(false);

  const handleShow = (card) => {
    setSelectedCard(card);
    setShow(true);
  };

  const handleModalSaveClick = () => {
    formik.handleSubmit();
    const updatedCardValues = formik.values.cardValues.map((card) =>
      card.id === selectedCard.id ? selectedCard : card
    );
    formik.setFieldValue("cardValues", updatedCardValues);
    setShow(false);
  };

  const handleModalChange = (event) => {
    const { name, value } = event.target;
    setSelectedCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedCard((prevCard) => ({
          ...prevCard,
          cardImg: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (event) => {
    const { value } = event.target;
    setSelectedCard((prevCard) => ({
      ...prevCard,
      btnTextColor: value,
    }));
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="ourprogrammes text-center">
          <div>
            {isEditing === "ourTitle" ? (
              <div>
                <div className="d-flex">
                  <button
                    onClick={() => handleSaveClick("ourTitle")}
                    className="btn btn-sm link-primary ms-2 edit-button"
                    style={{ width: "fit-content" }}
                  >
                    <FaSave />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn btn-sm link-danger ms-2 edit-button"
                    style={{ width: "fit-content" }}
                  >
                    <FaTimes />
                  </button>
                </div>
                <input
                  type="text"
                  name="ourTitle"
                  {...formik.getFieldProps("ourTitle")}
                  onChange={formik.handleChange}
                  className="form-control"
                />
              </div>
            ) : (
              <div>
                <button
                  onClick={() => handleEditClick("ourTitle")}
                  className="btn btn-sm link-secondary ms-2 edit-button"
                  style={{ width: "fit-content" }}
                >
                  <FaEdit />
                </button>
                <h1 className="py-4">{formik.values.ourTitle}</h1>
              </div>
            )}
            {isEditing === "ourSubTitle" ? (
              <div>
                <div className="d-flex">
                  <button
                    onClick={() => handleSaveClick("ourSubTitle")}
                    className="btn btn-sm link-primary ms-2 edit-button"
                    style={{ width: "fit-content" }}
                  >
                    <FaSave />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn btn-sm link-danger ms-2 edit-button"
                    style={{ width: "fit-content" }}
                  >
                    <FaTimes />
                  </button>
                </div>
                <input
                  type="text"
                  name="ourSubTitle"
                  {...formik.getFieldProps("ourSubTitle")}
                  onChange={formik.handleChange}
                  className="form-control"
                />
              </div>
            ) : (
              <div>
                <button
                  onClick={() => handleEditClick("ourSubTitle")}
                  className="btn btn-sm link-secondary ms-2 edit-button"
                  style={{ width: "fit-content" }}
                >
                  <FaEdit />
                </button>
                <h5 className="mx-5">{formik.values.ourSubTitle}</h5>
              </div>
            )}
          </div>
          <div className="row m-0 py-5">
            {formik.values.cardValues.map((cardData) => (
              <div className="col-md-4 col-12 p-2" key={cardData.id}>
                <div
                  className="card h-100"
                  style={{
                    borderRadius: "25px",
                    textAlign: "start",
                    background: `${cardData.btnTextColor}`,
                  }}
                >
                  <div className="row">
                    <div className="col-lg-6 col-12 ps-5">
                      <div className="py-4">
                        <button
                          type="button"
                          onClick={() => handleShow(cardData)}
                          className="btn link-light ms-2"
                          style={{
                            width: "fit-content",
                            height: "fit-content",
                          }}
                        >
                          <FaEdit />
                        </button>
                        <h4 className="text-light">{cardData.title}</h4>
                        <p className="text-light">{cardData.description}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <img
                        src={cardData.cardImg}
                        alt="cardImg"
                        className="img-fluid w-100 cardImage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex justify-content-between align-items-center">
              <div className="me-5">
                <h4>Edit Our Programmes</h4>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div
          style={{
            height: "1px",
            backgroundColor: "#000",
            margin: "0 10px",
          }}
        />
        <Modal.Body className="p-4">
          <div className="p-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={selectedCard ? selectedCard.title : ""}
              onChange={handleModalChange}
              className="form-control"
            />
          </div>
          <div className="p-2">
            <label htmlFor="subTitle">Sub Title</label>
            <p>
              <b>
                <input
                  type="text"
                  name="subTitle"
                  value={selectedCard ? selectedCard.subTitle : ""}
                  onChange={handleModalChange}
                  className="form-control"
                />
              </b>
            </p>
          </div>
          <div className="p-2">
            <label htmlFor="subContent">Sub Content</label>
            <textarea
              name="subContent"
              value={selectedCard ? selectedCard.subContent : ""}
              onChange={handleModalChange}
              className="form-control mb-3"
            />
          </div>
          <div className="p-2">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="programmesCard"
              onChange={handleImageChange}
              className="form-control my-2"
            />
          </div>
          <div className="p-2">
            <label htmlFor="btnTextColor">Button Text Color</label>
            <div className="d-flex align-items-center">
              <input
                type="color"
                name="btnTextColor"
                value={selectedCard ? selectedCard.btnTextColor : ""}
                onChange={handleColorChange}
                className="form-control"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <input
                type="text"
                name="btnTextColor"
                value={selectedCard ? selectedCard.btnTextColor : ""}
                onChange={handleModalChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <span>
              <button
                className="btn btn-primary btn-sm"
                onClick={handleModalSaveClick}
              >
                Save
              </button>
            </span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdminOurProgrammes;
