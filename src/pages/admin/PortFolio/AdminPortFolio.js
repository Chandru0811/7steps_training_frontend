import React, { useState } from "react";
import bgImg from "../../../assets/portfolio_background.png";
import heroImg from "../../../assets/portfolioImg-removebg-preview.png";
import coach from "../../../assets/coach.png";
import speaker from "../../../assets/speaker.png";
import life from "../../../assets/life.png";
import trainer from "../../../assets/trainer.png";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";

export default function AdminPortFolio() {
  const initialSections = [
    {
      id: "coach",
      image: coach,
      title: "COACH",
      content: `Reihana Abdullah is a revolutionary Mindset Intervention Coach. She guides individuals in breaking free of sabotaging beliefs, negative programming and past traumas to creating breakthroughs in any area of their life.

Having broken-free and broken-through from her own mindset, she challenges you to a 7-Minutes Breakthrough and guarantees improvements in no more than 5 sessions by discovering a person’s blind spots and providing structured methods to stay on course.
`,
    },
    {
      id: "trainer",
      image: trainer,
      title: "TRAINER",
      content: `She has helped more than 12 000 young students, professionals, matured adults across Asia, Europe and USA through her Life-skills training programmes for students and proven Mindset Re-training programmes, customised for every single individual’s needs.

Her dynamic and interactive training style makes her workshop highly engaging and raved about.
`,
    },
    {
      id: "speaker",
      image: speaker,
      title: "SPEAKER",
      content: `She is constantly invited to speak online at International platforms, such as World Speech Day and International Women’s Day and participates in forums, panel discussions, emceeing, talks shows (Kapil show/Syncflow/Birth Discovery) and podcasts. 

She also mentors’ young students in public speaking and reading programmes.

She is also an active member of AGORA SINGAPORE SPEAKERS CLUB where she serves in various different roles – as speaker, host and evaluator.
`,
    },
    {
      id: "lifeMission",
      image: life,
      title: "LIFE MISSION",
      content: `She is a strong advocate for education and uplifting of communities through entrepreneurship and empowerment. Her philosophy is to RISE – Raise ourselves, Inspire others, Serve many and Empower all. 

She considers herself a progress-tivist, an activist always on the path leading herself and others to progress in life.
`,
    },
  ];

  const initialContent = {
    heading: "Who is Reihana Abdullah?",
    subheading: "TRAINER",
    coach: "COACH",
    speaker: "SPEAKER",
    heroImg: heroImg,
    coachText: initialSections.find((section) => section.id === "coach")
      .content,
    trainerText: initialSections.find((section) => section.id === "trainer")
      .content,
    speakerText: initialSections.find((section) => section.id === "speaker")
      .content,
    lifeMissionText: initialSections.find(
      (section) => section.id === "lifeMission"
    ).content,
  };
  const [sections, setSections] = useState(initialSections);
  const [content, setContent] = useState(initialContent);
  const [editingField, setEditingField] = useState(null);
  const [tempSection, setTempSection] = useState(null);
  const [editingSection, setEditingSection] = useState(null);

  const formik = useFormik({
    initialValues: {
      heading: content.heading,
      subheading: content.subheading,
      coach: content.coach,
      speaker: content.speaker,
      heroImg: content.heroImg,
      coachText: content.coachText,
      trainerText: content.trainerText,
      speakerText: content.speakerText,
      lifeMissionText: content.lifeMissionText,
      sections: initialSections,
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      // if (values.heroImg instanceof File) {
      //   formData.append('heroImg', values.heroImg);
      // } else {
      //   formData.append('heroImgUrl', values.heroImg);
      // }
      // formData.append('heading', values.heading);
      // formData.append('subheading', values.subheading);
      // formData.append('coach', values.coach);
      // formData.append('speaker', values.speaker);
      // formData.append('coachText', values.coachText);
      // formData.append('trainerText', values.trainerText);
      // formData.append('speakerText', values.speakerText);
      // formData.append('lifeMissionText', values.lifeMissionText);
      //   values.sections.forEach((section, index) => {
      //   formData.append(`sections[${index}][id]`, section.id);
      //   formData.append(`sections[${index}][image]`, section.image);
      //   formData.append(`sections[${index}][title]`, section.title);
      //   formData.append(`sections[${index}][content]`, section.content);
      // });

      for (let pair of formData.entries()) {
        if (pair[1] instanceof File) {
          console.log(pair[0] + ": " + pair[1].name); // Log file name
        } else {
          console.log(pair[0] + ": " + pair[1]);
        }
      }

      // try {
      //   const response = await api.put(
      //     `/updateHomeSaveWithProfileImages`,
      //     formData,
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //     }
      //   );

      //   if (response.status === 201) {
      //     toast.success(response.data.message);
      //     getData();
      //   } else {
      //     toast.error(response.data.message);
      //   }
      // } catch (error) {
      //   console.error("Error saving data:", error.message);
      // }
    },
  });

  const toggleEdit = (field) => {
    setEditingField(field);
  };
  const saveContent = async (field) => {
    setEditingField(null);
    const formData = new FormData();
    formData.append(field, formik.values[field]);
  };

  const cancelEdit = () => {
    setContent(initialContent);
    setEditingField(null);
    setEditingSection(null);
  };

  const handleEdit = (section) => {
    setEditingSection(section);
    setTempSection({ ...section }); // Create a copy of the section for temporary changes
  };

  const handleSectionChange = (e) => {
    const { name, value } = e.target;
    setTempSection((prevTempSection) => ({
      ...prevTempSection,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setTempSection((prevTempSection) => ({
        ...prevTempSection,
        image: reader.result,
      }));
    };
  };
  const saveSectionContent = () => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === tempSection.id ? tempSection : section
      )
    );

    formik.setFieldValue(
      "sections",
      sections.map((section) =>
        section.id === tempSection.id ? tempSection : section
      )
    );

    setEditingSection(null);
    setTempSection(null);
  };

  return (
    <div>
      <div className="container-fluid py-2 bg-white">
                    <div className="row">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold">Portfolio</h5>
                            <div>
                                <button type="button" className="btn btn-button btn-sm px-4 py-2">
                                    Publish
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          minHeight: "85vh",
          backgroundPosition: "center",
        }} className="pt-3"
      >
        {editingField === "heading" ? (
          <>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                name="heading"
                {...formik.getFieldProps("heading")}
                className="form-control form-control-sm mb-3 w-25"
              />
              <button
                className="btn btn-sm link-primary mb-3"
                onClick={() => saveContent("heading")}
              >
                <FaSave />
              </button>
              <button
                className="btn btn-sm link-danger mb-3"
                onClick={cancelEdit}
              >
                <FaTimes />
              </button>
            </div>
          </>
        ) : (
          <div className="d-flex justify-content-center">
            <h2 className="text-dark ">{formik.values.heading}</h2>
            <button
              className="btn btn-sm link-secondary mb-2"
              onClick={() => toggleEdit("heading")}
            >
              <FaEdit />
            </button>
          </div>
        )}

        {editingField === "subheading" ? (
          <div className="d-flex justify-content-center">
            <input
              type="text"
              name="subheading"
              {...formik.getFieldProps("subheading")}
              className="form-control form-control-sm mb-3 w-25"
            />

            <button
              className="btn btn-sm link-primary mb-3"
              onClick={() => saveContent("subheading")}
            >
              <FaSave />
            </button>
            <button
              className="btn btn-sm link-danger mb-3"
              onClick={cancelEdit}
            >
              <FaTimes />
            </button>
          </div>
        ) : (
          <div className=" d-flex justify-content-center">
            <span className="custom-badge">{formik.values.subheading}</span>
            <button
              className="btn btn-sm link-secondary"
              onClick={() => toggleEdit("subheading")}
            >
              <FaEdit />
            </button>
          </div>
        )}

        <div
          className="d-flex justify-content-around mt-3"
          // style={{ gap: "20rem", marginTop: "5rem" }}
        >
          <span className="d-flex align-items-center">
            {editingField === "coach" ? (
              <>
                <input
                  type="text"
                  name="coach"
                  {...formik.getFieldProps("coach")}
                  className="form-control mb-3"
                />
                <button
                  className="btn btn-sm link-primary mb-3"
                  onClick={() => saveContent("coach")}
                >
                  <FaSave />
                </button>
                <button
                  className="btn btn-sm link-danger mb-3"
                  onClick={cancelEdit}
                >
                  <FaTimes />
                </button>
              </>
            ) : (
              <>
                <span className="custom-badge">{formik.values.coach}</span>
                <button
                  className="btn btn-sm link-secondary"
                  onClick={() => toggleEdit("coach")}
                >
                  <FaEdit />
                </button>
              </>
            )}
          </span>
          <span className="d-flex align-items-center">
            {editingField === "speaker" ? (
              <>
                <input
                  type="text"
                  name="speaker"
                  {...formik.getFieldProps("speaker")}
                  className="form-control mb-3"
                />
                <button
                  className="btn btn-sm link-primary mb-3"
                  onClick={() => saveContent("speaker")}
                >
                  <FaSave />
                </button>
                <button
                  className="btn btn-sn link-danger mb-3"
                  onClick={cancelEdit}
                >
                  <FaTimes />
                </button>
              </>
            ) : (
              <>
                <span className="custom-badge">{formik.values.speaker}</span>
                <button
                  className="btn btn-sm link-secondary"
                  onClick={() => toggleEdit("speaker")}
                >
                  <FaEdit />
                </button>
              </>
            )}
          </span>
        </div>

        <div className="imageContainer">
          <img
            src={
              typeof formik.values.heroImg === "string"
                ? formik.values.heroImg
                : URL.createObjectURL(formik.values.heroImg)
            }
            alt="heroImg"
            className="img-fluid portfolio_img mb-2"
          />
        </div>

        {editingField === "heroImg" ? (
          <div className="d-flex justify-content-center mt-2">
            <input
              type="file"
              name="heroImg"
              onChange={(e) =>
                formik.setFieldValue("heroImg", e.target.files[0])
              }
              className="form-control form-control-sm  w-25"
            />

            <button
              className="btn btn-sm link-primary ms-2"
              onClick={() => saveContent("heroImg")}
            >
              <FaSave />
            </button>
            <button
              className="btn btn-sm link-danger ms-2"
              onClick={cancelEdit}
            >
              <FaTimes />
            </button>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <button
            className="btn btn-sm link-secondary"
            onClick={() => toggleEdit("heroImg")}
          >
            <FaEdit />
          </button>
          </div>
        )}
      </div>
      <div className="container-fluid mb-5">
        <div className="row portyellow">
          {formik.values.sections.map((section) => (
            <div key={section.id} className="col-md-6 p-3 mt-4">
              <div className="card align-items-center p-3 h-100">
                <div className="d-flex gap-1">
                  <img
                    src={section.image}
                    alt="life"
                    className="img-fluid w-25"
                  />
                  <h2 className="text-dark border-bottom">{section.title}</h2>
                </div>
                <p className="preserve-whitespace">
                  {section.content}
                  <button
                    className="btn btn-sm btn-outline-warning border ms-2 edit-container"
                    onClick={() => handleEdit(section)}
                  >
                    <FaEdit />
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
        <Modal show={!!editingSection} onHide={cancelEdit}>
          <Modal.Header closeButton>
            <Modal.Title>
              Edit Section: {editingSection && editingSection.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formSectionTitle">
                <Form.Label>Section Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={tempSection?.title || ""}
                  onChange={handleSectionChange}
                />
              </Form.Group>
              <Form.Group controlId="formSectionContent">
                <Form.Label>Section Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter content"
                  name="content"
                  value={tempSection?.content || ""}
                  onChange={handleSectionChange}
                />
              </Form.Group>
              <Form.Group controlId="formSectionImage">
                <Form.Label>Section Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelEdit}>
              Close
            </Button>
            <Button variant="primary" onClick={saveSectionContent}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
