import React, { useState, useEffect} from "react";
import axios from 'axios';
import config from "react-global-configuration";


import HomeAuthorsBlockItem from "./HomeAuthorsBlockItem.js";
import Fragment from "../fragments/Fragment";
import Header from "../common/Header";


function HomeAuthorsSmallBlock() {
  const [authors, setAuthors] = useState([]);
  useEffect (()=>{
    const fetchData= async () => {
      let limit = 4;
      await axios.get(`${config.get("apiDomain")}/columns/?limit=${limit}`)
      .then(res =>{ 
        setAuthors(res.data.results);
      })
      .catch(err => console.log(err));
     };
     fetchData();
  },[]);
  const authorsComponents = authors.map(author => (
    <HomeAuthorsBlockItem size="small" key={author.id} columnItem={author} />
  ));
  return (
    <div className="authors-small-block">
      <Header size="small" title="Останні колонки" />
      <Fragment size="medium" showMoreLink="/columns">{authorsComponents.slice(0, 4)}</Fragment>
    </div>
  );
}
export default HomeAuthorsSmallBlock;
