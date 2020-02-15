import React from "react";
import journalsData from "../journalData.json";
import JournalItem from "./JournalItem";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import SpecialEditions from "./SpecialEditions";

function JournalsList({ match }) {
  const journalsComponents = journalsData.map(journal => (
    <JournalItem key={journal.id} journalItem={journal} />
  ));
  return (
    <div>
      <div className="container">
        <div className="row journals-list">
          {journalsComponents.slice(0, 8)}
          <SubscriptionBanner style={{ marginBottom: "72px" }} />
          {journalsComponents.slice(8, 16)}
        </div>
      </div>
      <SpecialEditions components={journalsComponents.slice(16, 23)} />
    </div>
  );
}
export default JournalsList;
