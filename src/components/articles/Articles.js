import React, { useState, useEffect}  from "react";
import ReactPaginate from "react-paginate";
import { useHistory, Redirect } from "react-router-dom";
import config from "react-global-configuration";
import axios from 'axios';

import SmallNewsBlock from "../home/SmallNewsBlock";
import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ArticlesBlock from "../fragments/AtriclesBlock";
import BannersPanel from "../fragments/BannersPanel";
import Header from "../common/Header";
import LastJournalBanner from "../fragments/LastJournalBanner";
import categoties from "../common/categories.json";
import MetaTags from "../common/MetaTagsComponent";

import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import SkeletonMainArticle from "../loading_skeletons/SkeletonMainArticle";
import GorizontalAdBanner from "../fragments/GorizontalAdBanner";



function getCategory(url){
  let initialCategory= url.split("/")[1];
  let initialCatgoryAPI;
  if (initialCategory!="Publications") {
    if (categoties.filter(category =>  category.category_id == initialCategory)
        .length > 0){

      initialCatgoryAPI= categoties.find(category => {
          return category.category_id == initialCategory;
      }
      ).category_name;
    }
   
  
  }
  return [initialCategory, initialCatgoryAPI];
}




function Articles({ match }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(match.params.page);
  const [pagesCount, setPagesCount] = useState(0);
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  let [initialCategory, initialCategoryAPI] = getCategory(match.url);
  let initialPageNumber = 0;
  if (match.params.page) initialPageNumber = match.params.page - 1;

 
  useEffect (()=>{
    setLoading(true);
    [initialCategory, initialCategoryAPI] = getCategory(match.url);
    const fetchArticles = async (page) => {
      let limit = 11;
      let apiUrl;   
      if (initialCategoryAPI) 
        apiUrl = `${config.get("apiDomain")}/publications/list/${initialCategoryAPI}/?limit=${limit}&offset=${(page-1)*limit}`;
      else apiUrl = `${config.get("apiDomain")}/publications/?limit=${limit}&offset=${(page-1)*limit}`;

      await axios.get(apiUrl)
      .then(res =>{ 
        setArticles(res.data.results);
        setPagesCount(Math.floor(res.data.count/limit)+1);
        setLoading(false);
        })
      .catch(err => history.push("/page-not-found")
        );  
      };
      
      if (page!=match.params.page) fetchArticles(match.params.page);
      else fetchArticles(page);
  },[page,match.params.page,match.url]);
  

  const handlePageClick = async (data) => {
    if (initialCategory) history.push(`/${initialCategory}/page=${data.selected+1}`);
    else history.push(`/Publications/page=${data.selected+1}`);
    setPage(data.selected+1);
    match.params.page = data.selected+1;
  };
 
  
  let mainArticle = articles.slice(0,1)
  .map(article => (
    <ArticleBlockItem 
    mainArticle={true} categorial={ initialCategoryAPI?true:false} key={article.id} articleItem={article} />
  ));

  let pageHeader = initialCategoryAPI? initialCategoryAPI: "Статті";


  return (
    <div>
    {initialCategory=="not-a-category"?<Redirect to="/page-not-found"/>:
    <div className="container">
  
    <MetaTags title={"Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі"} 
          abstract={"Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі"}
          ct100={true} keywords={"Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі"}
          />
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
         
          <ArticlesBlock categorial ={initialCategoryAPI?true:false} quantity={10} articles={articles.slice(1,11)} noShowMore={true}>
          <GorizontalAdBanner mixadvert={true} redTram={true} randomBoolean={(Math.random() >= 0.5)}/>
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
        <div className="d-none d-md-block col-md-3">
          <LastJournalBanner />
          <BannersPanel rubric={initialCategoryAPI} admixer_id="admixed-articles" custom_banner={true} admixer={true} adriver={true} adriver_id="adriver-articles"  />
        </div>
        </div>

      </div>
          }
          </div>
  
  );
}
export default Articles;
