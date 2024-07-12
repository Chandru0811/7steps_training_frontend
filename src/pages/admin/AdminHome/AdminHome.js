import React from "react";
import heroImg from "../../../assets/Home hero img.jpg";
import cardIcon1 from "../../../assets/Home-card-icon-1.jpg";
import cardIcon2 from "../../../assets/Home-card-icon-2.jpg";
import cardIcon3 from "../../../assets/Home-card-icon-3.jpg";
import cardIcon4 from "../../../assets/Home-card-icon-4.jpg";
import cardIcon5 from "../../../assets/Home-card-icon-5.jpg";
import cardIcon6 from "../../../assets/Home-card-icon-6.jpg";
import { IoIosStar } from "react-icons/io";
import ajabImg from "../../../assets/Ellipse 1.jpg";
import Fouzia from "../../../assets/Ellipse 2.jpg";
import Tazeen from "../../../assets/Ellipse 3.jpg";
import Prema from "../../../assets/Ellipse 4.jpg";
import Siti from "../../../assets/Ellipse 5.jpg";
import Entrepreneur from "../../../assets/Ellipse 6.jpg";

function AdminHome() {
  return (
    <div>
      {/* home */}
      <div className="home">
        {/* banner start*/}
        <div className="row m-0">
          <div className="col-lg-7 col-md-7 col-12 p-5">
            <div className="hero">
              <h1 className="hero-heading px-5">
                Hello! I'm <span>Reihana</span>,
                <br /> Intervention Coach
              </h1>
              <p className="px-5 py-4">
                I'm a specialising in and Emotional Healing. She “intervenes” in
                helping individuals, entrepreneurs and business persons in
                overcoming their limiting beliefs and bring positive mindset
                changes, resulting in them achieving breakthroughs and becoming
                champions of their lives.
              </p>
              <div className="second-heading">
                <h3 className="px-5 py-3">My Calling</h3>
                <p className="px-5 py-4">
                  She had discovered her life's calling through her work in
                  schools and how she could make an impact to the youths and
                  children and create positive changes in them.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 p-5">
            <div className="hero-img p-5">
              <img src={heroImg} alt="heroImg" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* banner end*/}
        {/* cards start*/}
        <div className="home-cards  pb-4">
          <div className="row px-5 m-0">
            <div className="col-lg-4  col-12 p-4 hero-cards">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="text-center">
                    <span>
                      <img src={cardIcon1} alt="cardIcon" />
                    </span>
                    &nbsp; My Journey
                  </p>
                  <div className="fs-6 p-4">
                    <p>
                      Having lost her mum to schizophrenia. Her own journey of
                      losing her identity in trying to fulfil her role as a
                      mother, wife, and a homemaker. Her spiralling into depths
                      of low self-esteem, resentments and unfulfillment with
                      life. Her eventual rock bottom came when she found herself
                      on a hospital bed almost going to be paralysed from the
                      waist down, due to spinal issues (cauda equina syndrome).{" "}
                    </p>
                    <p>
                      Her spine surgery in 2019 which put 6 metal screws and a
                      metal cage in her spine, and her having to relearn walking
                      again. Her estrangement with her family due to strained
                      relationships which almost ended up in divorce. And
                      everything in her life became out of balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-12 p-4 hero-cards">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="text-center">
                    <span>
                      <img src={cardIcon2} alt="cardIcon" />
                    </span>
                    &nbsp; My Transformation
                  </p>
                  <div className="fs-6 p-4">
                    <p>
                      In 2019-2020, she managed to turn her life around,
                      awakening herself out of darkness and regaining her power
                      to emerge successful in her health, finances, relations,
                      career and life.
                    </p>
                    <p>
                      All this was due to her changing her mindset - shift in
                      her thinking, speaking, behaviour and positive actions,
                      together with persistence and perserverence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-12 p-4 hero-cards">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="text-center">
                    <span>
                      <img src={cardIcon3} alt="cardIcon" />
                    </span>
                    &nbsp; My Mission
                  </p>
                  <div className="fs-6 p-4">
                    <p>
                      Realising that many people were, like herself, victims of
                      self-doubt, self-sabotage and self-destruction due to
                      trauma, negative thoughts and past programming and events
                      which have occurred in their lives, which often lead to
                      destructive behaviours, depression and suicide, she felt
                      she had to step up to help others.
                    </p>
                    <p>
                      With experiences from her own life, her mum's, her work
                      with students and individuals, she is now on a mission
                      transforming lives and empowering and inspiring many.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-5 m-0">
            <div className="col-lg-4  col-12 p-4 hero-cards">
              <div className="card">
                <div className="card-body card-second-row">
                  <h5 className="card-title"></h5>
                  <p className="text-center">
                    <span>
                      <img src={cardIcon4} alt="cardIcon" />
                    </span>
                    &nbsp; My Success
                  </p>
                  <div className="fs-6 p-4">
                    <p>
                      In a few short years, she has changed her life drastically
                      and the life of her family and participants. She has
                      regained back her confidence; her life, finances,
                      relationships and career.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-12 p-4 hero-cards">
              <div className="card">
                <div className="card-body card-second-row">
                  <h5 className="card-title"></h5>
                  <p className="text-center">
                    <span>
                      <img src={cardIcon5} alt="cardIcon" />
                    </span>
                    &nbsp; My Passion
                  </p>
                  <div className="fs-6 p-4">
                    <p>
                      Her passion still remails with working with youths and the
                      vulnerable of society
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-12 p-4 hero-cards">
              <div className="card">
                <div className="card-body card-second-row">
                  <h5 className="card-title"></h5>
                  <p className="text-center">
                    <span>
                      <img src={cardIcon6} alt="cardIcon" />
                    </span>
                    &nbsp; My Motto
                  </p>
                  <div className="fs-6 p-4">
                    <p>Passion and commitment in all that I do</p>
                    <p>Become a progressivist in your own life.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cards end*/}
      </div>
      {/* home */}
      {/* testimonial */}
      <div className="testimonial pb-4">
        <div className="testimonial-heading">
          <h1 className="text-center text-light fw-bolder py-4">
            What our peoples are saying about her programme?
          </h1>
          <p className="text-center px-5 container fs-5 text-light">
            "We deeply value the trust and support you've shown for her program.
            Your participation and feedback are invaluable to us, helping us
            improve and grow. Thank you for being a part of this journey with
            us!"
          </p>
        </div>
        <div className="row m-4">
          <div className="col-lg-4 col-md-6 col-sm-12 px-3 testimonial-cards">
            <div className="card my-3">
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={ajabImg}
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="fs-5 text-start px-2">
                      <b>Ajab</b> - Edufam International <br /> Leadership
                      programme
                    </p>
                    <div className="fs-6 text-start px-2">
                      <span className="text-secondary">Sep 2023</span>
                      <span className="ps-3">
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-center fs-6 fw-smaller py-3">
                  Dear ma'am, your infectious energy radiated through the
                  screen. The session was extremely wonderful. Thank you so much
                  ma'am for an amazing experience and evening.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 px-3 testimonial-cards">
            <div className="card my-3">
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={Fouzia}
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="fs-5 text-start px-2">
                      <b>Fouzia</b> - Edufam International Leadership programme
                    </p>
                    <div className="fs-6 text-start px-2">
                      <span className="text-secondary">Sep 2023</span>
                      <span className="ps-3">
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-center fs-6 fw-smaller py-3">
                  Thanks a lot Reihana Ma'am an Iron Lady for your energetic
                  presentation. All the exercises that we did, I especially
                  enjoyed 5 self love languages and Restore your power I hope in
                  future will have more interactive sessions with you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 px-3 testimonial-cards">
            <div className="card my-3">
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={Tazeen}
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="fs-5 text-start px-2">
                      <b>Tazeen Siddiq</b> - Edufam International Leadership
                      programme
                    </p>
                    <div className="fs-6 text-start px-2">
                      <span className="text-secondary">Sep 2023</span>
                      <span className="ps-3">
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-center fs-6 fw-smaller py-3">
                  Dear Reihana ma'am, it was really lovely and lively session.
                  It showed us how to be positive in which ever situation you be
                  in and to love oneself and praise ourselves day in and day
                  out.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-4">
          <div className="col-lg-4 col-md-6 col-sm-12 px-3 testimonial-cards">
            <div className="card my-3">
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={Prema}
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="fs-5 text-start px-2">
                      <b>Ms Prema</b> - Teacher
                    </p>
                    <div className="fs-6 text-start px-2">
                      <span className="text-secondary">Sep 2023</span>
                      <span className="ps-3">
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-center fs-6 fw-smaller py-3">
                  I attended the POWER of SELF workshop by Reihana. I have
                  gained a lot of practical knowledge that I can apply directly
                  in my studies, work, health and in life. Thankyou Ms Reihana.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 px-3 testimonial-cards">
            <div className="card my-3">
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={Siti}
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="fs-5 text-start px-2">
                      <b> Siti Hawa</b> - Administrator
                    </p>
                    <div className="fs-6 text-start px-2">
                      <span className="text-secondary">Sep 2023</span>
                      <span className="ps-3">
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-center fs-6 fw-smaller py-3">
                  Thankyou Reihana for the Mindset Transformation workshop
                  earlier. You helped me UNLOCK my Mental Blocks, recognise
                  what's toxic for me and the art of LETTING GO. I highly
                  recommend this programme to anyone who is seeking happiness
                  and purpose.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 px-3 testimonial-cards">
            <div className="card my-3">
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="rounded-circle img-fluid"
                      src={Entrepreneur}
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="fs-5 text-start px-2">
                      <b>Ms C</b> - Entrepreneur
                    </p>
                    <div className="fs-6 text-start px-2">
                      <span className="text-secondary">Sep 2023</span>
                      <span className="ps-3">
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                        <IoIosStar className="yellow-star" />
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-center fs-6 fw-smaller py-3">
                  Thank you very much for conducting the wonderful workshop on
                  Awakening Your Power. It was time well-spent for me; doing the
                  exercises and learning coping techniques such the importance
                  of forgiving oneself. I really benefitted from the workshop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial */}
    </div>
  );
}

export default AdminHome;
