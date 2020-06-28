import React, { useState, useEffect}  from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
import SmallNewsBlock from "../home/SmallNewsBlock";
import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ArticlesBlock from "../fragments/AtriclesBlock";
import BannersPanel from "../fragments/BannersPanel";
import Header from "../common/Header";
import articlesData from "../articlesData.json";
import LastJournalBanner from "../fragments/LastJournalBanner";
import categoties from "../common/categories.json";
import config from "react-global-configuration";
import axios from 'axios';

function Articles({ match }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(match.params.page);
  const [pagesCount, setPagesCount] = useState(0);

  console.log(config.get("apiDomain"));
  let history = useHistory();
  let initialCategory = "all-categories";
  if (match.params.category) initialCategory = match.params.category;
  let initialPageNumber = 0;
  if (match.params.page) initialPageNumber = match.params.page - 1;

 
  useEffect (()=>{
    const fetchArticles = async (page) => {
      let limit = 10;
      let apiUrl;
      if (page)  apiUrl = `${config.get("apiDomain")}/publications/?limit=${limit}&offset=${(page-1)*limit}`;
      else apiUrl = `${config.get("apiDomain")}/publications/?limit=${limit}`;
      await axios.get(apiUrl)
      .then(res =>{ 
        console.log(res);
        setArticles(res.data.results);
        setPagesCount(Math.floor(res.data.count/limit)+1);
        history.push(`/articles/${initialCategory}/page=${page}`);
        })
      .catch(err => console.log(err));  
      };
      if (page!=match.params.page) fetchArticles(match.params.page);
      else fetchArticles(page);
  },[page,match.params.page]);
 

 
  
  let mainArticle = articles.slice(0,1)
  .map(article => (
    <ArticleBlockItem imageStyle={{ height: 420 }}
    mainArticle={true} key={article.id} articleItem={article} />
  ));


  const handlePageClick = async (data) => {
    setPage(data.selected+1);
    match.params.page = data.selected+1;
  };


  let pageHeader;
  if (
    categoties.filter(category => category.category_id == initialCategory)
      .length > 0
  ) {
    pageHeader = categoties.find(
      category => category.category_id == initialCategory.toLowerCase()
    ).category_name;
  } else {
    history.push(`/page-not-found`);
  }

  return (
    <div className="container">
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12 col-md-9">
          <Header size="small" style={{ fontSize: 32 }} title={pageHeader} />
         
          {mainArticle}
          <ArticlesBlock quantity={10} articles={articles} noShowMore={true}>
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
