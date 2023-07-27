import React from "react";
import s from "./Footer.module.scss";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const Footer = () => {
  const footerLinkOne = [
    "About Us",
    "Careers",
    "Corporate Responsibility",
    "Investor Relations",
    "Newsroom",
    "Image Library",
  ];
  const footerLinkTwo = ["Blogs", "Community", "Events"];
  const footerLinkThree = [
    "Offers & Trials",
    "Contact Sales",
    "Find a Partner",
    "Find a Distributor",
    "Partner Login",
  ];
  const { Panel } = Collapse;

  return (
    <div className={s.container}>
      <div className={`${s.wrapper} boxed`}>
        <div className={s.block}>
          <p className={s.smallText}>
            {` Gartner Magic Quadrant for Indoor Location Services, Tim Zimmerman,
          Annette Zimmermann, February 21, 2023`}
          </p>
          <p className={s.smallText}>
            {` Gartner Magic Quadrant for Enterprise Wired and Wireless LAN
          Infrastructure, Mike Toussaint, Christian Canales, Tim Zimmerman,
          December 21, 2022.`}
          </p>
          <p
            className={s.smallText}
          >{`Gartner does not endorse any vendor, product or service depicted in its research publications, and does not advise technology users to select only those vendors with the highest ratings or other designation. Gartner research publications consist of the opinions of Gartner’s research organization and should not be construed as statements of fact. Gartner disclaims all warranties, expressed or implied, with respect to this research, including any warranties of merchantability or fitness for a particular purpose.`}</p>{" "}
          <p
            className={s.smallText}
          >{`Gartner® and Magic Quadrant are registered trademarks and service mark of Gartner, Inc. and/or its affiliates in the U.S. and internationally and are used herein with permission. All rights reserved.`}</p>
        </div>
      </div>
      <div className={s.footer}>
        <div className={`${s.footerWrapper} boxed`}>
          <div className={s.leftWrap}>
            <img
              src="/images/juniper_footer.svg"
              alt="footer-logo"
              width={138}
              height={45}
            />
          </div>
          <div>
            {footerLinkOne.map((item, i) => {
              return (
                <div key={i} className={s.footerHide}>
                  <ul>
                    <li>
                      <a href="#">{item}</a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div>
            {footerLinkTwo.map((_item, a) => {
              return (
                <div key={a} className={s.footerHide}>
                  <ul>
                    <li>
                      <a href="#">{_item}</a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div>
            {footerLinkThree.map((item_, b) => {
              return (
                <div key={b} className={s.footerHide}>
                  {" "}
                  <ul>
                    <li>
                      <a href="#">{item_}</a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${s.socials} boxed`}>
          <p>Get updates from Juniper</p>
          <button className="secondaryBtn">Sign up</button>
          <p style={{ margin: "3rem 0 1rem" }}>Follow Us</p>
          <i className={`${s.link} fab fa-facebook-f`}></i>
          <i className={`${s.link} fab fa-twitter`}></i>
          <i className={`${s.link} fab fa-youtube`}></i>
          <i className={`${s.link} fab fa-linkedin`}></i>
          <i className={`${s.link} fab fa-instagram`}></i>
        </div>
        <div className={`${s.collapse} collapseMob`}>
          <Collapse>
            <Panel header="DropDownOne" key="1">
              {footerLinkOne.map((item, i) => {
                return (
                  <ul key={i}>
                    <li>{item}</li>
                  </ul>
                );
              })}
            </Panel>
            <Panel header="DropDownTwo" key="2">
              {footerLinkTwo.map((item, i) => {
                return (
                  <ul key={i}>
                    <li>{item}</li>
                  </ul>
                );
              })}
            </Panel>
            <Panel header="DropDownThree" key="3">
              {footerLinkThree.map((item, i) => {
                return (
                  <ul key={i}>
                    <li>{item}</li>
                  </ul>
                );
              })}
            </Panel>
          </Collapse>
        </div>

        <div className={s.border}></div>
        <div className={`${s.copyrightsData} boxed`}>
          <p>© 1999 - 2023 Juniper Networks, Inc. All rights reserved.</p>
          <div>
            <p>Contact Us</p>
            <p>
              <a href="tel:18662986428">+1-866-298-6428 (Americas)</a>
            </p>
          </div>
          <div>
            <p>Feedback</p>
            <p>Report a Vulnerability</p>
          </div>
          <div>
            <ul>
              <li>Site Map</li>
              <li>Privacy Notice</li>
              <li>Do Not Sell or Share My Personal Information</li>
              <li>Legal Notices</li>
              <li>DMCA Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
