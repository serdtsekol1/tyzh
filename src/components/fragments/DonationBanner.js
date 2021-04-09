import React from "react";
import "./css/banners.scss";

function DonationBanner(props) {
  return (
    <div className="d-none d-md-block">
      <a href="https://www.patreon.com/ukrainianweek">
        <img
          style={props.style}
          className="banner subscription-banner"
          src={require("../../images/banners/donation-2.gif")}
          alt={`Оформлюй передплату журналу "Український тиждень"`}
        />
      </a>
    </div>
  );
}

export default DonationBanner;
