import React from "react";
import CookieConsent from "react-cookie-consent";

const CookiePopUp = () => {
  return (
    <div>
      <CookieConsent
        debug={true}
        location="top"
        containerClasses="cookiePopup"
        buttonClasses="closeBtn"
        buttonText="X"
      >
        Get a free Access Point AND a free 90-day trial of our Mist cloud
        service.
        <a
          href="https://www.juniper.net/us/en/forms/free-gear.html"
          target="_blank"
          rel="noreferrer"
        >
          See if you qualify.
        </a>
      </CookieConsent>
    </div>
  );
};

export default CookiePopUp;
