import React, { useState, useEffect} from "react";
import config from "react-global-configuration";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Header from "../common/Header";
import ReactPaginate from "react-paginate";
import ColumnsBlock from "../fragments/ColumsBlock";
import AuthorsBlock from "../fragments/AuthorsBlock";
import BannersPanel from "../fragments/BannersPanel";

import SkeletonNewsPage from "../loading_skeletons/SkeletonNewsPage";
import MetaTags from "../common/MetaTagsComponent";

function Columns({match}){
    const [columns, setColumns] = useState([]);
    const [page, setPage] = useState(match.params.page);
    const [pagesCount, setPagesCount] = useState(0);
    const [loading, setLoading] = useState(false);
  
    let history = useHistory();
    let initialPageNumber = 0;
    if (match.params.page) initialPageNumber = match.params.page - 1;

    useEffect (()=>{
      setLoading(true);
      const fetchData = async (page) => {
        let limit = 12;
        let apiUrl = `${config.get("apiDomain")}/columns/?limit=${limit}&offset=${(page-1)*limit}`;
        
  
        await axios.get(apiUrl)
        .then(res =>{ 
          setColumns(res.data.results);
          setPagesCount(Math.floor(res.data.count/limit)+1);
          setLoading(false);
          })
        .catch(err =>  history.push("/page-not-found"));  
        };
        if (page!=match.params.page) fetchData(match.params.page);
        else fetchData(page);
    },[page,match.params.page]);

  const handlePageClick = async (data) => {
    history.push(`/Columns/page=${data.selected+1}`);
    setPage();
    match.params.page = data.selected+1;
  };

    return (
        <div className="container">
          <MetaTags title={"Думки впливових людей, колонки закордонних експертів"} 
          abstract={"Думки впливових людей, колонки закордонних експертів"}
          ct100={true} keywords={"Думки впливових людей, колонки закордонних експертів"}
          />
          <div className="row" style={{ marginTop: 10 }}>
            <div className="col-12">
              {/* <Header  size="small" style={{ fontSize: 32 }} title="Вибрані автори" /> */}
              {/* <AuthorsBlock quantity={6}></AuthorsBlock> */}
             
              <Header size="big" title="Останні колонки" />
              
              <div className="row">
            
                <div className="col-12 col-md-9">
                {loading && <SkeletonNewsPage/>}
               {!loading && 
                 <ColumnsBlock  noShowMore={true} columns = {columns} quantity={12}>
                 <div className="pagination-articles">
                  <ReactPaginate
                    previousLabel={"Назад"}
                    nextLabel={"Далі"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    initialPage={initialPageNumber}
                    pageCount={pagesCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  /></div>
                  </ColumnsBlock>
                }
                </div>
               
                <div className="col-12 col-md-3">
                  <BannersPanel my={true}  admixer_id="admixed-columns" admixer={true} ria={true} adriver={true} adriver_id="adriver-filter"  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
}

export default Columns;