import React, { useState, useEffect}  from "react";
import axios from 'axios';
import config from 'react-global-configuration';

import ArticleTemplate from "./ArticleTemplate";


import "../common/css/post.scss";


function Article({ match }) {
  const [article, setArticle] = useState({});
  
  let articleComponent;
  useEffect (()=>{
    const fetchData = async () => {
      
      let apiUrl = `${config.get("apiDomain")}/publications/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{ 
        console.log(res.data);
        setArticle(res.data);
        
        
        })
      .catch(err => console.log(err));  
      };
      fetchData();
    
  },[match.params.id]);
  articleComponent = <ArticleTemplate article={article}/>;
  
  return (
    <div>{articleComponent}</div>
  );
}

export default Article;
