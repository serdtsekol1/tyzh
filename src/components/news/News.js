import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";

import ReactPaginate from "react-paginate";

import Header from "../common/Header";
import NewsBlock from "../fragments/NewsBlock";
import BannersPanel from "../fragments/BannersPanel";
import newsData from "../newsData.json";
import PressItem from "../fragments/PressItem";
import LastJournalBanner from "../fragments/LastJournalBanner";

function News({match}){
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(match.params.page);
  const [pagesCount, setPagesCount] = useState(0);
  let history = useHistory();
  let initialPageNumber = 0;
  if (match.params.page) initialPageNumber = match.params.page - 1;

  useEffect (()=>{
    const fetchData = async (page) => {
      let limit = 20;
      let apiUrl;
      if (page)  apiUrl = `${config.get("apiDomain")}/news/?limit=${limit}&offset=${(page-1)*limit}`;
      else apiUrl = `${config.get("apiDomain")}/news/?limit=${limit}`;
      await axios.get(apiUrl)
      .then(res =>{ 
        console.log(res);
        setNews(res.data.results);
        setPagesCount(Math.floor(res.data.count/limit)+1);
        history.push(`/news/page=${page}`);
        })
      .catch(err => console.log(err));  
      };
      if (page!=match.params.page) fetchData(match.params.page);
      else fetchData(page);
  },[page,match.params.page]);

  const handlePageClick = async (data) => {
    setPage(data.selected+1);
    match.params.page = data.selected+1;
  };

  

  return (
      <div className="container">
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col-12">
            <Header  size="small" style={{ fontSize: 32 }} title="Новини" />
            <div className="row">
              <div className="col-12 col-md-9">
              <NewsBlock quantity={20} news={news} />
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
              </div>
              <div className="col-12 col-md-3">
                  <LastJournalBanner/>
                <BannersPanel/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default News;