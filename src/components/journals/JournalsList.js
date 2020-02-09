import React from "react";
function JournalsList({ match }) {
  return (
    <div className="journals">
      <h1>{`Journals ${match.params.year}`}</h1>
    </div>
  );
}
export default JournalsList;
