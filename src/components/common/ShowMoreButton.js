import React from "react";
import { Link } from "react-router-dom";

function ShowMoreButton(props) {
  return (
    <Link to={props.to} className="show-more-button">
      {props.title}
      <i className="fa fa-angle-right arrow-right" />
    </Link>
  );
}

export default ShowMoreButton;
