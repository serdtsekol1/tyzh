import React, { useState, useEffect} from "react";
import config from "react-global-configuration";
import axios from 'axios';


import ColumnsBlockItem from "./ColumnsBlockItem.js";
import Button from "../common/Button";
import Fragment from "../fragments/Fragment";
import columnsData from "../columnData.json";

function ColumnsBlock(props) {
  const [authors, setAuthors] = useState([]);
  useEffect (()=>{
    const fetchData= async () => {
      let limit = 12;
      await axios.get(`${config.get("apiDomain")}/columns/?limit=${limit}`)
      .then(res =>{ 
        setAuthors(res.data.results);
      })
      .catch(err => console.log(err));
     };
     fetchData();
  },[]);
  const columnsComponents = authors
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
