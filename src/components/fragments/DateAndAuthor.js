import React from "react";
import "./css/date_and_author.scss";
function DateAndAuthor(props) {
  return (
    <div className="date-and-author">
      <img
        className="clock"
        src={require("../../images/icons/date-24px.svg")}
        alt=""
      />
      <p className="date">{props.date}</p>
      {props.author ? (
        <div>
          <p className="dot">▪</p> <p className="author">{props.author}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DateAndAuthor;
