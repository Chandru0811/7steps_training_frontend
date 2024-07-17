import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ourCardImg1 from "../../assets/Rectangle 1.jpg";
import ourCardImg2 from "../../assets/Rectangle 2.jpg";
import ourCardImg3 from "../../assets/Rectangle 3.jpg";
import ourCardImg4 from "../../assets/Rectangle 4.jpg";
import ourCardImg5 from "../../assets/Rectangle 5.jpg";
import programmesCardImg from "../../assets/Rectangle 75.jpg";
import { ImCheckmark } from "react-icons/im";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

function AdminOurProgrammes() {
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [data, setData] = useState({
    ourTitle: "Our Programmes",
    ourSubTitle: `We offer a series of programmes to bring you step by step from
              where you are to where you want to be – in the process become the
              ultimate version of yourself.`,
  });
  const [isEditing, setIsEditing] = useState(null);
  const [newData, setNewData] = useState(data);
  const [newModalData, setNewModalData] = useState({});

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = () => setShow(false);

  const handleShow = (card) => {
    setSelectedCard(card);
    setNewModalData(card);
    setShow(true);
  };

  const handleModalSaveClick = () => {
    setShow(false);
    const updatedCardDatas = CardDatas.map((card) =>
      card.id === newModalData.id ? newModalData : card
    );
    setSelectedCard(newModalData);
    setCardDatas(updatedCardDatas);
  };

  const handleModalChange = (event) => {
    const { name, value } = event.target;
    setNewModalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewModalData((prevData) => ({
          ...prevData,
          cardImg: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const [CardDatas, setCardDatas] = useState([
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
  ]);

  return (
    <div>
      <div>
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
                    className="btn btn-sm link-danger  ms-2 edit-button"
                    style={{ width: "fit-content" }}
                  >
                    <FaTimes />
                  </button>
                </div>
                <input
                  type="text"
                  name="ourTitle"
                  value={newData.ourTitle}
                  onChange={handleChange}
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
                <h1 className="py-4">{data.ourTitle}</h1>
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
                    className="btn btn-sm link-danger  ms-2 edit-button"
                    style={{ width: "fit-content" }}
                  >
                    <FaTimes />
                  </button>
                </div>
                <input
                  type="text"
                  name="ourSubTitle"
                  value={newData.ourSubTitle}
                  onChange={handleChange}
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
                <h5 className="mx-5">{data.ourSubTitle}</h5>
              </div>
            )}
          </div>
          <div className="row m-0 py-5">
            {CardDatas.map((cardData) => (
              <div className="col-md-4 col-12 p-3" key={cardData.id}>
                <div
                  className="card h-100 ps-3"
                  style={{
                    borderRadius: "25px",
                    textAlign: "start",
                    background: `${cardData.btnTextColor}`,
                  }}
                >
                  <div className="row">
                    <div className="col-6">
                      <div className="py-4">
                        <button
                          onClick={() => handleShow(cardData)}
                          className="btn link-light ms-2"
                          style={{
                            width: "fit-content",
                            height: "fit-content",
                          }}
                        >
                          <FaEdit />
                        </button>
                        <h3 className="text-light">{cardData.title}</h3>
                        <p className="text-light">{cardData.description}</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <img
                        src={cardData.cardImg}
                        alt="cardImg"
                        className="img-fluid"
                        style={{ borderRadius: "0 25px 25px 0 " }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              <div className="d-flex align-items-center justify-content-between">
                <div className="me-5">
                  <h4>Edit Our Programmes </h4>
                </div>
                <div className="d-flex px-5">
                  <button
                    className="btn btn-sm link-primary"
                    onClick={handleModalSaveClick}
                  >
                    <FaSave />
                  </button>
                  <button
                    className="btn btn-sm link-danger"
                    onClick={handleClose}
                  >
                    <FaTimes />
                  </button>
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
              <label htmlFor="title">Title </label>
              <input
                type="text"
                name="title"
                value={newModalData.title}
                onChange={handleModalChange}
                className="form-control"
              />
            </div>
            <div className="p-2">
              <label htmlFor="subTitle">Sub Title </label>
              <p>
                <b>
                  <input
                    type="text"
                    name="subTitle"
                    value={newModalData.subTitle}
                    onChange={handleModalChange}
                    className="form-control"
                  />
                </b>
              </p>
            </div>
            <div className="p-2">
              <label htmlFor="subContent">Sub Content </label>
              <textarea
                name="subContent"
                value={newModalData.subContent}
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
              {/* <img
                src={newModalData.cardImg}
                alt="Programmes Card"
                className="img-fluid mb-2"
                style={{
                  borderRight: "8px solid rgba(246, 192, 11, 0.4)",
                  borderBottom: "8px solid rgba(246, 192, 11, 0.4)",
                  borderRadius: "28px",
                }}
              /> */}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default AdminOurProgrammes;
