import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";

import NewsTemplate from "./NewsTemplate";
import NewsBlock from "../fragments/NewsBlock";
import ReactPaginate from "react-paginate";


import "./news.scss";

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
        let firstNewsDate = new Date(res.data.results[0].created_ts);
        let lastNewsDate = new Date(res.data.results[res.data.results.length-1].created_ts);
       
        setNews(getDates(firstNewsDate,lastNewsDate).map(
          date => {
            return {"date" : date, "news" : res.data.results.filter(news => {
              return new Date(news.created_ts).setHours(0,0,0,0) == date.setHours(0,0,0,0);
            })};

          }
        ));

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

  function getDates(startDate, stopDate) {
    let dateArray = new Array();
    let currentDate = startDate;
    while (currentDate.getDate() >= stopDate.getDate()) {      
        dateArray.push(new Date (currentDate));
        currentDate.setDate(currentDate.getDate() - 1);
    }
    return dateArray;
  }
 
  

  return (
    <NewsTemplate news={news}>
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
    </NewsTemplate>
    );
}

export default News;