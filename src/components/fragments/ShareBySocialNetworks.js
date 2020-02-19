import React from "react";
import SocialNetworks from "../common/SocialNetworks";
import "../common/css/social_networks.scss";

function ShareBySocialNetworks(props) {
  return (
    <div className="share-wrap">
      <p className="quantity-label">
        Поділилося: <b>{props.quantity} осіб</b>
      </p>
      <SocialNetworks color="red" />
    </div>
  );
}

export default ShareBySocialNetworks;
