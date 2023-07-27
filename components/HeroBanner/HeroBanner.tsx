import React, { useState } from "react";
import s from "./HeroBanner.module.scss";

const HeroBanner = () => {
  const [toggle, setToggle] = useState(1);
  const [isMoved, setIsMoved] = useState(false);

  const toggleTab = (index: any) => {
    setToggle(index);
    setIsMoved(true);
  };

  const slideOne = [
    {
      title: "It’s time to put AI in Action",
      desc: "Hear Juniper Mist AI customers talk about why they chose Juniper for their AI-driven network and how they’ve realized improved network operations and enhanced user experiences.",
      btnLabel: "Watch now",
      img: "/images/slide-one.avif",
    },
  ];
  const slideTwo = [
    {
      title: "Network got your hair on fire?",
      desc: "It doesn’t have to be this way. See how the industry’s best AI can simplify operations and improve the network experience.",
      btnLabel: "Stop sweating your network",
      img: "/images/slide-two.avif",
    },
  ];
  const slideThree = [
    {
      title: "Juniper Beyond Labs",
      desc: "Explore how Juniper research and engineering teams are shaping the future of networking, our industry, and the planet we call home.",
      btnLabel: "Learn more now",
      img: "/images/slide-three.avif",
    },
  ];

  return (
    <div className={`${s.container}`}>
      <div className={s.slides}>
        {slideOne.map((item, i) => {
          return (
            <div className={toggle === 1 ? "activeSlide" : s.banner} key={i}>
              <div className={`${isMoved ? "moveLeft" : ""} leftWrap`}>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <a href="#" className={`link`}>
                  {item.btnLabel}
                </a>
                <i className={`${`arrow`} fas fa-arrow-right `}></i>
              </div>
              <div className={`${isMoved ? "moveRight" : ""} rightWrap`}>
                <img src={item.img} alt="slide1" className={`slideOne`} />
              </div>
            </div>
          );
        })}
        {slideTwo.map((item, i) => {
          return (
            <div className={toggle === 2 ? "activeSlide" : s.banner} key={i}>
              <div className={`${isMoved ? "moveLeft" : ""} leftWrap`}>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <a href="#" className={`link`}>
                  {item.btnLabel}
                </a>
                <i className={`${`arrow`} fas fa-arrow-right `}></i>
              </div>
              <div className={`${isMoved ? "moveRight" : ""} rightWrap`}>
                <img src={item.img} alt="slide1" className={`slideOne`} />
              </div>
            </div>
          );
        })}
        {slideThree.map((item, i) => {
          return (
            <div className={toggle === 3 ? "activeSlide" : s.banner} key={i}>
              <div className={`${isMoved ? "moveLeft" : ""} leftWrap`}>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <a href="#" className={`link`}>
                  {item.btnLabel}
                </a>
                <i className={`${`arrow`} fas fa-arrow-right `}></i>
              </div>
              <div className={`${isMoved ? "moveRight" : ""} rightWrap`}>
                <img src={item.img} alt="slide1" className={`slideOne`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className={s.toggleTab}>
        <div
          className={toggle === 1 ? "activeTab" : s.btnOne}
          onClick={() => toggleTab(1)}
        >
          <div className={`${s.num} num`}>01</div>
          <p>Transform your network. See Juniper in Action.</p>
        </div>
        <div
          className={toggle === 2 ? "activeTab" : s.btnOne}
          onClick={() => toggleTab(2)}
        >
          <div className={`${s.num} num`}>02</div>
          <p>Demand more</p>
        </div>
        <div
          className={toggle === 3 ? "activeTab" : s.btnOne}
          onClick={() => toggleTab(3)}
        >
          <div className={`${s.num} num`}>03</div>
          <p>Experience our innovation and research powerhouse</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
