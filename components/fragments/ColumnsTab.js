import React, { useState, useEffect} from "react";
import axios from 'axios';
import config from "react-global-configuration";
import ReactPaginate from "react-paginate";

import ColumnsBlock from "../fragments/ColumsBlock";


import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import Fragment from "../fragments/Fragment";


function ColumnsTab(props){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(0);

    let [authorColumns, setAuthorColumns] = useState({});
    useEffect (()=>{
      setLoading(true);
    const fetchData = async ()  => {
        let limit = 12;
        let apiUrl;
        if (props.authorId) apiUrl = `${process.env.apiDomain}/columns/author/${props.authorId}/?limit=${limit}&offset=${(page-1)*limit}`;
        if (props.tag) apiUrl = `${process.env.apiDomain}/columns/tags/${props.tag}/?limit=${limit}&offset=${(page-1)*limit}`;
        await axios.get(apiUrl)
        .then(res =>{ 
            setAuthorColumns(res.data.results);
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
       <ColumnsBlock noneImages={true} noShowMore={true} columns = {(Object.keys(authorColumns).length === 0)?[]:authorColumns} ></ColumnsBlock>

        }
         {pagesCount-1? <div className="">
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
export default ColumnsTab;
