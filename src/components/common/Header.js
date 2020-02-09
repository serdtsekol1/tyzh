import React from "react";
import "./css/_headers.scss";

function Header(props) {
  const bigStyle = props.size == "big" ? "header-big" : "";
  return <div className={`fragment-header ${bigStyle}`}>{props.title}</div>;
}

export default Header;
