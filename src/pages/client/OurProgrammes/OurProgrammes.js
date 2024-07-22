import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ourCardImg1 from "../../../assets/Rectangle 1.jpg";
import ourCardImg2 from "../../../assets/Rectangle 2.jpg";
import ourCardImg3 from "../../../assets/Rectangle 3.jpg";
import ourCardImg4 from "../../../assets/Rectangle 4.jpg";
import ourCardImg5 from "../../../assets/Rectangle 5.jpg";
import programmesCardImg from "../../../assets/Rectangle 75.jpg";
import { ImCheckmark } from "react-icons/im";
import Testimonial from "../Home/Testimonial";

function OurProgrammes() {
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (card) => {
    setSelectedCard(card);
    setShow(true);
  };

  const CardDatas = [
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

  return (
    <div>
      <div className="ourprogrammes text-center">
        <div>
          <h1 className="py-4">Our Programmes</h1>
          <h5 className="mx-5">
            We offer a series of programmes to bring you step by step from where
            you are to where you want to be – in the process become the ultimate
            version of yourself.
          </h5>
        </div>
        <div className="row m-0 px-3 px-md-5">
          {CardDatas.map((cardData) => (
            <div className="col-12 col-md-6 col-lg-4 p-3" key={cardData.id}>
              <div
                className="card h-100"
                style={{
                  borderRadius: "25px",
                  textAlign: "start",
                  background: cardData.btnTextColor,
                }}
              >
                <div className="row no-gutters">
                  <div className="col-12 col-md-6">
                    <div className="p-2">
                      <h4 className="text-light">{cardData.title}</h4>
                      <p className="text-light">{cardData.description}</p>
                      <button
                        style={{
                          borderRadius: "25px",
                          border: "none",
                          background: "white",
                          color: cardData.btnTextColor,
                        }}
                        className="btn btn-sm"
                        onClick={() => handleShow(cardData)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <img
                      src={cardData.cardImg}
                      alt="cardImg"
                      className="img-fluid cardImage"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Testimonial />
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard?.title}</Modal.Title>
        </Modal.Header>
        <div
          style={{
            height: "1px",
            backgroundColor: "#000",
            margin: "0 10px",
          }}
        />
        <Modal.Body className="p-4">
          <p>
            <b>{selectedCard?.subTitle}</b>
          </p>
          <div className="row">
            <div className="col-6 p-2">
              <div className="row">
                <div className="col-1">
                  <ImCheckmark className="link-danger" />
                </div>
                <div className="col-11">
                  <p>{selectedCard?.subContent}</p>
                </div>
              </div>
            </div>
            <div className="col-6 p-2">
              <img
                src={selectedCard?.programmesCard}
                alt="Programmes Card"
                className="img-fluid"
                style={{
                  borderRight: "8px solid rgba(246, 192, 11, 0.4)",
                  borderBottom: "8px solid rgba(246, 192, 11, 0.4)",
                  borderRadius: "28px",
                }}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default OurProgrammes;
