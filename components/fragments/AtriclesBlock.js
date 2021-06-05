import React, { useState, useEffect}  from "react";
import config from "react-global-configuration";
import axios from 'axios';
import SkeletonNewsBlock from "../loading_skeletons/SkeletonNewsBlock";
import ArticleBlockItem from "./ArticleBlockItem.js";

import Fragment from "../fragments/Fragment";


function ArticlesBlock(props) {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  let articlesComponents = "";

  useEffect (()=>{
    setLoading(true);
    const fetchArticles = async () => {
      let limit = props.quantity;
      let apiUrl = `${process.env.apiDomain}/publications/?limit=${limit}`;
      await axios.get(apiUrl)
      .then(res =>{ 
        setArticles(res.data.results);
        setLoading(false);
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
    <div>
    {loading && <div><SkeletonNewsBlock/><SkeletonNewsBlock/><SkeletonNewsBlock/></div>}
       {!loading &&
      <Fragment
        size="small"
        noShowMore={props.noShowMore}
        showMoreLink={props.showMoreLink}
        redButton={props.redButton}
        showMoreTitle={props.showMoreTitle}
        showMoreHref ={props.showMoreHref}
      >
        {articlesComponents}
        {props.children}
      </Fragment>
      }
      </div>
  );
}

export default ArticlesBlock;
