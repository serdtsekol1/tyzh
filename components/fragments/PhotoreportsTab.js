import React, { useState, useEffect} from "react";
import axios from 'axios';
import config from "react-global-configuration";
import ReactPaginate from "react-paginate";
import PhotoReportItem from "../fragments/PhotoReportItem";

import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import Fragment from "../fragments/Fragment";


function PhotoreportsTab(props){
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(0);
    let [authorPhotoreports, setAuthorPhotoreports] = useState({});
    useEffect (()=>{
      setLoading(true);
    const fetchData = async ()  => {
        setLoading(true);
        let limit = 10;
        let apiUrl;
        if (props.authorId) apiUrl = `${process.env.apiDomain}/galleries/author/${props.authorId}/?limit=${limit}&offset=${(page-1)*limit}`;
        if (props.tag) apiUrl = `${process.env.apiDomain}/galleries/tags/${props.tag}/?limit=${limit}&offset=${(page-1)*limit}`;
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
    const link = "Gallery";
    const photoReportsComponents = (Object.keys(authorPhotoreports).length === 0)?"": authorPhotoreports.map(photoReport => (
      <div className="col-12 col-md-6"><PhotoReportItem key={photoReport.id} reportItem={photoReport} link={link} /></div>
    ));

    return  <Fragment size={"big"} noShowMore={true}>
        {loading && <SkeletonArticlesBlock  quantity={10} />}
        {!loading &&
          <div className="row">{photoReportsComponents}</div>
        }
        {pagesCount-1?
          <div className="pagination-articles">
                  <ReactPaginate
                    previousLabel={"??????????"}
                    nextLabel={"????????"}
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
