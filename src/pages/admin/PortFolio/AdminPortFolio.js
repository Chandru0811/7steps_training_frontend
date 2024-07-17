import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import bgImg from "../../../assets/portfolio_background.png";
import heroImg from "../../../assets/portfolioImg-removebg-preview.png";
import coach from "../../../assets/coach.png";
import speaker from "../../../assets/speaker.png";
import life from "../../../assets/life.png";
import trainer from "../../../assets/trainer.png";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import AdminPortFolioBottom from "./AdminPortFolioBottom";
import AdminPortFolioCarousel from "./AdminPortFolioCarousel";

const initialValues = {
  heading: "Who is Reihana Abdullah?",
  subheading: "TRAINER",
  coach: "COACH",
  speaker: "SPEAKER",
  coachText:
    "Reihana Abdullah is a revolutionary Mindset Intervention Coach. She guides individuals in breaking free of sabotaging beliefs, negative programming and past traumas to creating breakthroughs in any area of their life.\n\nHaving broken free and broken-through from her own mindset, she challenges you to a 7 Minutes Breakthrough and guarantees improvements in no more than 5 sessions by discovering a person's blind spots and providing structured methods to stay on course.",
  trainerText:
    "She has helped more than 12,000 young students, professionals, matured adults across Asia, Europe, and USA through her Life skills training programmes for students and proven Mindset Re-training programmes, customized for every single individual's needs.\n\nHer dynamic and interactive training style makes her workshop highly engaging and raved about.",
  speakerText:
    "She is constantly invited to speak online at International platforms, such as World Speech Day and International Women's Day and participates in forums, panel discussions, emceeing, talk shows (Kapil show/Syncflow/Birth Discovery), and podcasts.\n\nShe also mentors young students in public speaking and reading programs.\n\nShe is also an active member of AGORA SINGAPORE SPEAKERS CLUB where she serves in various different roles as a speaker, host, and evaluator.",
  lifeMissionText:
    "She is a strong advocate for education and uplifting of communities through entrepreneurship and empowerment. Her philosophy is to RISE: Raise ourselves, Inspire others, Serve many, and Empower all.\n\nShe considers herself a progress-tivist, an activist always on the path leading herself and others to progress in life.",
};

