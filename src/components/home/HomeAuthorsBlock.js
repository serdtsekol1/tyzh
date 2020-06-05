import React from "react";

import HomeAuthorsBlockItem from "./HomeAuthorsBlockItem";
import Fragment from "../fragments/Fragment";
import columnsData from "../columnData.json";
import "../fragments/css/authors_block.scss";

function HomeAuthorsBlock() {
  const columnsComponents = columnsData.map(column => (
    <HomeAuthorsBlockItem size="big" key={column.id} columnItem={column} />
  ));
  return (
    <Fragment size="big">
      <div className="authors-block row">
        <div className="col-12 col-md-6 authors-half-block">
          <div className="col-12 col-md-9 authors-items-wrap">
            {columnsComponents.slice(0, 3)}
          </div>
        </div>
        <div className="col-12 col-md-6 authors-half-block">
          <div className="col-12 col-md-9 authors-items-wrap">
            {columnsComponents.slice(3, 6)}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomeAuthorsBlock;
