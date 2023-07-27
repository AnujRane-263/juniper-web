import React from "react";
import s from "./ServicesBlock.module.scss";
import { cardData } from "../../constant/ServicesData";
import Image from "next/image";

const ServicesBlock = () => {
  return (
    <div className={`${s.container} boxed`}>
      <div>
        {cardData.map((item, i) => {
          return (
            <div className={`${s.card}`} key={i}>
              <div className={`${s.leftWrap}`}>
                <h3 className={s.heading}>{item.heading}</h3>
                <div>
                  <p className={s.tag}>
                    <span className={s.tagline}>{item.tagline}</span>
                  </p>
                  <p className={s.desc}>{item.desc}</p>
                </div>
                <button className={`${s.btn} primaryBtn`}>
                  {item.buttonLabel}
                </button>
              </div>
              <div className={`${s.rightWrap}`}>
                <div className={s.linkOverlay}>
                  <div className={s.heading}>
                    <a href="#" className={s.link}>
                      {item.link}
                    </a>
                    <i className={`${s.arrow} fas fa-arrow-right `}></i>
                  </div>

                  <div >
                    <p className={s.linkDesc}>{item.linkDesc}</p>
                  </div>
                </div>
                <img
                  src={item.cardImg}
                  alt="cardImg"
                  className={s.cardImg}
                  // width={609.1}
                  // height={438.6}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesBlock;
