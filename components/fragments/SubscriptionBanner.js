import React from "react";

function SubscriptionBanner(props) {
  return (
    <div className="d-none d-md-block">
      
      <a href="https://old.tyzhden.ua/InfoCenter/Subscription/">
        <img
          style={props.style}
          className="banner subscription-banner"
          src={"/images/banners/subscription.png"}
          alt={`Оформлюй передплату журналу "Український тиждень"`}
        />
      </a>
    </div>
  );
}

export default SubscriptionBanner;
