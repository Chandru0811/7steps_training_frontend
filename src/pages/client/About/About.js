import React from "react";
import "../../../styles/client.css";
import vision from "../../../assets/VISION.png";
import mission from "../../../assets/MISSION.png";
import coreValue from "../../../assets/CORE VALUES.png";
import objective from "../../../assets/OBJECTIVES.png";
import checkIcon from "../../../assets/card_check.png";
import person_1 from "../../../assets/AGORA SINGAPORE.png";
import person_2 from "../../../assets/MILLIONAIRE SPEAKERS CLUB (MSN).png";
import person_3 from "../../../assets/VISAKHA ORATORS JUNIOR (VIZAG).png";
import person_4 from "../../../assets/EDUFAM INTERNATIONAL PL.png";
import person_5 from "../../../assets/ELEFPI LEARNSCAPE.png";

function About() {
  return (
    <section>
      <div className="container-fluid">
        {/* Hero Section */}
        <div className="row mb-5">
          <div className="about-container">
            <h1>7STEPS LIFE TRANSFORMATION PTE LTD</h1>
            <p>
              A LIFE COACHING COMPANY THAT ASPIRES TO CHANGE LIVES THROUGH
              MINDSET AWAKENING AND REPROGRAMMING.
            </p>
            <p>FOUNDED BY 13 NOV 2020 / UEN 202036839N</p>
          </div>
        </div>
        {/* What we do */}
        <div className="row mb-4">
          <h2 className="text-center" style={{ textDecoration: "underline" }}>
            What We Do
          </h2>
          <p className="text-center">
            We believe that every person has a life mission to fulfill and we
            provide the intervention to guide and enable the individual to live
            his or her best potential life.
          </p>
          <p className="text-center">
            Often times as humans, we encounter challenges and life traumas and
            become stuck at our own limitations due to these experiences and
            thus we cannot move forward. Be it in business, career,
            relationships, health or finances.
          </p>
          <p className="text-center">
            At 7Steps we provide the Intervention that they need to unblock
            these obstacles so as to enable them to BREAK-FREE AND BREAKTHROUGH
            TO A LIMITLESS LIFE
          </p>
        </div>
        {/* Card Section */}
        <div className="container mb-5">
          <div className="row mb-3">
            <div className="col-md-6 col-12 px-3 mb-3">
              <div className="card about-card h-100">
                <div claaName="row">
                  <div className="d-flex align-items-center justify-content-center py-3">
                    <img
                      src={vision}
                      alt="vision"
                      className="image-fluid m-2"
                    ></img>
                    <h4 className="text-center head-color">VISION</h4>
                  </div>
                  <div className="row mx-2">
                    <div className="col-md-1 col-1">
                      <img
                        src={checkIcon}
                        alt="vision"
                        className="image-fluid"
                      ></img>
                    </div>
                    <div className="col-md-11 col-11">
                      <p>
                        An empowered world is built by individuals realizing
                        their full potential and taking proactive control of
                        their lives, fostering collective societal flourishing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 px-3 mb-3">
              <div className="card about-card h-100">
                <div claaName="row">
                  <div className="d-flex align-items-center justify-content-center py-3">
                    <img
                      src={mission}
                      alt="mission"
                      className="image-fluid m-2"
                    ></img>
                    <h4 className="text-center head-color">MISSION</h4>
                  </div>
                  <div className="row mx-2">
                    <div className="col-md-1 col-1">
                      <img
                        src={checkIcon}
                        alt="vision"
                        className="image-fluid"
                      ></img>
                    </div>
                    <div className="col-md-11 col-11">
                      <p>
                        To support every individual, child or adult,
                        irregardless of background, culture or limitations, in
                        his or her endeavour to better themselves and the world
                        through the 3 E’s - Education, Entrepreneurship and
                        Empowerment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 col-12 px-3 mb-3">
              <div className="card about-card h-100">
                <div claaName="row">
                  <div className="d-flex align-items-center justify-content-center py-3">
                    <img
                      src={coreValue}
                      alt="corevalue"
                      className="image-fluid m-2"
                    ></img>
                    <h4 className="text-center head-color">CORE VALUES</h4>
                  </div>
                  <div className="row mx-2">
                    <div className="col-md-1 col-1">
                      <img
                        src={checkIcon}
                        alt="core_values"
                        className="image-fluid"
                      ></img>
                    </div>
                    <div className="col-md-5 col-5">
                      <p>R – Raise Ourself</p>
                    </div>
                    <div className="col-md-1 col-1">
                      <img
                        src={checkIcon}
                        alt="core_values"
                        className="image-fluid"
                      ></img>
                    </div>
                    <div className="col-md-5 col-5">
                      <p>I – Inspire Others</p>
                    </div>
                  </div>
                  <div className="row mx-2">
                    <div className="col-md-1 col-1">
                      <img
                        src={checkIcon}
                        alt="core_values"
                        className="image-fluid"
                      ></img>
                    </div>
                    <div className="col-md-5 col-5">
                      <p>S – Serve Many</p>
                    </div>
                    <div className="col-md-1 col-1">
                      <img
                        src={checkIcon}
                        alt="core_values"
                        className="image-fluid"
                      ></img>
                    </div>
                    <div className="col-md-5 col-5">
                      <p>E – Empower All</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 px-3 mb-3">
              <div className="card about-card h-100">
                <div claaName="row">
                  <div className="d-flex align-items-center justify-content-center py-3">
                    <img
                      src={objective}
                      alt="objectives"
                      className="image-fluid m-2"
                    ></img>
                    <h4 className="text-center head-color">OBJECTIVES</h4>
                  </div>
                  <div className="row mx-2">
                    <div className="col-md-1 col-1">
                      <img
                        src={checkIcon}
                        alt="objectives"
                        className="image-fluid"
                      ></img>
                    </div>
                    <div className="col-md-11 col-11">
                      <p>
                        To provide a safe and supportive environment to nurture,
                        grow and learn. 
                      </p>
                    </div>
                    <div className="col-md-1 col-1">
                      <img
                        src={checkIcon}
                        alt="core_values"
                        className="image-fluid"
                      ></img>
                    </div>
                    <div className="col-md-11 col-11">
                      <p>To Inspire, Educate and Empower</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Partner */}
        <div className="container mb-5">
          <h2 className="text-center" style={{ textDecoration: "underline" }}>
            OUR PARTNERS
          </h2>
          <p className="text-center">
            Essential allies who share our vision and commitment, working
            collaboratively to drive meaningful change and achieve shared goals.
          </p>
          <div className="row">
            <div className="container d-flex flex-wrap justify-content-between">
              <div className="col-6 col-md-2">
                <div className="ourPartner">
                  <img
                    src={person_1}
                    className="img-fluid partnet-img"
                    alt="our Partner"
                  />
                </div>
                <p className="text-center">AGORA SINGAPORE</p>
              </div>
              <div className="col-6 col-md-2">
                <div className="ourPartner">
                  <img
                    src={person_2}
                    className="img-fluid partnet-img"
                    alt="our Partner"
                  />
                </div>
                <p className="text-center">MILLIONAIRE SPEAKERS CLUB (MSN)</p>
              </div>
              <div className="col-6 col-md-2">
                <div className="ourPartner">
                  <img
                    src={person_3}
                    className="img-fluid partnet-img"
                    alt="our Partner"
                  />
                </div>
                <p className="text-center">VISAKHA ORATORS JUNIOR (VIZAG)</p>
              </div>
              <div className="col-6 col-md-2">
                <div className="ourPartner">
                  <img
                    src={person_4}
                    className="img-fluid partnet-img"
                    alt="our Partner"
                  />
                </div>
                <p className="text-center">EDUFAM INTERNATIONAL P/L</p>
              </div>
              <div className="col-6 col-md-2">
                <div className="ourPartner">
                  <img
                    src={person_5}
                    className="img-fluid partnet-img"
                    alt="our Partner"
                  />
                </div>
                <p className="text-center">ELEFPI LEARNSCAPE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
