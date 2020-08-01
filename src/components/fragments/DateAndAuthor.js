import React from "react";
import "./css/date_and_author.scss";
function DateAndAuthor(props) {
  let author_name="";
  if (props.author) {
    author_name= props.author;
    
  }
  
  return (
    <div className="date-and-author">
      <img
        className="clock"
        src={require("../../images/icons/date-24px.svg")}
        alt=""
      />
      <p className="date">{props.date}</p>
      {props.author ? (
        <div className="dot"></div> 
      ) : (
        ""
      )}
      {props.author ? (
          <p className="author">{author_name}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default DateAndAuthor;
