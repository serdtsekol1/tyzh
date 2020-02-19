import React from "react";
import { Link } from "react-router-dom";

function ShowMoreButton(props) {
  return (
    <Link to={props.to} className="show-more-button">
      {props.title}
      <img src={require("../../images/icons/arrow_right-24px.svg")} alt=">" />
    </Link>
  );
}

export default ShowMoreButton;
