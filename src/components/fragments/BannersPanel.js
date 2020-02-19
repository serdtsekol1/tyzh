import React from "react";
import "./css/banners_panel.scss";

function BannersPanel(props) {
  return (
    <div className="banners-panel fragment-big">
      <div className="image-banner">
        <img
          src={require("../../images/banners/world_2020_main_column 3.png")}
          alt="Баннер"
        />
      </div>
      {props.secondBanner ? (
        <div className="image-banner d-none d-md-block">
          <img
            src={require("../../images/banners/world_2020_main_column 3.png")}
            alt="Баннер"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default BannersPanel;
