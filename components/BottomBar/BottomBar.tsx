import React, { useState } from "react";
import s from "./BottomBar.module.scss";
import { Drawer } from "antd";
import type { DrawerProps } from "antd/es/drawer";

const BottomBar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`${s.container} bottomBarMenu`}>
      <>
        <div onClick={handleClick} className={s.bottomBar}>
          You Might Like
        </div>
        <Drawer
          placement="bottom"
          width={500}
          open={open}
          title="You Might Like"
          onClick={handleClick}
        >
          <div></div>
        </Drawer>
      </>
    </div>
  );
};

export default BottomBar;
