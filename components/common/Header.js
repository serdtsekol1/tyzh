import React from "react";

function Header(props) {
  const bigStyle = props.size == "big" ? "header-big" : "";
  return (
    <div id={props.id} style={props.style} className={`fragment-header ${bigStyle}`}>
      {props.title}
    </div>
  );
}

export default Header;
