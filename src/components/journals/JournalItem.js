import React from "react";
import "./journalItem.scss";
import Button from "../common/Button";
import { Link } from "react-router-dom";


function getDate(public_ts){
  const today = new Date();
  let options = { month: 'long', day: 'numeric' ,  timeZone: 'UTC'};
  let date = new Date(public_ts).toLocaleDateString('uK-UK', options);
  if (new Date(public_ts).getYear() < today.getYear()) {
      options = {  year:'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'};
      date = new Date(public_ts).toLocaleDateString('uK-UK', options);
    }
  return date;
}


function JournalItem(props) {
  
  let journalData = props.journalItem;
  let date = getDate(journalData.public_ts);
  return (
    <div className="journal">
      <Link to={`/Magazine/${journalData.num}`}>
        <img
          className="journal-cover"
          src={journalData.image1}
          alt={`Український тиждень №${journalData.localnum}`}
        />
      </Link>
      <Link to={`/Magazine/${journalData.num}`}><p className="journal-title">Український тиждень</p></Link>
      <p className="journal-number">{`№ ${journalData.localnum} (${journalData.num})`}</p>
      <p className="journal-period">{date}</p>
      {journalData.isSpecialEdition ? (
        <Button redButton={true} title="Завантажити pdf" />
      ) : (
        ""
      )}
    </div>
  );

}

export default JournalItem;
