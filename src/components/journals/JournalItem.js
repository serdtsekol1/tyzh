import React from "react";
import "./journalItem.scss";
import Button from "../common/Button";

function JournalItem(props) {
  let options = {  month: 'long', day: 'numeric' };
  let journalData = props.journalItem;
  console.log(journalData);

  let date = new Date(journalData.created_ts).toLocaleDateString('uK-UK', options);
  return (
    <div className="journal">
      <img
        className="journal-cover"
        src={journalData.image0}
        alt={`Український тиждень №${journalData.journal_number}`}
      />
      <p className="journal-title">Український тиждень</p>
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
