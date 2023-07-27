import React from "react";
import s from "./Feed.module.scss";

const Feed = () => {
  return (
    <div className={`${s.container} boxed`}>
      <div className={`${s.leftWrap}`}>
        <img src="/images/feed.jpeg" alt="img" className={s.video} />
      </div>
      <div className={s.rightWrap}>
        <div className={`altHeading`}>THE FEED</div>

        <h2>Access to networking experts and ideas</h2>
        <p>
          {`The best streaming content from Juniper's executives, experts, and events to help you shape experience-first networks.`}
        </p>
        <button className="primaryBtn">Get inspired</button>
      </div>
    </div>
  );
};

export default Feed;