const AdminPortFolio = () => {
  const [editingField, setEditingField] = useState(null);

  const handleEdit = (field) => {
    setEditingField(field);
  };

  const cancelEdit = () => {
    setEditingField(null);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("Form values:", values);
          setEditingField(null);
        }}
      >
        {({ values, handleSubmit }) => (
          <Form>
            <div
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                minHeight: "85vh",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center mt-4">
                {editingField === "heading" ? (
                  <>
                    <Field
                      type="text"
                      name="heading"
                      className="form-control mb-3"
                    />
                    <button
                      type="button"
                      className="btn btn-sm ms-2"
                      onClick={handleSubmit}
                    >
                      <FaSave />
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm ms-2"
                      onClick={cancelEdit}
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-dark">{values.heading}</h2>
                    <button
                      type="button"
                      className="btn btn-sm ms-2 edit-container"
                      onClick={() => handleEdit("heading")}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
              </div>
              <div className="text-center mt-4">
                {editingField === "subheading" ? (
                  <>
                    <Field
                      type="text"
                      name="subheading"
                      className="form-control mb-3"
                    />
                    <button
                      type="button"
                      className="btn btn-sm ms-2"
                      onClick={handleSubmit}
                    >
                      <FaSave />
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm ms-2"
                      onClick={cancelEdit}
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="custom-badge">{values.subheading}</span>
                    <button
                      type="button"
                      className="btn btn-sm ms-2 edit-container"
                      onClick={() => handleEdit("subheading")}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
              </div>
              <div className="text-center mt-4">
                <div
                  className="d-flex justify-content-around mt-3"
                  // style={{ gap: "20rem", marginTop: "5rem" }}
                >
                  <span className="d-flex align-items-center">
                  {editingField === "coach" ? (
                  <>
                    <Field
                      type="text"
                      name="coach"
                      className="form-control mb-3"
                    />
                    <button
                      type="button"
                      className="btn btn-sm ms-2"
                      onClick={handleSubmit}
                    >
                      <FaSave />
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm ms-2"
                      onClick={cancelEdit}
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="custom-badge">{values.coach}</span>
                    <button
                      type="button"
                      className="btn btn-sm ms-2 edit-container"
                      onClick={() => handleEdit("coach")}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
                  </span>
                  <span className="d-flex align-items-center">
                  {editingField === "speaker" ? (
                  <>
                    <Field
                      type="text"
                      name="speaker"
                      className="form-control mb-3"
                    />
                    <button
                      type="button"
                      className="btn btn-sm ms-2"
                      onClick={handleSubmit}
                    >
                      <FaSave />
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm ms-2"
                      onClick={cancelEdit}
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="custom-badge">{values.speaker}</span>
                    <button
                      type="button"
                      className="btn btn-sm ms-2 edit-container"
                      onClick={() => handleEdit("speaker")}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
                  </span>
                </div>
                <div className="imageContainer">
                  <img
                    src={heroImg}
                    alt="heroImg"
                    className="img-fluid portfolio_img"
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row portyellow">
                <div className="col-md-6 p-3">
                  <div className="card align-items-center p-3 h-100">
                    <div className="d-flex gap-1">
                      <img src={coach} alt="coach" className="img-fluid" />
                      <h2 className="text-dark border-bottom">COACH</h2>
                    </div>
                    {editingField === "coachText" ? (
                      <>
                        <Field
                          as="textarea"
                          name="coachText"
                          className="form-control mb-3"
                          rows="5"
                        />
                        <button
                          type="button"
                          className="btn btn-sm ms-2"
                          onClick={handleSubmit}
                        >
                          <FaSave />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm ms-2"
                          onClick={cancelEdit}
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="preserve-whitespace">
                          {values.coachText}
                        </p>
                        <button
                          type="button"
                          className="btn btn-sm ms-2 edit-container"
                          onClick={() => handleEdit("coachText")}
                        >
                          <FaEdit />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="col-md-6 p-3">
                  <div className="card align-items-center p-3 h-100">
                    <div className="d-flex gap-1">
                      <img
                        src={trainer}
                        alt="trainer"
                        className="img-fluid w-25"
                      />
                      <h2 className="text-dark border-bottom">TRAINER</h2>
                    </div>
                    {editingField === "trainerText" ? (
                      <>
                        <Field
                          as="textarea"
                          name="trainerText"
                          className="form-control mb-3"
                          rows="5"
                        />
                        <button
                          type="button"
                          className="btn btn-sm ms-2"
                          onClick={handleSubmit}
                        >
                          <FaSave />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm ms-2"
                          onClick={cancelEdit}
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="preserve-whitespace">
                          {values.trainerText}
                        </p>
                        <button
                          type="button"
                          className="btn btn-sm ms-2 edit-container"
                          onClick={() => handleEdit("trainerText")}
                        >
                          <FaEdit />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="col-md-6 p-3 mt-4">
                  <div className="card align-items-center p-3 h-100">
                    <div className="d-flex gap-1">
                      <img
                        src={speaker}
                        alt="speaker"
                        className="img-fluid w-25"
                      />
                      <h2 className="text-dark border-bottom">SPEAKER</h2>
                    </div>
                    {editingField === "speakerText" ? (
                      <>
                        <Field
                          as="textarea"
                          name="speakerText"
                          className="form-control mb-3"
                          rows="5"
                        />
                        <button
                          type="button"
                          className="btn btn-sm ms-2"
                          onClick={handleSubmit}
                        >
                          <FaSave />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm ms-2"
                          onClick={cancelEdit}
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="preserve-whitespace">
                          {values.speakerText}
                        </p>
                        <button
                          type="button"
                          className="btn btn-sm ms-2 edit-container"
                          onClick={() => handleEdit("speakerText")}
                        >
                          <FaEdit />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="col-md-6 p-3 mt-4">
                  <div className="card align-items-center p-3 h-100">
                    <div className="d-flex gap-1">
                      <img src={life} alt="life" className="img-fluid w-25" />
                      <h2 className="text-dark border-bottom">LIFE MISSION</h2>
                    </div>
                    {editingField === "lifeMissionText" ? (
                      <>
                        <Field
                          as="textarea"
                          name="lifeMissionText"
                          className="form-control mb-3"
                          rows="5"
                        />
                        <button
                          type="button"
                          className="btn btn-sm ms-2"
                          onClick={handleSubmit}
                        >
                          <FaSave />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm ms-2"
                          onClick={cancelEdit}
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="preserve-whitespace">
                          {values.lifeMissionText}
                        </p>
                        <button
                          type="button"
                          className="btn btn-sm ms-2 edit-container"
                          onClick={() => handleEdit("lifeMissionText")}
                        >
                          <FaEdit />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <AdminPortFolioCarousel />
            <AdminPortFolioBottom />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminPortFolio;
