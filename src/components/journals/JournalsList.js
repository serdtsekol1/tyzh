import React, { useState, useEffect } from "react";
function JournalsList({ match }) {
  return (
    <div className="journals col">
      <h1>{`Journals ${match.params.year}`}</h1>
    </div>
  );
}
export default JournalsList;
