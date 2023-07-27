import React from "react";
import s from "./Clients.module.scss";
import { clients } from "../../constant/ServicesData";

const Clients = () => {
  return (
    <div className={`${s.container} boxed`}>
      <div className={`heading`}>WE DELIVER</div>
      <h1>Happy customers, real results.</h1>
      <p>
        Discover how our customers are transforming the way people connect,
        work, and live.
      </p>
      <div className={`${s.clientsGrid}`}>
        <div>
          <img src={clients.img1} alt="clients-img" className={s.clientLogo} />
        </div>
        <div>
          <img src={clients.img2} alt="clients-img" className={s.clientLogo} />
        </div>
        <div>
          <img src={clients.img3} alt="clients-img" className={s.clientLogo} />
        </div>
        <div>
          <img src={clients.img4} alt="clients-img" className={s.clientLogo} />
        </div>
        <div>
          <img src={clients.img5} alt="clients-img" className={s.clientLogo} />
        </div>
        <div>
          <img src={clients.img6} alt="clients-img" className={s.clientLogo} />
        </div>
        <div>
          <img src={clients.img7} alt="clients-img" className={s.clientLogo} />
        </div>
        <div>
          <img src={clients.img8} alt="clients-img" className={s.clientLogo} />
        </div>
      </div>
    </div>
  );
};

export default Clients;
