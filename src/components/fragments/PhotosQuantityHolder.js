import React from "react";
import "./css/photo_report.scss";

function PhotosQuantityHolder(props) {
  return (
    <div className="photos-quantity-holder ">
      <img
        className="camera"
        src={require("../../images/icons/photo-24px.svg")}
        alt="Камера"
      />
      <p className="quantity-label">
        Зображень: <b>{props.quantity}</b>
      </p>
    </div>
  );
}

export default PhotosQuantityHolder;
