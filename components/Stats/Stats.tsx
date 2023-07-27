import React from "react";
import s from "./Stats.module.scss";
import { statistics } from "../../constant/ServicesData";

const Stats = () => {
  return (
    <div className={`${s.container} boxed`}>
      <div className={`${s.heading} heading`}>INDUSTRY SPOTLIGHT</div>
      <div className={s.cardsWrapper}>
        {" "}
        {statistics.map((item, i) => {
          return (
            <div className={`${s.card}`} key={i}>
              <h3>
                {item.bigNum}
                <span className={s.smallText}>/{item.smallNum}</span>
              </h3>
              <div className={s.desc}>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
