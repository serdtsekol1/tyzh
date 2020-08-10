import React, { useState, useEffect} from "react";
import axios from 'axios';
import config from "react-global-configuration";


import HomeAuthorsBlockItem from "./HomeAuthorsBlockItem.js";
import Fragment from "../fragments/Fragment";
import Header from "../common/Header";
import SkeletonNewsBlock from "../loading_skeletons/SkeletonNewsBlock";


function HomeAuthorsSmallBlock() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (()=>{
    setLoading(true);
    const fetchData= async () => {
      let limit = 4;
      await axios.get(`${config.get("apiDomain")}/columns/?limit=${limit}`)
      .then(res =>{ 
        setLoading(false);
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
       {loading && <SkeletonNewsBlock quantity = {4} size="small"/>}
        {!loading &&
        <div>
      <Header size="small" title="Останні колонки" />
      
      <Fragment size="medium" showMoreLink="/Columns">{authorsComponents.slice(0, 4)}</Fragment>
      </div>
    }
    </div>
  );
}
export default HomeAuthorsSmallBlock;
