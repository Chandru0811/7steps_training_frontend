import React from "react";
import "../../../styles/client.css";
import heroImg from "../../../assets/Home hero img.jpg";

function hero() {
  return (
    <div>
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
                  <p className="text-center">My Journey</p>
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
                  <p className="text-center">My Transformation</p>
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
                  <p className="text-center">My Mission</p>
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
                  <p className="text-center">My Success</p>
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
                  <p className="text-center">My Passion</p>
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
                  <p className="text-center">My Motto</p>
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
    </div>
  );
}

export default hero;
