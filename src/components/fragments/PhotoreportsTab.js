import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import config from "react-global-configuration";
import ReactPaginate from "react-paginate";
import $ from "jquery";

import BannersPanel from '../fragments/BannersPanel';
import Button from "../common/Button";
import PhotoReportItem from "../fragments/PhotoReportItem";

import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import Fragment from "../fragments/Fragment";


import "../common/css/tabs.scss";
import "../authors/author.scss";


function PhotoreportsTab(props){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(0);
    
 
    let [authorPhotoreports, setAuthorPhotoreports] = useState({});
    useEffect (()=>{
      setLoading(true);
  
      
        
    const fetchData = async ()  => {
        let limit = 10;
        let apiUrl;
        if (props.authorId) apiUrl = `${config.get("apiDomain")}/galleries/author/${props.authorId}/?limit=${limit}&offset=${(page-1)*limit}`;
        if (props.tag) apiUrl = `${config.get("apiDomain")}/galleries/tags/${props.tag}/?limit=${limit}&offset=${(page-1)*limit}`;
        await axios.get(apiUrl)
        .then(res =>{ 
          
            setAuthorPhotoreports(res.data.results);
            setPagesCount(Math.floor(res.data.count/limit)+1);
            setLoading(false);
            })
        .catch(err => console.log(err));  
        };
        
        fetchData();
    },[page]);
    const handlePageClick = (data) => {
       
        setPage(data.selected+1);

    };
    const photoReportsComponents = (Object.keys(authorPhotoreports).length === 0)?"": authorPhotoreports.map(photoReport => (
      <div class="col-12 col-md-6"><PhotoReportItem key={photoReport.id} reportItem={photoReport} /></div>
    ));


        
      
    
    return  <Fragment size={"big"} noShowMore={true}>
        {loading && <SkeletonArticlesBlock  quantity={10} />}
        {!loading &&
       
          <div class="row">{photoReportsComponents}</div>
          
        }
        {pagesCount-1?
          <div className="pagination-articles">
                  <ReactPaginate
                    previousLabel={"Назад"}
                    nextLabel={"Далі"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    
                    pageCount={pagesCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  /></div>
        :""}
     </Fragment>
}
export default PhotoreportsTab;