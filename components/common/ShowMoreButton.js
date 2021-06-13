import React from "react";
import Link from "next/link";

function ShowMoreButton(props) {
  return (
    <Link href={props.to} >
      <a className="show-more-button">
        {props.title}
        <img src={"/images/icons/arrow_right-24px.svg"} alt=">" />
      </a>
    </Link>
  );
}

export default ShowMoreButton;
