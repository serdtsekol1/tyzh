import React, { useState, useEffect}  from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios';
import config from 'react-global-configuration';
import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import ArticleTemplate from "./ArticleTemplate";

import {setCookie, getCookie} from "../../lib/simpleCookieLib"


import "../common/css/post.scss";


function Article({ match }) {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  let articleComponent;
  useEffect (()=>{
    setLoading(true);

    const increaseStatCounter = async () => {
        let path = `/publications/stats/${match.params.id}`;
        let fullUrl = `${process.env.apiDomain}${path}`;
        if(!getCookie(`publications_stats_${match.params.id}`)) {
           
            setCookie(`publications_stats_${match.params.id}`, true, 1, fullUrl);
            await axios.put(fullUrl)
                .catch(err => console.log(err));
        }
    };
    increaseStatCounter();

    const fetchData = async () => {
      let apiUrl = `${process.env.apiDomain}/publications/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{ 

        setArticle(res.data);
        setLoading(false);

        })
      .catch(err => history.push('/page-not-found/'));  
      };
      fetchData();
  }, [match.params.id, history]);
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
