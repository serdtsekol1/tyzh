import React from "react";
import "./journalItem.scss";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function JournalItem(props) {
  let options = {  month: 'long', day: 'numeric' ,  timeZone: 'UTC'};
  let journalData = props.journalItem;
  

  let date = new Date(journalData.created_ts).toLocaleDateString('uK-UK', options);
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
