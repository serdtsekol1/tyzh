import React, { useState, useEffect}  from "react";
import axios from 'axios';
import config from 'react-global-configuration';
import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import ArticleTemplate from "./ArticleTemplate";


import "../common/css/post.scss";


function Article({ match }) {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  let articleComponent;
  useEffect (()=>{
    setLoading(true);
    const fetchData = async () => {
      
      let apiUrl = `${config.get("apiDomain")}/publications/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{ 
      
        setArticle(res.data);
        setLoading(false);

        
        
        })
      .catch(err => console.log(err));  
      };
      fetchData();
    
  },[match.params.id]);
  articleComponent = <ArticleTemplate article={article}/>;
  
  return (
    <div>
    {loading && <SkeletonPublication article={true}/>}
       {!loading &&
    <div>{articleComponent}</div>
  }
  </div>
  );
}

export default Article;
