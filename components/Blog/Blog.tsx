import React from "react";
import s from "./Blog.module.scss";

const Blog = () => {
  return (
    <div className={`${s.container} boxed`}>
      <div className={s.leftWrap}>
        <img
          src="/images/canadian-shop.avif"
          alt="canadian-shop"
          className={s.shopImg}
        />
      </div>
      <div className={s.rightWrap}>
        <h2>
          {` “Juniper’s platform will help CTC enable innovative and personalized
          experiences for every customer, no matter how they choose to shop,
          helping to drive our Better Connected strategy.”`}
        </h2>
        <span className={s.authorName}>
          Rex Lee, Chief Information and Technology Officer, Canadian Tire
          Corporation
        </span>
        <button className="primaryBtn">Read More</button>
      </div>
    </div>
  );
};

export default Blog;
