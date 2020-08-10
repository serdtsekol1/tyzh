import React from "react";
import {Link} from "react-router-dom";
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
        <div className="dot"></div> 
      ) : (
        ""
      )}
      {props.author ? (
        <div>{props.author.map(author=><Link to={`/author/${author.id}`}><p className="author">{author.fullnameua}</p></Link>)}</div>
          
      ) : (
        ""
      )}
    </div>
  );
}

export default DateAndAuthor;
