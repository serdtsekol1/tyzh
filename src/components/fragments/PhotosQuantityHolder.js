import React from "react";
import "./css/photo_report.scss";

function PhotosQuantityHolder(props) {
  return (
    <div className={props.noFrame?"":"photos-quantity-holder"}>
      <img
        className={props.noFrame?"camera camera-small":"camera"}
        src={require("../../images/icons/photo-24px.svg")}
        alt="Камера"
      />
      {props.quantity? 
      <p className="quantity-label">
       Зображень: <b>{props.quantity}</b>
      </p>
      :
      <p className="quantity-label">
       {props.title}
      </p>
      }
    </div>
  );
}

export default PhotosQuantityHolder;
