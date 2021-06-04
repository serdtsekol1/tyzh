import React from "react";
import SocialNetworks from "../common/SocialNetworks";
import "../common/css/social_networks.scss";

function ShareBySocialNetworks(props) {
  return (
    <div className="share-wrap">
      {/* <p className="quantity-label">
        Поділилося: <b>{props.quantity} осіб</b>
      </p> */}
      <SocialNetworks shareText={props.shareText} shareLink={props.shareLink} shareFb={props.shareFb} shareTwitter={props.shareTwitter} color="red" />
    </div>
  );
}

export default ShareBySocialNetworks;
