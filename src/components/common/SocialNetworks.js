import React from "react";
import "./css/social_networks.scss";

function SocialNetworks(props) {
  const isRed = props.color == "red";
  return (
    <div className="social-networks">
      <a href="https://www.facebook.com/tyzhdenUA/">
      <img
        src={
          isRed
            ? require("../../images/icons/facebook-red-32px.svg")
            : require("../../images/icons/facebook-white-32px.svg")
        }
        alt=""
      />
      </a>
      {/* <a href="">
      <img
        src={
          isRed
            ? require("../../images/icons/telegram-red-32px.svg")
            : require("../../images/icons/telegram-white-32px.svg")
        }
        alt=""
      />
      </a> */}
      <a href="https://twitter.com/tyzhdenUA">
      <img
        src={
          isRed
            ? require("../../images/icons/twitter-red-32px.svg")
            : require("../../images/icons/twitter-white-32px.svg")
        }
        alt=""
      />
      </a>
    </div>
  );
}

export default SocialNetworks;
