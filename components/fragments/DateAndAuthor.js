import React from "react";
import Link from "next/link";
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
        src={"/images/icons/date-24px.svg"}
        alt=""
      />
      <p className="date">{props.date}</p>
      {dot ? (
        <div className="dot"></div> 
      ) : (
        ""
      )}
      {props.author ? (
        <div>{props.author.map(author=><Link key={author.id} href={`/Author/${author.id}`}><a><p key={author.id*34} className="author">{author.fullname2ua}</p></a></Link>)}</div>
          
      ) : (
        ""
      )}
    </div>
  );
}

export default DateAndAuthor;
