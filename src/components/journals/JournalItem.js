import React from "react";
import "./journalItem.scss";
import Button from "../common/Button";

function JournalItem(props) {
  return (
    <div className=" journal">
      <img
        className="journal-cover"
        src={require(`../../images/journals/${props.journalItem.journal_image}`)}
        alt={`Український тиждень №${props.journalItem.journal_number}`}
      />
      <p className="journal-title">Український тиждень</p>
      <p className="journal-number">{`№ ${props.journalItem.journal_number} (${props.journalItem.journal_number_old})`}</p>
      <p className="journal-period">{props.journalItem.period}</p>
      {props.journalItem.isSpecialEdition ? (
        <Button redButton={true} title="Завантажити pdf" />
      ) : (
        ""
      )}
    </div>
  );
}

export default JournalItem;
