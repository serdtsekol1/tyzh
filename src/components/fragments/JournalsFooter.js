import React from "react";
import journalsData from "../journalData";
import JournalItem from "../journals/JournalItem";
import Fragment from "./Fragment";

function JournalsFooter() {
  const journalsComponents = journalsData.slice(0, 4).map(journal => (
    <div key={journal.id - 1000} className="col-12 col-md-3">
      <JournalItem key={journal.id} journalItem={journal} />
    </div>
  ));
  return (
    <Fragment size="big">
      <div className="row">{journalsComponents}</div>
    </Fragment>
  );
}

export default JournalsFooter;
