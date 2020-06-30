import React, { useState, useEffect} from "react";
import config from "react-global-configuration";
import axios from 'axios';


import ColumnsBlockItem from "./ColumnsBlockItem.js";
import Button from "../common/Button";
import Fragment from "../fragments/Fragment";
import columnsData from "../columnData.json";

function ColumnsBlock(props) {
  const columnsComponents = props.columns
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
