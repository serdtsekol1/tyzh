import React, { useState, useEffect} from "react";
import config from "react-global-configuration";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Header from "../common/Header";
import ReactPaginate from "react-paginate";
import ColumnsBlock from "../fragments/ColumsBlock";
import AuthorsBlock from "../fragments/AuthorsBlock";
import BannersPanel from "../fragments/BannersPanel";



function Columns({match}){
    const [columns, setColumns] = useState([]);
    const [page, setPage] = useState(match.params.page);
    const [pagesCount, setPagesCount] = useState(0);
  
    let history = useHistory();
    let initialPageNumber = 0;
    if (match.params.page) initialPageNumber = match.params.page - 1;

    useEffect (()=>{
      const fetchData = async (page) => {
        let limit = 12;
        let apiUrl = `${config.get("apiDomain")}/columns/?limit=${limit}`;
        if (page)  apiUrl = `${apiUrl}&offset=${(page-1)*limit}`;
  
        await axios.get(apiUrl)
        .then(res =>{ 
          setColumns(res.data.results);
          setPagesCount(Math.floor(res.data.count/limit)+1);
         
          })
        .catch(err => console.log(err));  
        };
        if (page!=match.params.page) fetchData(match.params.page);
        else fetchData(page);
    },[page,match.params.page]);

  const handlePageClick = async (data) => {
    history.push(`/columns/page=${data.selected+1}`);
    setPage();
    match.params.page = data.selected+1;
  };

    return (
        <div className="container">
          <div className="row" style={{ marginTop: 10 }}>
            <div className="col-12">
              {/* <Header  size="small" style={{ fontSize: 32 }} title="Вибрані автори" /> */}
              {/* <AuthorsBlock quantity={6}></AuthorsBlock> */}
              <Header size="big" title="Останні колонки" />
              <div className="row">
                <div className="col-12 col-md-9">
                 <ColumnsBlock columns = {columns} quantity={12}>
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
                </div>
                <div className="col-12 col-md-3">
                  <BannersPanel/>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
}

export default Columns;