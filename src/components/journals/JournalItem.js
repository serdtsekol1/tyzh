import React from "react";

function Journal(props) {
  return (
    <div className="col-12 col-md-3 journal">
      <img
        src={require(`../../images/journals/${props.journal_image}`)}
        alt={`Український тиждень №${props.journal_image}`}
      />
    </div>
  );
}
