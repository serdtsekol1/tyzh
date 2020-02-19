import React from "react";
import journalsData from "../journalData";
import JournalItem from "../journals/JournalItem";
import Fragment from "./Fragment";
import Header from "../common/Header";

function LastJournalBanner() {
  return (
    <div className="fragment-medium">
      <Header size="small" title="Останній номер" />
      <JournalItem journalItem={journalsData[0]} />
    </div>
  );
}

export default LastJournalBanner;
