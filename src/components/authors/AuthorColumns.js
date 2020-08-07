import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import config from "react-global-configuration";
import ReactPaginate from "react-paginate";
import $ from "jquery";

import BannersPanel from '../fragments/BannersPanel';
import Button from "../common/Button";
import ColumnsBlock from "../fragments/ColumsBlock";


import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import Fragment from "../fragments/Fragment";


import "../common/css/tabs.scss";
import "./author.scss";


function AuthorColumns(props){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(0);
 
    let [authorColumns, setAuthorColumns] = useState({});
    useEffect (()=>{
      setLoading(true);
  
      
        
    const fetchData = async ()  => {
        let limit = 12;
        let apiUrl = `${config.get("apiDomain")}/columns/author/${props.authorId}/?limit=${limit}&offset=${(page-1)*limit}`;
        await axios.get(apiUrl)
        .then(res =>{ 
            
            setAuthorColumns(res.data.results);
            setPagesCount(Math.floor(res.data.count/limit)+1);
            setLoading(false);
            })
        .catch(err => console.log(err));  
        };
        
        fetchData();
    },[page]);
    const handlePageClick = (data) => {
        // history.push(`/news/page=${data.selected+1}`);
        setPage(data.selected+1);
      

    };


        
      
    
    return  <Fragment size={"big"} noShowMore={true}>
        {loading && <SkeletonArticlesBlock  quantity={10} />}
        {!loading &&
       
       <ColumnsBlock noneImages={true} noShowMore={true} columns = {(Object.keys(authorColumns).length === 0)?[]:authorColumns} ></ColumnsBlock>

          
        }
          <div className="">
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
     </Fragment>
}
export default AuthorColumns;