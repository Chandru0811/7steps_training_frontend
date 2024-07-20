import React, { useEffect, useState } from "react";
import cardIcon1 from "../../../assets/Home-card-icon-1.jpg";
import cardIcon2 from "../../../assets/Home-card-icon-2.jpg";
import cardIcon3 from "../../../assets/Home-card-icon-3.jpg";
import cardIcon4 from "../../../assets/Home-card-icon-4.jpg";
import cardIcon5 from "../../../assets/Home-card-icon-5.jpg";
import cardIcon6 from "../../../assets/Home-card-icon-6.jpg";
import api from "../../../config/URL";
import imgUrl from "../../../config/ImgUrl";

function Hero() {
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
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("homepage");
        setData(response.data);
      } catch (error) {
        error(`Error Fetching Data: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  const heroCards = [
    {
      id: 1,
      cardIcon: cardIcon1,
      title: data.journey,
      description: data.journeydescription,
    },
    {
      id: 2,
      cardIcon: cardIcon2,
      title: data.transformation,
      description: data.transformationdescription,
    },
    {
      id: 3,
      cardIcon: cardIcon3,
      title: data.mission,
      description: data.missiondescription,
    },
    {
      id: 4,
      cardIcon: cardIcon4,
      title: data.success,
      description: data.successdescription,
    },
    {
      id: 5,
      cardIcon: cardIcon5,
      title: data.passion,
      description: data.passiondescription,
    },
    {
      id: 6,
      cardIcon: cardIcon6,
      title: data.moto,
      description: data.motodescription,
    },
  ];

  return (
    <div>
      <div className="home">
        {/* banner start*/}
        <div className="container py-5">
          <div className="row m-0">
            <div className="col-md-7 col-12">
              <div className="hero">
                <h1 className="fw-bolder">{data.title}</h1>
                <p className="text-start">{data.description}</p>
                <div className="second-heading">
                  <h3>{data.subtitle}</h3>
                  <p>{data.subdescription}</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 d-flex justify-content-center">
              <div className="hero-img px-5 py-2">
                <img
                  src={`${imgUrl}${data.image_path}`}
                  alt={data.title}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        {/* banner end*/}
        {/* cards start*/}
        <div className="container">
          <div className="row py-2">
            {heroCards.map((card) => (
              <div key={card.id} className="col-md-4 col-12 my-3">
                <div className="card hero-cards h-100">
                  <div className="border-design"></div>
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      <img src={card.cardIcon} alt="cardIcon" /> {card.title}
                    </h5>
                    <p
                      className="card-text text-start"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* cards end*/}
      </div>
    </div>
  );
}

export default Hero;
