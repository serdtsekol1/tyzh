import React from "react";
import "./css/banners.scss";

function SubscriptionBanner(props) {
  return (
    <div className="d-none d-md-block col-md-12">
      <img
        style={props.style}
        className="banner"
        src={require("../../images/banners/subscription.png")}
        alt={`Оформлюй передплату журналу "Український тиждень"`}
      />
    </div>
  );
}

export default SubscriptionBanner;
