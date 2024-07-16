import React, { useState } from "react";
import bgImg from "../../../assets/portfolio_background.png";
import heroImg from "../../../assets/portfolioImg-removebg-preview.png";
import coach from "../../../assets/coach.png";
import speaker from "../../../assets/speaker.png";
import life from "../../../assets/life.png";
import trainer from "../../../assets/trainer.png";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import AdminPortFolioBoottom from "./AdminPortFolioBottom";
import AdminPortFolioCarousel from "./AdminPortFolioCarousel";

export default function AdminPortFolio() {
  const [activeTab, setActiveTab] = useState("profile");
  const [editingField, setEditingField] = useState(null);
  const [content, setContent] = useState({
    heading: "Who is Reihana Abdullah?",
    subheading: "TRAINER",
    coachText: `Reihana Abdullah is a revolutionary Mindset Intervention Coach. She guides 
individuals in breaking free of sabotaging beliefs, negative programming and past 
traumas to creating breakthroughs in any area of their life.


Having broken free and broken-through from her own mindset, she challenges you 
to a 7 Minutes Breakthrough and guarantees improvements in no more than 5 
sessions by discovering a persons blind spots and providing structured methods to 
stay on course.`,
    trainerText: `She has helped more than 12 000 young students, professionals, matured adults 
across Asia, Europe and USA through her Life skills training programmes for 
students and proven Mindset Re-training programmes, customised for every single 
individual s needs.


Her dynamic and interactive training style makes her workshop highly engaging 
and raved about`,
    speakerText:
      `She is constantly invited to speak online at International platforms, such as World 
Speech Day and International Womens Day and participates in forums, panel 
discussions, emceeing, talks shows (Kapil show/Syncflow/Birth Discovery) and 
podcasts. 


She also mentors young students in public speaking and reading programmes.


She is also an active member of AGORA SINGAPORE SPEAKERS CLUB where she 
serves in various different roles as speaker, host and evaluator`,
    lifeMissionText:
      `She is a strong advocate for education and uplifting of communities through 
entrepreneurship and empowerment. Her philosophy is to RISE Raise ourselves, 
Inspire others, Serve many and Empower all. 


She considers herself a progress-tivist, an activist always on the path leading 
herself and others to progress in life`,
  });

  const handleEdit = (field) => {
    setEditingField(field);
  };

  const handleChange = (field, value) => {
    setContent({
      ...content,
      [field]: value,
    });
  };

  const saveContent = () => {
    setEditingField(null);
    // Optionally, save to server or local storage here
  };

  const cancelEdit = () => {
    setEditingField(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
      case "profile":
      case "longer-tab":
      case "new-tab":
        return <AdminPortFolioCarousel />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          minHeight: "85vh",
          backgroundPosition: "center",
        }}
      >
        {editingField === "heading" ? (
          <>
            <input
              type="text"
              value={content.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              className="form-control mb-3"
            />
            <button
              className="btn btn-sm  ms-2"
              onClick={saveContent}
            >
              <FaSave />
            </button>
            <button
              className="btn btn-sm  ms-2"
              onClick={cancelEdit}
            >
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            <h2 className="text-dark d-flex justify-content-center">
              {content.heading}
            </h2>
            <button
              className="btn btn-sm  ms-2 edit-container"
              onClick={() => handleEdit("heading")}
            >
              <FaEdit />
            </button>
          </>
        )}
        <p className="d-flex justify-content-center">
          {editingField === "subheading" ? (
            <>
              <input
                type="text"
                value={content.subheading}
                onChange={(e) => handleChange("subheading", e.target.value)}
                className="form-control mb-3"
              />
              <button
                className="btn btn-sm btn-outline-primary border ms-2"
                onClick={saveContent}
              >
                <FaSave />
              </button>
              <button
                className="btn btn-sm btn-outline-primary border ms-2"
                onClick={cancelEdit}
              >
                <FaTimes />
              </button>
            </>
          ) : (
            <>
              <span className="custom-badge">{content.subheading}</span>
              <button
                className="btn btn-sm btn-outline-warning border ms-2 edit-container"
                onClick={() => handleEdit("subheading")}
              >
                <FaEdit />
              </button>
            </>
          )}
        </p>
        <div
          className="d-flex justify-content-center"
          style={{ gap: "20rem", marginTop: "5rem" }}
        >
          <span className="custom-badge">COACH</span>
          <span className="custom-badge">SPEAKER</span>
        </div>
        <div className="imageContainer">
          <img
            src={heroImg}
            alt="heroImg"
            className="img-fluid portfolio_img"
          />
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
              <p className="preserve-whitespace">
                {editingField === "coachText" ? (
                  <>
                    <textarea
                      value={content.coachText}
                      onChange={(e) =>
                        handleChange("coachText", e.target.value)
                      }
                      className="form-control mb-3"
                      rows="5"
                    />
                    <button
                      className="btn btn-sm btn-outline-primary border ms-2"
                      onClick={saveContent}
                    >
                      <FaSave />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-primary border ms-2"
                      onClick={cancelEdit}
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    {content.coachText}
                    <button
                      className="btn btn-sm btn-outline-warning border ms-2 edit-container"
                      onClick={() => handleEdit("coachText")}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="col-md-6 p-3">
            <div className="card align-items-center p-3 h-100">
              <div className="d-flex gap-1">
                <img src={trainer} alt="trainer" className="img-fluid w-25" />
                <h2 className="text-dark border-bottom">TRAINER</h2>
              </div>
              <p className="preserve-whitespace">
                {editingField === "trainerText" ? (
                  <>
                    <textarea
                      value={content.trainerText}
                      onChange={(e) =>
                        handleChange("trainerText", e.target.value)
                      }
                      className="form-control mb-3"
                      rows="5"
                    />
                    <button
                      className="btn btn-sm btn-outline-primary border ms-2"
                      onClick={saveContent}
                    >
                      <FaSave />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-primary border ms-2"
                      onClick={cancelEdit}
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    {content.trainerText}
                    <button
                      className="btn btn-sm btn-outline-warning border ms-2 edit-container"
                      onClick={() => handleEdit("trainerText")}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="col-md-6 p-3 mt-4">
            <div className="card align-items-center p-3 h-100">
              <div className="d-flex gap-1">
                <img src={speaker} alt="speaker" className="img-fluid w-25" />
                <h2 className="text-dark border-bottom">SPEAKER</h2>
              </div>
              <p className="preserve-whitespace">
                {editingField === "speakerText" ? (
                  <>
                    <textarea
                      value={content.speakerText}
                      onChange={(e) =>
                        handleChange("speakerText", e.target.value)
                      }
                      className="form-control mb-3"
                      rows="5"
                    />
                    <button
                      className="btn btn-sm btn-outline-primary border ms-2"
                      onClick={saveContent}
                    >
                      <FaSave />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-primary border ms-2"
                      onClick={cancelEdit}
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    {content.speakerText}
                    <button
                      className="btn btn-sm btn-outline-warning border ms-2 edit-container"
                      onClick={() => handleEdit("speakerText")}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="col-md-6 p-3 mt-4">
            <div className="card align-items-center p-3 h-100">
              <div className="d-flex gap-1">
                <img src={life} alt="life" className="img-fluid w-25" />
                <h2 className="text-dark border-bottom">LIFE MISSION</h2>
              </div>
              <p className="preserve-whitespace">
                {editingField === "lifeMissionText" ? (
                  <>
                    <textarea
                      value={content.lifeMissionText}
                      onChange={(e) =>
                        handleChange("lifeMissionText", e.target.value)
                      }
                      className="form-control mb-3"
                      rows="5"
                    />
                    <button
                      className="btn btn-sm btn-outline-primary border ms-2"
                      onClick={saveContent}
                    >
                      <FaSave />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-primary border ms-2"
                      onClick={cancelEdit}
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    {content.lifeMissionText}
                    <button
                      className="btn btn-sm btn-outline-warning border ms-2 edit-container"
                      onClick={() => handleEdit("lifeMissionText")}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      {renderContent()}
      <AdminPortFolioBoottom />
    </div>
  );
}
