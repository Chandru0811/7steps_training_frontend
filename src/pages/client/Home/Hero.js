import React from "react";
import heroImg from "../../../assets/Home hero img.jpg";
import cardIcon1 from "../../../assets/Home-card-icon-1.jpg";
import cardIcon2 from "../../../assets/Home-card-icon-2.jpg";
import cardIcon3 from "../../../assets/Home-card-icon-3.jpg";
import cardIcon4 from "../../../assets/Home-card-icon-4.jpg";
import cardIcon5 from "../../../assets/Home-card-icon-5.jpg";
import cardIcon6 from "../../../assets/Home-card-icon-6.jpg";

function hero() {
  const heroCards = [
    {
      id: 1,
      cardIcon: cardIcon1,
      title: "My Journey",
      description: `Having lost her mum to schizophrenia. Her own journey of losing her identity 
      in trying to fulfil her role as a mother, wife, and a homemaker. Her spiralling into depths
       of low self-esteem, resentments and unfulfillment with life. Her eventual rock bottom came
        when she found herself on a hospital bed almost going to be paralysed from the waist down,
         due to spinal issues (cauda equina syndrome).<br/><br/> Her spine surgery in 2019 which 
         put 6 metal screws and a metal cage in her spine, and her having to relearn walking again.
          Her estrangement with her family due to strained relationships which almost ended up in 
          divorce. And everything in her life became out of balance.`,
    },
    {
      id: 2,
      cardIcon: cardIcon2,
      title: "My Transformation",
      description: `In 2019-2020, she managed to turn her life around, awakening herself out of 
      darkness and regaining her power to emerge successful in her health, finances, relations, 
      career and life. <br/><br/>All this was due to her changing her mindset - shift in her thinking,
       speaking, behaviour and positive actions, together with persistence and perserverence.`,
    },
    {
      id: 3,
      cardIcon: cardIcon3,
      title: "My Mission",
      description: `Realising that many people were, like herself, victims of self-doubt, self-sabotage
       and self-destruction due to trauma, negative thoughts and past programming and events which have
        occurred in their lives, which often lead to destructive behaviours, depression and suicide, she
         felt she had to step up to help others.<br/><br/>With experiences from her own life, her mum’s,
          her work with students and individuals, she is now on a mission transforming lives and empowering
           and inspiring many.,`,
    },
    {
      id: 4,
      cardIcon: cardIcon4,
      title: "My Success",
      description: `In a few short years, she has changed her life drastically and the life of her family
             and participants. She has regained back her confidence; her life, finances, relationships and career.`,
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
      description: `Passion and commitment in all that I do.<br/><br/>Become a progressivist in your own life.`,
    },
  ];

  return (
    <div>
      <div className="home">
        {/* banner start*/}
        <div className="container py-5">
          <div className="row m-0">
            <div className="col-md-7 col-12">
              <div className="hero">
                <h1 className="fw-bolder">
                  Hello! I'm <span>Reihana</span>, Intervention Coach
                </h1>
                <p className="text-start">
                  I'm a specialising in and Emotional Healing. She “intervenes”
                  in helping individuals, entrepreneurs and business persons in
                  overcoming their limiting beliefs and bring positive mindset
                  changes, resulting in them achieving breakthroughs and
                  becoming champions of their lives.
                </p>
                <div className="second-heading">
                  <h3 className="">My Calling</h3>
                  <p>
                    She had discovered her life's calling through her work in
                    schools and how she could make an impact to the youths and
                    children and create positive changes in them.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 d-flex justify-content-center">
              <div className="hero-img px-5 py-2">
                <img src={heroImg} alt="heroImg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        {/* banner end*/}
        {/* cards start*/}
        <div className="container">
          <div className="row py-2">
            {heroCards.map((card) => (
              <div key={card.id} className="col-md-4 col-12 my-3">
                <div className="card hero-cards h-100">
                  <div className="border-design"></div>
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      <img src={card.cardIcon} alt="cardIcon" /> {card.title}
                    </h5>
                    <p
                      className="card-text text-start"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* cards end*/}
      </div>
    </div>
  );
}

export default hero;
