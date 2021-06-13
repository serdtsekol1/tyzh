import React from "react";

function SocialNetworks(props) {
  const isRed = props.color == "red";
  let shareLinkFb;
  let shareLinkTwitter;
  if (props.shareFb) shareLinkFb=`https://www.facebook.com/share.php?u=${props.shareLink}`;
  if (props.shareTwitter) shareLinkTwitter=`https://twitter.com/intent/tweet?text=${props.shareText}&url=${props.shareLink}`;
  return (
    <div className="social-networks">
      <a href={shareLinkFb?shareLinkFb:`https://www.facebook.com/tyzhdenUA/`}>
      <img
        src={
          isRed
            ? "/images/icons/facebook-red-32px.svg"
            : "/images/icons/facebook-white-32px.svg"
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
      <a href={shareLinkTwitter?shareLinkTwitter:"https://twitter.com/tyzhdenUA"}>
      <img
        src={
          isRed
            ? "/images/icons/twitter-red-32px.svg"
            : "/images/icons/twitter-white-32px.svg"
        }
        alt=""
      />
      </a>
    </div>
  );
}

export default SocialNetworks;
