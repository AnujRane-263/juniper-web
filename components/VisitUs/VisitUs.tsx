import React from "react";
import s from "./VisitUs.module.scss";
import { locations } from "../../constant/ServicesData";

const VisitUs = () => {
  const bigLocation = [
    {
      region: "Europe and Middle East",
      locOne: "France - Français",
      locTwo: "Germany - Deutsch",
      locThree: "Israel - English",
      locFour: "Italy - Italiano",
      locFive: "The Netherlands - Nederlands",
      locSix: "Spain - Español",
      locSeven: "United Kingdom - English",
    },
  ];
  return (
    <div className={`${s.container} boxed`}>
      <h2>Juniper Global Sites</h2>
      <p>Visit us any time:</p>
      <div className={s.locations}>
        {locations.map((item, i) => {
          return (
            <div className={s.listMenu} key={i}>
              <h3 className={s.heading}>{item.region}</h3>
              <ul>
                <li className={s.link}>
                  <a href="#" className={` link`}>
                    {item.locOne}
                  </a>
                </li>
                <li className={s.link}>
                  <a href="#" className={` link`}>
                    {item.locTwo}
                  </a>
                </li>
                <li className={s.link}>
                  <a href="#" className={` link`}>
                    {item.locThree}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
        {bigLocation.map((item, i) => {
          return (
            <div className={s.listMenu} key={i}>
              <h3 className={s.heading}>{item.region}</h3>
              <ul>
                <li className={s.link}>
                  <a href="#" className={` link`}>
                    {item.locOne}
                  </a>
                </li>
                <li className={s.link}>
                  <a href="#" className={` link`}>
                    {item.locTwo}
                  </a>
                </li>
                <li className={s.link}>
                  <a href="#" className={` link`}>
                    {item.locThree}
                  </a>
                </li>
                <li className={s.link}>
                  <a href="#" className={` link`}>
                    {item.locFour}
                  </a>
                </li>
                <li className={s.link}>
                  <a href="#" className={` link`}>
                    {item.locFive}
                  </a>
                </li>
                <li className={s.link}>
                  <a href="#" className={` link`}>
                    {item.locSix}
                  </a>
                </li>
                <li className={s.link}>
                  <a href="#" className={` link`}>
                    {item.locSeven}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisitUs;
