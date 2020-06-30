import React, { useState, useEffect}  from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
import config from "react-global-configuration";
import axios from 'axios';

import SmallNewsBlock from "../home/SmallNewsBlock";
import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ArticlesBlock from "../fragments/AtriclesBlock";
import BannersPanel from "../fragments/BannersPanel";
import Header from "../common/Header";
import articlesData from "../articlesData.json";
import LastJournalBanner from "../fragments/LastJournalBanner";
import categoties from "../common/categories.json";

import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import SkeletonMainArticle from "../loading_skeletons/SkeletonMainArticle";

function Articles({ match }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(match.params.page);
  const [pagesCount, setPagesCount] = useState(0);
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  let initialCategory = "all-categories";
  if (match.params.category) initialCategory = match.params.category;
  let initialPageNumber = 0;
  if (match.params.page) initialPageNumber = match.params.page - 1;

 
  useEffect (()=>{
    setLoading(true);
    const fetchArticles = async (page) => {
      let limit = 11;
      let apiUrl;   
      if (initialCategory != "all-categories") 
        apiUrl = `${config.get("apiDomain")}/publications/list/${initialCategory}/?limit=${limit}&offset=${(page-1)*limit}`;
      else apiUrl = `${config.get("apiDomain")}/publications/?limit=${limit}`;
      if (page)  apiUrl = `${apiUrl}&offset=${(page-1)*limit}`;

      await axios.get(apiUrl)
      .then(res =>{ 
        setArticles(res.data.results);
        
        setPagesCount(Math.floor(res.data.count/limit)+1);
        
        setLoading(false);
        })
      .catch(err => console.log(err));  
      };
      if (page!=match.params.page) fetchArticles(match.params.page);
      else fetchArticles(page);
  },[page,match.params.category]);
  
  // useEffect (()=>{
  //   setPage(match.params.page);
  // },[match.params.page]);
 

  const handlePageClick = async (data) => {
    history.push(`/articles/${initialCategory}/page=${data.selected+1}`);
    setPage(data.selected+1);
    match.params.page = data.selected+1;
  };
 
  
  let mainArticle = articles.slice(0,1)
  .map(article => (
    <ArticleBlockItem 
    mainArticle={true} categorial={ match.params.category!="all-categories"?true:false} key={article.id} articleItem={article} />
  ));




  let pageHeader;
  if (
    categoties.filter(category => category.category_name == initialCategory)
      .length > 0
  ) {
    pageHeader = categoties.find(
      category => category.category_name == initialCategory
    ).category_name;
  } else {
    //history.push(`/page-not-found`);
  }

  return (
    <div className="container">
    
    
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12 col-md-9">
        {loading && <div>
          <p className="skeleton-header"></p>
          <SkeletonMainArticle/>
        <SkeletonArticlesBlock quantity={10} /></div>}
        {!loading &&
        <div className="">
          <Header size="small" style={{ fontSize: 32 }} title={pageHeader} />
          
          {mainArticle}
          <ArticlesBlock categorial ={match.params.category!="all-categories"?true:false} quantity={10} articles={articles.slice(1,11)} noShowMore={true}>
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
          </ArticlesBlock>
          </div>
           }
        </div>
       
        <div className="d-none d-md-block col-md-3 ">
          <SmallNewsBlock />
          <LastJournalBanner />
          <BannersPanel secondBanner={false} />
        </div>
        </div>
      </div>
  
  );
}
export default Articles;
