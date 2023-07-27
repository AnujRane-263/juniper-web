import React, { use, useState } from "react";
import s from "./HeaderTop.module.scss";
import { BiMessageDetail, BiUserCircle, BiWorld } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";

const HeaderTop = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
    console.log("hello");
  };
  return (
    <div className={s.container}>
      <div className={s.btn}>
        <BiMessageDetail className={s.icon} />
        Contact Sales
      </div>
      <span>|</span>
      <div className={s.btn}>
        <BiUserCircle className={s.icon} />
        Login in
      </div>
      <span>|</span>
      <div className={s.btn} onClick={() => openMenu}>
        <BiWorld className={s.icon} />
        us | en
        <AiOutlineDown className={s.iconDown} />
      </div>
      <button className={`${s.tryNowBtn} primaryBtn`}>Try now</button>
    </div>
  );
};

export default HeaderTop;
