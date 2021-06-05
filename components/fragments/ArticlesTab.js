import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";
import ReactPaginate from "react-paginate";

import ArticlesBlock from "../fragments/AtriclesBlock";

import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import Fragment from "../fragments/Fragment";


import "../common/css/tabs.scss";
import "../authors/author.scss";


function ArticlesTab(props){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(0);

    let [authorArticles, setAuthorArticles] = useState({});
    useEffect (()=>{
      setLoading(true);

    const fetchData = async ()  => {
        let limit = 7;
        let apiUrl;
        if (props.authorId) apiUrl = `${process.env.apiDomain}/publications/author/${props.authorId}/?limit=${limit}&offset=${(page-1)*limit}`;
        if (props.tag) apiUrl = `${process.env.apiDomain}/publications/tags/${props.tag}/?limit=${limit}&offset=${(page-1)*limit}`;
        await axios.get(apiUrl)
        .then(res =>{ 
            setAuthorArticles(res.data.results);
            setPagesCount(Math.floor(res.data.count/limit)+1);
            setLoading(false);
            })
        .catch(err => console.log(err));  
        };
        fetchData();
    }, [page, props]);
    const handlePageClick = (data) => {
        setPage(data.selected+1);

    };

    return  <Fragment size={"big"} noShowMore={true}>
        {loading && <SkeletonArticlesBlock  quantity={10} />}
        {!loading &&
       <ArticlesBlock noneImages={true} noShowMore={true} articles = {(Object.keys(authorArticles).length === 0)?[]:authorArticles} ></ArticlesBlock>
        }
         {pagesCount-1? <div className="pagination">
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

export default ArticlesTab;
