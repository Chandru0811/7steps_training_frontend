import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import award from "../../../assets/award.png";

const testimonialCards = [
  {
    id: 1,
    testimonialDescription: `TOL Effective Events Planning and Management (2023`,
    testimonialImage: award,
  },
  {
    id: 2,
    testimonialDescription: `TOL Effective Events Planning and 
    Management (2023`,
    testimonialImage: award,
  },
  {
    id: 3,

    testimonialDescription: `TOL Effective Events Planning and Management (2023`,
    testimonialImage: award,
  },
  {
    id: 4,

    testimonialDescription: `TOL Effective Events Planning and Management (2023`,
    testimonialImage: award,
  },
  {
    id: 5,
    testimonialDescription: `TOL Effective Events Planning and Management (2023`,
    testimonialImage: award,
  },
  {
    id: 6,
    testimonialDescription: `TOL Effective Events Planning and Management (2023`,
    testimonialImage: award,
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TrainingSchoolCarousel = () => {
  return (
    <>
      <div className="row">
        <h3 className="col-md-4">Training In Schools</h3>
        <div
          className="col-md-8"
          style={{ borderLeft: "4px solid #7c2c83", paddingLeft: "1rem" }}
        >
          <p className="ps-3">
            Certifications are designated credentials earned by an individual to
            verify their legitimacy and competence to perform a job. Your
            certification is typically displayed as a document stating that as a
            professional, you’ve been trained, educated, and are prepared to
            meet a specific set of criteria for your role.
          </p>
        </div>
      </div>
      <Carousel responsive={responsive}>
        {testimonialCards.map((card) => (
          <div className="d-flex m-4">
            <div class="card">
              <img
                class="card-img-top"
                src={card.testimonialImage}
                alt={`${card.name}`}
              />
              <div class="card-body">
                <p class="card-text">{card.testimonialDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default TrainingSchoolCarousel;
