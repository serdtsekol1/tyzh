import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";

import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

function Author({match}){
  const [loading, setLoading] = useState(false);
 
  let [author, setAuthor] = useState({});
  useEffect (()=>{
    setLoading(true);

    const fetchData = async () => {
      
      let apiUrl = `${config.get("apiDomain")}/authors/page/${match.params.id}`;
      await axios.get(apiUrl)
      .then(res =>{ 
     
        setAuthor(res.data);
        setLoading(false);

        })
      .catch(err => console.log(err));  
      };
      fetchData();
    
  },[match.params.id]);
    return (
       
    <div className="container">
      
      {author?
      <div className="row column-header">
        <div className="col-3 col-md-2">
          <div className="column-author-photo-wrap">
            <img className="column-author-photo" 
            src={author.image1url}/>
          </div>
        </div>
        
        <div className="col-9 col-md-10 d-none d-md-block">
          <div className="column-author-info">
           
            <p className="big-post-header column-title ">{author.fullnameua}</p>
            <p className="author-info">{author.info?author.info:"На жаль, у нас немає інформації про цього автора"}</p>
           
            </div>
         </div>
         <div className="col-9 col-md-10 d-block d-md-none">
          <div className="mobile-column-author-info">
           <p className="column-author-name">{author.fullnameua}</p>
           
         </div>
        </div>
      </div>
      :""}
    </div>
    );
}

export default Author;