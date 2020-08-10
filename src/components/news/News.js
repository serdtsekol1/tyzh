import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";

import NewsBlock from "./NewsBlock";
import BannersPanel from "../fragments/BannersPanel";
import LastJournalBanner from "../fragments/LastJournalBanner";
import ArticlesBlock from "../fragments/AtriclesBlock";


import Fragment from "../fragments/Fragment";
import Header from "../common/Header";
import ReactPaginate from "react-paginate";
import SkeletonNewsPage from "../loading_skeletons/SkeletonNewsPage";

import "./news.scss";
import MetaTags from "../common/MetaTagsComponent";

function News({match}){
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(match.params.page);
  const [pagesCount, setPagesCount] = useState(0);
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  let initialPageNumber = 0;
  if (match.params.page) initialPageNumber = match.params.page - 1;

  
  useEffect (()=>{
    setLoading(true);
    const fetchData = async (page)  => {
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
        setLoading(false);
        })
      .catch(err =>  history.push("/page-not-found"));  
      };
      if (page!=match.params.page) fetchData(match.params.page);
      else fetchData(page);
  },[page,match.params.page]);
  let options = {  month: 'long', day: 'numeric' };
  const groupedNewsComponents = news.map(news => <div class="news-wrap" id={news.date.getDate()*10}>
    <p class="news-date">{news.date.toLocaleDateString('uK-UK', options)}</p>
   <NewsBlock id={news.date.getDate()} news={news.news} /></div>);

  const handlePageClick = async (data) => {
    history.push(`/News/page=${data.selected+1}`);
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
  
    
     <div className="container">
       <MetaTags/>
     <div className="row" >
       <div className="col-12">
         <div className="row">
           <div className="col-12 col-md-9">
           {loading && <SkeletonNewsPage/>}
           {!loading && 
             <Fragment size={"big"} noShowMore={true}>
               <Header  size="small" style={{ fontSize: 32 }} title="Новини" />
                {groupedNewsComponents}
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
             </Fragment>
            }
           </div>
           <div className="d-none d-md-block col-md-3" style={{ marginTop: 10 }}>
           <Header title=" Останні статті" size="small" />
           <ArticlesBlock lastArticles={true} quantity={3} noShowMore={true}/>
               <LastJournalBanner/>
             <BannersPanel yottos={true} ria={true} />
           </div>
         </div>
       </div>
     </div>
   </div>

  
    );
}

export default News;