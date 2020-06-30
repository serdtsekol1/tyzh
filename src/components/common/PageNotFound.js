import React from "react";

function PageNotFound() {
  return (
    <div className="container">
      <div align="center">
        <h2>На жаль, не можемо знайти сторінку за цим посиланням</h2>
        <img
          align="center"
          style={{ height: "100%", width:"100%", marginBottom: 50 }}
          src={require("../../images/error-image.svg")}
        />
      </div>
    </div>
  );
}

export default PageNotFound;
