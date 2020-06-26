import React from "react";

import ColumnsBlockItem from "./ColumnsBlockItem.js";
import Button from "../common/Button";
import Fragment from "../fragments/Fragment";
import columnsData from "../columnData.json";

function ColumnsBlock(props) {
  const columnsComponents = columnsData
    .slice(0, parseInt(props.quantity))
    .map(column => (
      <ColumnsBlockItem key={column.id} columnItem={column} />
    ));
  return (
    <Fragment
      size="big"
      noShowMore={true}
    >
      {columnsComponents}
      {props.children}
    </Fragment>
  );
}

export default ColumnsBlock;
