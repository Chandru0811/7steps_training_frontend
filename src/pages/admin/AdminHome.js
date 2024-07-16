import React, { useState } from "react";
import heroImg from "../../assets/Home hero img.jpg";
import cardIcon1 from "../../assets/Home-card-icon-1.jpg";
import cardIcon2 from "../../assets/Home-card-icon-2.jpg";
import cardIcon3 from "../../assets/Home-card-icon-3.jpg";
import cardIcon4 from "../../assets/Home-card-icon-4.jpg";
import cardIcon5 from "../../assets/Home-card-icon-5.jpg";
import cardIcon6 from "../../assets/Home-card-icon-6.jpg";
import { IoIosStar } from "react-icons/io";
import ajabImg from "../../assets/Ellipse 1.jpg";
import fouziaImg from "../../assets/Ellipse 2.jpg";
import tazeenImg from "../../assets/Ellipse 3.jpg";
import premaImg from "../../assets/Ellipse 4.jpg";
import sitiImg from "../../assets/Ellipse 5.jpg";
import entrepreneurImg from "../../assets/Ellipse 6.jpg";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

function AdminHome() {
  const heroCards = [
    {
      id: 1,
      cardIcon: cardIcon1,
      title: "My Journey",
      description: `Having lost her mum to schizophrenia. Her own journey of losing her identity of low self-esteem, resentments and unfulfillment with life. Her eventual rock bottom came when she found herself on a hospital bed almost going to be paralysed from the waist down, due to spinal issues (cauda equina syndrome). 
     
Her spine surgery in 2019 which put 6 metal screws and a metal cage in her spine, and her having to relearn walking again. Her estrangement with her family due to strained relationships which almost ended up in divorce. And everything in her life became out of balance.`,
    },
    {
      id: 2,
      cardIcon: cardIcon2,
      title: "My Transformation",
      description: `In 2019-2020, she managed to turn her life around, awakening herself out of darkness and regaining her power to emerge successful in her health, finances, relations, career and life. 

All this was due to her changing her mindset - shift in her thinking, speaking, behaviour and positive actions, together with persistence and perserverence.`,
    },
    {
      id: 3,
      cardIcon: cardIcon3,
      title: "My Mission",
      description: `Realising that many people were, like herself, victims of self-doubt, self-sabotage and self-destruction due to trauma, negative thoughts and past programming and events which have occurred in their lives, which often lead to destructive behaviours, depression and suicide, she felt she had to step up to help others.
      
With experiences from her own life, her mum’s, her work with students and individuals, she is now on a mission transforming lives and empowering and inspiring many.,`,
    },
    {
      id: 4,
      cardIcon: cardIcon4,
      title: "My Success",
      description: `In a few short years, she has changed her life drastically and the life of her family and participants. She has regained back her confidence; her life, finances, relationships and career.`,
    },
    {
      id: 5,
      cardIcon: cardIcon5,
      title: "My Passion",
      description: `Her passion still remails with working with youths and the vulnerable of society`,
    },
    {
      id: 6,
      cardIcon: cardIcon6,
      title: "My Motto",
      description: `Passion and commitment in all that I do.
      
Become a progressivist in your own life.`,
    },
  ];
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
  const [data, setData] = useState({
    heroTitle: `Hello! I'm Reihana, Intervention Coach`,
    heroContent: `I'm a specialising in and Emotional Healing. She
                    “intervenes” in helping individuals, entrepreneurs and
                    business persons in overcoming their limiting beliefs and
                    bring positive mindset changes, resulting in them achieving
                    breakthroughs and becoming champions of their lives.`,
    heroSubTitle: `My Calling`,
    heroSubContent: `She had discovered her life's calling through her work in schools and how she
     could make an impact to the youths and children and create positive changes in them.`,
    testimonialHeading: `What our peoples are saying about her programme?`,
    testimonialSubHeading: `"We deeply value the trust and support you've shown for her program. 
    Your participation and feedback are invaluable to us, helping us improve and grow. Thank you for being a part of 
    this journey with us!"`,
  });
  const [image, setImage] = useState({
    homeHeroImg: heroImg,
  });
  const [isEditing, setIsEditing] = useState(null);
  const [isEditingImg, setIsEditingImg] = useState(false);
  const [newData, setNewData] = useState(data);
  const [cards, setCards] = useState(heroCards);
  const [testimonials, setTestimonials] = useState(testimonialCards);

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

  const [editingIndex, setEditingIndex] = useState(null);

  const handleCardChange = (index, field, value) => {
    const updatedCards = cards.map((card, i) =>
      i === index ? { ...card, [field]: value } : card
    );
    setCards(updatedCards);
  };

  const [editingIndexTestimonial, setEditingIndexTestimonial] = useState(null);

  const handleNameChange = (index, value) => {
    const updatedCards = testimonials.map((card, i) =>
      i === index ? { ...card, name: value } : card
    );
    setTestimonials(updatedCards);
  };

  const handleCardTitleChange = (index, value) => {
    const updatedCards = testimonials.map((card, i) =>
      i === index ? { ...card, testimonialTitle: value } : card
    );
    setTestimonials(updatedCards);
  };

  const handleDateChange = (index, value) => {
    const updatedCards = testimonials.map((card, i) =>
      i === index ? { ...card, testimonialDate: value } : card
    );
    setTestimonials(updatedCards);
  };

  const handleDescriptionsChange = (index, value) => {
    const updatedCards = testimonials.map((card, i) =>
      i === index ? { ...card, testimonialDescription: value } : card
    );
    setTestimonials(updatedCards);
  };

  const handleEditImage = (index) => {
    setEditingIndex(index);
  };

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedTestimonials = [...testimonials];
        updatedTestimonials[index].testimonialImage = reader.result;
        setTestimonials(updatedTestimonials);
        setEditingIndex(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCardImageChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedTestimonials = [...cards];
        updatedTestimonials[index].cardIcon = reader.result;
        setTestimonials(updatedTestimonials);
        setEditingIndex(null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div>
        <div className="home pb-4">
          {/* banner start*/}
          <div className="container py-5">
            <div className="row m-0">
              <div className="col-md-7 col-12">
                <div className="hero">
                  {isEditing === "heroTitle" ? (
                    <div>
                      <div className="d-flex">
                        <button
                          onClick={() => handleSaveClick("heroTitle")}
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
                        name="heroTitle"
                        value={newData.heroTitle}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleEditClick("heroTitle")}
                        className="btn btn-sm link-secondary ms-2 edit-button"
                        style={{ width: "fit-content" }}
                      >
                        <FaEdit />
                      </button>
                      <h1
                        className="fw-bolder"
                        dangerouslySetInnerHTML={{ __html: data.heroTitle }}
                      ></h1>
                    </div>
                  )}
                  {isEditing === "heroContent" ? (
                    <div>
                      <div className="d-flex">
                        <button
                          onClick={() => handleSaveClick("heroContent")}
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
                        name="heroContent"
                        value={newData.heroContent}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleEditClick("heroContent")}
                        className="btn btn-sm link-secondary ms-2 edit-button"
                        style={{ width: "fit-content" }}
                      >
                        <FaEdit />
                      </button>
                      <p>{data.heroContent}</p>
                    </div>
                  )}
                  <div className="second-heading">
                    {isEditing === "heroSubTitle" ? (
                      <div>
                        <div className="d-flex">
                          <button
                            onClick={() => handleSaveClick("heroSubTitle")}
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
                          name="heroSubTitle"
                          value={newData.heroSubTitle}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleEditClick("heroSubTitle")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <h3>{data.heroSubTitle}</h3>
                      </div>
                    )}
                    {isEditing === "heroSubContent" ? (
                      <div>
                        <div className="d-flex">
                          <button
                            onClick={() => handleSaveClick("heroSubContent")}
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
                          name="heroSubContent"
                          value={newData.heroSubContent}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleEditClick("heroSubContent")}
                          className="btn btn-sm link-secondary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaEdit />
                        </button>
                        <p>{data.heroSubContent}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-12 d-flex justify-content-center">
                <div className="hero-img px-5 py-2">
                  {isEditingImg ? (
                    <div>
                      <div className="d-flex">
                        <button
                          onClick={() => setIsEditingImg(false)}
                          className="btn btn-sm link-primary ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setIsEditingImg(null)}
                          className="btn btn-sm link-danger  ms-2 edit-button"
                          style={{ width: "fit-content" }}
                        >
                          <FaTimes />
                        </button>
                      </div>
                      <input
                        type="file"
                        name="homeHeroImg"
                        onChange={(e) =>
                          setImage({
                            homeHeroImg: e.target.files[0],
                          })
                        }
                        className="form-control"
                      />
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => setIsEditingImg(true)}
                        className="btn btn-sm link-secondary ms-2 edit-button"
                        style={{ width: "fit-content" }}
                      >
                        <FaEdit />
                      </button>
                      {image.homeHeroImg &&
                        (typeof image.homeHeroImg === "string" ? (
                          <img
                            src={image.homeHeroImg}
                            alt="heroImg"
                            className="img-fluid"
                          />
                        ) : (
                          <img
                            src={URL.createObjectURL(image.homeHeroImg)}
                            alt="heroImg"
                            className="img-fluid"
                          />
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* banner end*/}
          {/* cards start*/}
          <div className="container">
            <div className="row py-2">
              {cards.map((card, index) => (
                <div key={card.id} className="col-md-4 col-12 my-3">
                  <div className="card hero-cards h-100">
                    <div className="border-design"></div>
                    <div className="card-body text-center">
                      {editingIndex === index ? (
                        <div className="p-2">
                          <div className="d-flex">
                            <button
                              onClick={() => setEditingIndex(null)}
                              className="btn btn-sm link-primary ms-2 edit-button"
                              style={{ width: "fit-content" }}
                            >
                              <FaSave />
                            </button>
                            <button
                              onClick={() => setEditingIndex(null)}
                              className="btn btn-sm link-danger  ms-2 edit-button"
                              style={{ width: "fit-content" }}
                            >
                              <FaTimes />
                            </button>
                          </div>
                          <input
                            type="file"
                            onChange={(e) => handleCardImageChange(e, index)}
                          />
                          <input
                            type="text"
                            name="title"
                            value={card.title}
                            onChange={(e) =>
                              handleCardChange(index, "title", e.target.value)
                            }
                            className="form-control"
                          />
                          <textarea
                            type="text"
                            name="description"
                            value={card.description}
                            onChange={(e) =>
                              handleCardChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                            className="form-control "
                            style={{ height: "300px" }}
                          />
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => setEditingIndex(index)}
                            className="btn btn-sm link-secondary ms-2 edit-button"
                            style={{ width: "fit-content" }}
                          >
                            <FaEdit />
                          </button>
                          <h5 className="card-title">
                            <img src={card.cardIcon} alt="cardIcon" />{" "}
                            {card.title}
                          </h5>
                          <p
                            style={{ whiteSpace: "pre-wrap" }}
                            className="card-text text-start"
                            dangerouslySetInnerHTML={{
                              __html: card.description,
                            }}
                          ></p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* cards end*/}
        </div>
      </div>
    </>
  );
}

export default AdminHome;
