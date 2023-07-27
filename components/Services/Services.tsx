import React from "react";
import s from "./Services.module.scss";
import ServicesBlock from "../ServicesBlock/ServicesBlock";

const Services = () => {
  return <div className={`${s.container}`}>
    <div className={`${s.wrapper} boxed`}>
    <div>
        <div className={`heading`}>
        Grow your business
        </div>
        <h2 className={s.tagline}>
        Get networking and cybersecurity solutions that deliver real business results.
        </h2>
    </div>
    </div>
    <ServicesBlock/>
  </div>;
};

export default Services;
