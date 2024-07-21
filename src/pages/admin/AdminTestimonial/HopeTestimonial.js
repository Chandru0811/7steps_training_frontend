import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import ajabImg from "../../../assets/Ellipse 1.jpg";
import fouziaImg from "../../../assets/Ellipse 2.jpg";
import tazeenImg from "../../../assets/Ellipse 3.jpg";
import premaImg from "../../../assets/Ellipse 4.jpg";
import sitiImg from "../../../assets/Ellipse 5.jpg";
import entrepreneurImg from "../../../assets/Ellipse 6.jpg";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { useFormik } from "formik";

function HopeTestimonial() {
  const testimonialCards = [
    {
      id: 1,
      name: "Ajab",
      testimonialTitle: "Edufam International Leadership programme",
      testimonialDescription: `Dear ma'am, your infectious energy radiated through the screen. 
      The session was extremely wonderful. Thank you so much ma'am for an amazing experience and evening.`,
      testimonialImage: ajabImg,
      testimonialDate: "Sep 2023",
    },
    {
      id: 2,
      name: "Fouzia",
      testimonialTitle: "Edufam International Leadership programme",
      testimonialDescription: `Thanks a lot Reihana Ma'am an Iron Lady for your energetic presentation. 
      All the exercises that we did, I especially enjoyed 5 self love languages and Restore your power 
      I hope in future will have more interactive sessions with you.`,
      testimonialImage: fouziaImg,
      testimonialDate: "Sep 2023",
    },
    {
      id: 3,
      name: "Tazeen Siddiq",
      testimonialTitle: "Edufam International Leadership programme",
      testimonialDescription: `Dear Reihana ma’am, it was really lovely and lively session. It showed us 
      how to be positive in which ever situation you be in and to love oneself and praise ourselves day 
      in and day out.`,
      testimonialImage: tazeenImg,
      testimonialDate: "Sep 2023",
    },
    {
      id: 4,
      name: "Ms Prema",
      testimonialTitle: "Teacher",
      testimonialDescription: `I attended the POWER of SELF workshop by Reihana. I have gained a lot of practical 
      knowledge that I can apply directly in my studies, work, health and in life. Thankyou Ms Reihana.`,
      testimonialImage: premaImg,
      testimonialDate: "Sep 2023",
    },
    {
      id: 5,
      name: "Siti Hawa",
      testimonialTitle: "Administrator",
      testimonialDescription: `Thankyou Reihana for the Mindset Transformation workshop earlier. You helped me UNLOCK 
      my Mental Blocks, recognise what’s toxic for me and the art of LETTING GO. I highly recommend this programme to 
      anyone who is seeking happiness and purpose.`,
      testimonialImage: sitiImg,
      testimonialDate: "Sep 2023",
    },
    {
      id: 6,
      name: "Ms C",
      testimonialTitle: "Entrepreneur",
      testimonialDescription: `Thank you very much for conducting the wonderful workshop on Awakening Your Power. It was 
      time well-spent for me; doing the exercises and learning coping techniques such the importance of forgiving oneself. 
      I really benefitted from the workshop.`,
      testimonialImage: entrepreneurImg,
      testimonialDate: "Sep 2023",
    },
  ];

  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditing, setIsEditing] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCardData, setNewCardData] = useState({
    name: "",
    testimonialTitle: "",
    testimonialDescription: "",
    testimonialImage: "",
    testimonialDate: "",
  });

  const formik = useFormik({
    initialValues: {
      testimonialHeading: `What our peoples are saying about her programme?`,
      testimonialSubHeading: `"We deeply value the trust and support you've shown for her program. 
    Your participation and feedback are invaluable to us, helping us improve and grow. Thank you for being a part of 
    this journey with us!"`,
      cardValues: testimonialCards,
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
          testimonialImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddModalChange = (event) => {
    const { name, value } = event.target;
    setNewCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCardData((prevData) => ({
          ...prevData,
          testimonialImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddModalSave = () => {
    const newCard = {
      ...newCardData,
      id: formik.values.cardValues.length + 1,
    };
    formik.setFieldValue("cardValues", [...formik.values.cardValues, newCard]);
    setIsAddModalOpen(false);
    setNewCardData({
      name: "",
      testimonialTitle: "",
      testimonialDescription: "",
      testimonialImage: "",
      testimonialDate: "",
    });
  };
  return (
    <div>
      <div className="container-fluid py-2 bg-white">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">Hope Testimonials</h5>
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-button btn-sm px-4 me-3"
                onClick={() => setIsAddModalOpen(true)}
              >
                Add
              </button>
              <button type="button" className="btn btn-button btn-sm px-4">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="admintestimonial">
          <div>
            <div className="testimonial pb-4">
              <div className="testimonial-heading">
                {isEditing === "testimonialHeading" ? (
                  <div>
                    <div className="d-flex">
                      <button
                        onClick={() => handleSaveClick("testimonialHeading")}
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
                      name="testimonialHeading"
                      {...formik.getFieldProps("testimonialHeading")}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => handleEditClick("testimonialHeading")}
                      className="btn btn-sm link-secondary ms-2 edit-button"
                      style={{ width: "fit-content" }}
                    >
                      <FaEdit />
                    </button>
                    <h1 className="text-center fw-bolder py-4">
                      {formik.values.testimonialHeading}
                    </h1>
                  </div>
                )}
                {isEditing === "testimonialSubHeading" ? (
                  <div>
                    <div className="d-flex">
                      <button
                        onClick={() => handleSaveClick("testimonialSubHeading")}
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
                      name="testimonialSubHeading"
                      {...formik.getFieldProps("testimonialSubHeading")}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => handleEditClick("testimonialSubHeading")}
                      className="btn btn-sm link-secondary ms-2 edit-button"
                      style={{ width: "fit-content" }}
                    >
                      <FaEdit />
                    </button>
                    <p className="text-center px-5 fs-5">
                      {formik.values.testimonialSubHeading}
                    </p>
                  </div>
                )}
              </div>
              <div className="container-fluid px-5">
                <div className="row">
                  {formik.values.cardValues.map((cardData) => (
                    <div key={cardData.id} className="col-md-4 col-12 p-3">
                      <div className="card h-100">
                        <button
                          type="button"
                          onClick={() => handleShow(cardData)}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <div className="row m-3">
                          <div className="col-3">
                            <img
                              className="rounded-circle img-fluid"
                              src={cardData.testimonialImage}
                              alt={cardData.name}
                            />
                          </div>
                          <div className="col-9">
                            <p className="text-start px-2">
                              <b>{cardData.name}</b> -{" "}
                              {cardData.testimonialTitle}
                            </p>
                            <div className="fs-6 text-start px-2">
                              <span className="text-secondary">
                                {cardData.testimonialDate}
                              </span>
                              <span className="ps-3">
                                {[...Array(5)].map((_, starIndex) => (
                                  <IoIosStar
                                    key={starIndex}
                                    className="yellow-star"
                                  />
                                ))}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-start p-3">
                          {cardData.testimonialDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Modal for editing card content */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Testimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCard && (
            <>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={selectedCard.name}
                    onChange={handleModalChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="testimonialTitle">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="testimonialTitle"
                    name="testimonialTitle"
                    value={selectedCard.testimonialTitle}
                    onChange={handleModalChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="testimonialDescription">Description</label>
                  <textarea
                    className="form-control"
                    id="testimonialDescription"
                    name="testimonialDescription"
                    value={selectedCard.testimonialDescription}
                    onChange={handleModalChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="testimonialDate">Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="testimonialDate"
                    name="testimonialDate"
                    value={selectedCard.testimonialDate}
                    onChange={handleModalChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="testimonialImage">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="testimonialImage"
                    onChange={handleImageChange}
                  />
                  {selectedCard.testimonialImage && (
                    <img
                      src={selectedCard.testimonialImage}
                      alt={selectedCard.name}
                      className="img-fluid mt-2"
                    />
                  )}
                </div>
              </form>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSaveClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for adding new card */}
      <Modal show={isAddModalOpen} onHide={() => setIsAddModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Testimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="newName">Name</label>
              <input
                type="text"
                className="form-control"
                id="newName"
                name="name"
                value={newCardData.name}
                onChange={handleAddModalChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newTitle">Title</label>
              <input
                type="text"
                className="form-control"
                id="newTitle"
                name="testimonialTitle"
                value={newCardData.testimonialTitle}
                onChange={handleAddModalChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newDescription">Description</label>
              <textarea
                className="form-control"
                id="newDescription"
                name="testimonialDescription"
                value={newCardData.testimonialDescription}
                onChange={handleAddModalChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newDate">Date</label>
              <input
                type="text"
                className="form-control"
                id="newDate"
                name="testimonialDate"
                value={newCardData.testimonialDate}
                onChange={handleAddModalChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newImage">Image</label>
              <input
                type="file"
                className="form-control"
                id="newImage"
                onChange={handleAddImageChange}
              />
              {newCardData.testimonialImage && (
                <img
                  src={newCardData.testimonialImage}
                  alt={newCardData.name}
                  className="img-fluid mt-2"
                />
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsAddModalOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddModalSave}>
            Save Testimonial
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HopeTestimonial;
