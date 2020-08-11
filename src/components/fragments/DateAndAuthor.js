import React from "react";
import {Link} from "react-router-dom";
import "./css/date_and_author.scss";
function DateAndAuthor(props) {
 
  let dot=false;
    if (props.author){
      if (props.author.length){
        dot=true;
    }
  }
  return (
    
    <div className="date-and-author">
      <img
        className="clock"
        src={require("../../images/icons/date-24px.svg")}
        alt=""
      />
      <p className="date">{props.date}</p>
      {dot ? (
        <div className="dot"></div> 
      ) : (
        ""
      )}
      {props.author ? (
        <div>{props.author.map(author=><Link to={`/Author/${author.id}`}><p className="author">{author.fullname2ua}</p></Link>)}</div>
          
      ) : (
        ""
      )}
    </div>
  );
}

export default DateAndAuthor;
