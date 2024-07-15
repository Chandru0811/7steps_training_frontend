import React from "react";
import bgImg from "../../../assets/portfolio_background.png";
import heroImg from "../../../assets/portfolioImg-removebg-preview.png";
import coach from "../../../assets/coach.png";
import speaker from "../../../assets/speaker.png";
import life from "../../../assets/life.png";
import trainer from "../../../assets/trainer.png";

export default function PortFolio() {
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
        <h2 className=" text-dark d-flex justify-content-center">
          Who is Reihana Abdullah?
        </h2>
        <p className=" d-flex justify-content-center">
          <span className="custom-badge ">TRAINER</span>
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
            alt="heroImg "
            className="img-fluid portfolio_img"
          />
        </div>
      </div>
      <div className="portyellow">
        <div className="row">
          <div className="col-md-6">
            <div className="card align-items-center p-3 m-3 h-100">
            <div className="d-flex gap-1">
            <img
            src={coach}
            alt="heroImg "
            className="img-fluid w-25"
          />
              <h2 className="text-dark border-bottom">COACH</h2>
              </div>
              <p>
                Reihana Abdullah is a revolutionary Mindset Intervention Coach.
                She guides individuals in breaking free of sabotaging beliefs,
                negative programming and past traumas to creating breakthroughs
                in any area of their life. Having broken-free and broken-through
                from her own mindset, she challenges you to a 7-Minutes
                Breakthrough and guarantees improvements in no more than 5
                sessions by discovering a person's blind spots and providing
                structured methods to stay on course.
              </p>
            </div>
          </div>
          <div className=" col-md-6">
            <div className="card align-items-center p-3 m-3 h-100">
            <div className="d-flex gap-1">
            <img
            src={trainer}
            alt="heroImg "
            className="img-fluid w-25"
          />
              <h2 className="text-dark border-bottom">TRAINER</h2>
              </div> <p>
                She has helped more than 12,000 young students, professionals,
                matured adults across Asia, Europe and USA through her
                Life-skills training programmes for students and proven Mindset
                Re-training programmes, customised for every single individual's
                needs. Her dynamic and interactive training style makes her
                workshop highly engaging and raved about.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-6">
            <div className="card align-items-center p-3 m-3 h-100">
            <div className="d-flex gap-1">
            <img
            src={speaker}
            alt="heroImg "
            className="img-fluid w-25"
          />
              <h2 className="text-dark border-bottom">SPEAKER</h2>
              </div> <p>
                She is constantly invited to speak online at International
                platforms, such as World Speech Day and International Women's
                Day and participates in forums, panel discussions, emceeing,
                talk shows (Kapil show/Symflow/Birth Discovery) and podcasts.
                She also mentors young students in public speaking and reading
                programmes. She is also an active member of AGORA SINGAPORE
                SPEAKERS CLUB where she serves in various different roles - as
                speaker, host and evaluator.
              </p>
            </div>
          </div>
          <div className=" col-md-6">
            <div className="card align-items-center p-3 m-3 h-100">
            <div className="d-flex gap-1">
            <img
            src={life}
            alt="heroImg "
            className="img-fluid w-25"
          />
              <h2 className="text-dark border-bottom">LIFE MISSION</h2>
              </div>  <p>
                She is a strong advocate for education and uplifting of
                communities through entrepreneurship and empowerment. Her
                philosophy is to RISE—Raise ourselves, Inspire others, Serve
                many and Empower all. She considers herself a progress-ivist, an
                activist always on the path leading herself and others to
                progress in life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
