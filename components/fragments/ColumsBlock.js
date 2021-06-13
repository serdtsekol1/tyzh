import React from "react";


import ColumnsBlockItem from "./ColumnsBlockItem.js";
import Fragment from "../fragments/Fragment";


function ColumnsBlock(props) {
  const columnsComponents = props.columns
    .map(column => (
      <ColumnsBlockItem noneImage={props.noneImages} key={column.id} columnItem={column} />
    ));
  return (
    <Fragment
      size={props.size ? props.size : "small"}
      noShowMore={props.noShowMore}
      showMoreLink={props.showMoreLink}
      redButton={props.redButton}
      showMoreTitle={props.showMoreTitle}
      showMoreHref ={props.showMoreHref}
    >
      {columnsComponents}
      {props.children}
    </Fragment>
  );
}

export default ColumnsBlock;
