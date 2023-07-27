import React from "react";
import s from "./TestDrive.module.scss";

const TestDrive = () => {
  return (
    <div className={`${s.container} boxed`}>
      <div className={`${s.leftWrap}`}>
        <iframe
          className={s.video}
          src="https://www.youtube.com/embed/bTUqLc7lh9U"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
       
      </div>
      <div className={s.rightWrap}>
        <h2>Test Drive a Juniper AP</h2>
        <p>
          Test drive a Juniper Access Point along with a free 90-day trial of
          our Mist cloud service. You’ll optimize user experiences and simplify
          operations across your entire network.
        </p>
        <button className="primaryBtn">Check your eligibility</button>
      </div>
    </div>
  );
};

export default TestDrive;
