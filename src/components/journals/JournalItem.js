import React from "react";
import "./journalItem.scss";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function JournalItem(props) {
  let options = {  month: 'long', day: 'numeric' };
  let journalData = props.journalItem;
  

  let date = new Date(journalData.created_ts).toLocaleDateString('uK-UK', options);
  return (
    <div className="journal">
      <Link to={`/journal/${journalData.id}`}>
        <img
          className="journal-cover"
          src={journalData.image1}
          alt={`Український тиждень №${journalData.journal_number}`}
        />
      </Link>
      <Link to={`/journal/${journalData.id}`}><p className="journal-title">Український тиждень</p></Link>
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
