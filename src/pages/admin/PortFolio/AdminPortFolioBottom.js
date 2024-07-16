import React from "react";
import { IoIosStar } from "react-icons/io";
import ajabImg from "../../../assets/Ellipse 1.jpg";
import fouziaImg from "../../../assets/Ellipse 2.jpg";
import tazeenImg from "../../../assets/Ellipse 3.jpg";
import premaImg from "../../../assets/Ellipse 4.jpg";
import sitiImg from "../../../assets/Ellipse 5.jpg";
import entrepreneurImg from "../../../assets/Ellipse 6.jpg";

function AdminPortFolioBoottom() {
  const testimonialCards = [
    {
      id: 1,
      name: "Ajab",
      testimonialTitle: "Edufam International Leadership programme",
      testimonialDescription: `Dear ma'am, your infectious energy radiated through the screen. 
      The session was extremely wonderful. Thank you so much ma'am for an amazing experience and evening.`,
      testimonialImage: ajabImg,
      date: "Sep 2023",
    },
    {
      id: 2,
      name: "Fouzia",
      testimonialTitle: "Edufam International Leadership programme",
      testimonialDescription: `Thanks a lot Reihana Ma'am an Iron Lady for your energetic presentation. 
      All the exercises that we did, I especially enjoyed 5 self love languages and Restore your power 
      I hope in future will have more interactive sessions with you.`,
      testimonialImage: fouziaImg,
      date: "Sep 2023",
    },
    {
      id: 3,
      name: "Tazeen Siddiq",
      testimonialTitle: "Edufam International Leadership programme",
      testimonialDescription: `Dear Reihana ma’am, it was really lovely and lively session. It showed us 
      how to be positive in which ever situation you be in and to love oneself and praise ourselves day 
      in and day out.`,
      testimonialImage: tazeenImg,
      date: "Sep 2023",
    },
    {
      id: 4,
      name: "Ms Prema",
      testimonialTitle: "Teacher",
      testimonialDescription: `I attended the POWER of SELF workshop by Reihana. I have gained a lot of practical 
      knowledge that I can apply directly in my studies, work, health and in life. Thankyou Ms Reihana.`,
      testimonialImage: premaImg,
      date: "Sep 2023",
    },
    {
      id: 5,
      name: "Siti Hawa",
      testimonialTitle: "Administrator",
      testimonialDescription: `Thankyou Reihana for the Mindset Transformation workshop earlier. You helped me UNLOCK 
      my Mental Blocks, recognise what’s toxic for me and the art of LETTING GO. I highly recommend this programme to 
      anyone who is seeking happiness and purpose.`,
      testimonialImage: sitiImg,
      date: "Sep 2023",
    },
    {
      id: 6,
      name: "Ms C",
      testimonialTitle: "Entrepreneur",
      testimonialDescription: `Thank you very much for conducting the wonderful workshop on Awakening Your Power. It was 
      time well-spent for me; doing the exercises and learning coping techniques such the importance of forgiving oneself. 
      I really benefitted from the workshop.`,
      testimonialImage: entrepreneurImg,
      date: "Sep 2023",
    },
  ];

  return (
    <div>
      <div className="testimonial pb-4">
        <div className="testimonial-heading">
          <h1 className="text-center fw-bolder py-4">
            What our peoples are saying about her programme?
          </h1>
          <p className="text-center px-5 fs-5">
            "We deeply value the trust and support you've shown for her program.
            Your participation and feedback are invaluable to us, helping us
            improve and grow. Thank you for being a part of this journey with
            us!"
          </p>
        </div>
        <div className="container-fluid px-5">
          <div className="row">
            {testimonialCards.map((profileCard) => (
              <div key={profileCard.id} className="col-md-4 col-12 p-3">
                <div className="card h-100">
                  <div className="row m-3">
                    <div className="col-3">
                      <img
                        className="rounded-circle img-fluid"
                        src={profileCard.testimonialImage}
                        alt={profileCard.name}
                      />
                    </div>
                    <div className="col-9">
                      <p className="text-start px-2">
                        <b>{profileCard.name}</b> -{" "}
                        {profileCard.testimonialTitle}
                      </p>
                      <div className="fs-6 text-start px-2">
                        <span className="text-secondary">
                          {profileCard.date}
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
                    {profileCard.testimonialDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPortFolioBoottom;
