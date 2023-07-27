import React, { useState } from "react";
import s from "./Header.module.scss";
import { CiSearch } from "react-icons/ci";
import { Button, Drawer } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiMessageDetail, BiUserCircle, BiWorld } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
const Header = () => {
  const navOne = ["Products & Solutions", "Customers", "Partners", "Company"];
  const navTwo = ["Support", "Training", "Event & Demos", "The Feed"];
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={s.container}>
      <div className={s.newUl}>
        <img
          src="/images/header-logo.webp"
          alt="logo"
          width={105}
          height={28}
          className={s.logo}
        />

        {navOne.map((item, i) => {
          return (
            <div className={s.nav1} key={i}>
              <ul>
                <li>
                  <a href="#" className={s.nav1Link}>
                    {item}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      <div className={`${s.newUl} ${s.navRight}`}>
        {navTwo.map((item, i) => {
          return (
            <div className={s.nav2} key={i}>
              <ul>
                <li>
                  <a href="#" className={s.linkRight}>
                    {item}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
        <button className="hamMenu">
          <BiWorld className="worldIcon" />
        </button>

        <button className={s.searchBtn}>
          <CiSearch />
        </button>
        <div className={s.hamBurgerMenu}>
          <button className="hamMenu" onClick={showDrawer}>
            <RxHamburgerMenu className="menuIcon" />
          </button>
          <Drawer
            placement="right"
            onClose={onClose}
            open={open}
            className="slideMenu"
          >
            {navOne.map((item, i) => {
              return (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              );
            })}
            {navTwo.map((item, i) => {
              return (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              );
            })}
            <div className="buttonsWrap">
              <div className="buttons">
                <div>
                  <BiUserCircle className="icon" />
                  Login in
                </div>
                <div>
                  <AiOutlineArrowRight />
                </div>
              </div>
              <div className="buttons">
                <div>
                  <BiMessageDetail className="icon" />
                  Contact Sales
                </div>
                <div>
                  <AiOutlineArrowRight />
                </div>
              </div>
              <div className="buttons">
                <div className="text"> Try Now</div>
                <div>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
