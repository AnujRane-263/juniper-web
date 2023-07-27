import React, { useEffect, useState } from "react";
import s from "./WhyUs.module.scss";
import Link from "next/link";
import Image from "next/image";
import { blog } from "../../constant/ServicesData";
import { useRouter } from "next/router";

const WhyUs = () => {
  const router = useRouter();

  const handleDivClick = () => {
    router.push(
      "https://www.juniper.net/us/en/the-feed/topics/ai-and-machine-learning/finally-cloud-native-ai-driven-network-access-control.html"
    );
  };

  useEffect(() => {
    const divElement = document.querySelector(".cardLink");
    if (divElement) {
      divElement.addEventListener("click", handleDivClick);
      return () => {
        divElement.removeEventListener("click", handleDivClick);
      };
    }
  }, []);
  return (
    <div className={`${s.container} `}>
      <div className={`${s.wrapper} boxed`}>
        <div className={`heading`}>The Latest</div>
        <h2>Experience Juniper for Yourself</h2>

        <div className="cardLink">
          <div className={`${s.card}`}>
            <div className={s.leftWrap}>
              <div className={`heading`}>Why Juniper</div>
              <h4>More connected, more secure</h4>
              <p className="lightText">
                See how AI-driven Mist Access Assurance can lead to more
                straightforward Network Access Control operations and better
                protection for people and their devices.
              </p>
              <p className="lightText">
                <a
                  href="https://blogs.juniper.net/en-us/enterprise-cloud-and-transformation/nac-is-back-better-than-ever-juniper-mist-access-assurance-redefines-nac-with-cloud-and-ai"
                  target="_blank"
                  rel="noreferrer"
                  className={`link`}
                >
                  Learn how
                </a>
                NAC is back, better than ever.
              </p>
              <p className="lightText">Watch now</p>
            </div>
            <div className={s.rightWrap}>
              <img
                src="/images/video-juniper.avif"
                alt={"video"}
                className={s.thumbnail}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className={s.cardWrapper}>
          {blog.map((item, i) => {
            return (
              <div className={s.blogCard} key={i}>
                <div className={`${s.heading} heading`}>{item.category}</div>
                <h4>{item.headline}</h4>
                <p className="lightText">{item.desc}</p>
                <p className={`${s.date} lightText`}>{item.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
