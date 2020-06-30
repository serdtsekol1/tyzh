import React, { useState, useEffect}  from "react";
import config from "react-global-configuration";
import axios from 'axios';

import ArticleBlockItem from "./ArticleBlockItem.js";
import Button from "../common/Button";
import Fragment from "../fragments/Fragment";


function ArticlesBlock(props) {
  const [articles, setArticles] = useState([]);
  let articlesComponents = "";
  
  useEffect (()=>{
    const fetchArticles = async () => {
      let limit = props.quantity;
      let apiUrl = `${config.get("apiDomain")}/publications/?limit=${limit}`;
      await axios.get(apiUrl)
      .then(res =>{ 
        setArticles(res.data.results);
        
        })
      .catch(err => console.log(err));  
      };
      fetchArticles();
  },[]);
  if (props.lastArticles){
    articlesComponents = articles.map(article => (
      <ArticleBlockItem small={true} mainArticle ={true} key={article.id} articleItem={article} />
    ));
  }
  else { articlesComponents = props.articles
    .map(article => (
      <ArticleBlockItem categorial={props.categorial} key={article.id} articleItem={article} />
    ));}

    
  return (
    <Fragment
      size="big"
      noShowMore={props.noShowMore}
      showMoreLink={props.showMoreLink}
    >
      {articlesComponents}
      {props.children}
    </Fragment>
  );
}

export default ArticlesBlock;
