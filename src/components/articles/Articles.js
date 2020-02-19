import React from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
import NewsBlock from "../home/NewsBlock";
import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ArticlesBlock from "../fragments/AtriclesBlock";
import BannersPanel from "../fragments/BannersPanel";
import Header from "../common/Header";
import articlesData from "../articlesData.json";
import LastJournalBanner from "../fragments/LastJournalBanner";
import categoties from "../common/categories.json";

function Articles({ match }) {
  let history = useHistory();
  let initialCategory = "all-categories";
  if (match.params.category) initialCategory = match.params.category;
  let initialPageNumber = 0;
  if (match.params.page) initialPageNumber = match.params.page - 1;
  function handlePageClick(data) {
    history.push(`/articles/${initialCategory}/page=${data.selected + 1}`);
  }
  let pageHeader;
  if (
    categoties.filter(category => category.category_id == initialCategory)
      .length > 0
  ) {
    pageHeader = categoties.find(
      category => category.category_id == initialCategory
    ).category_name;
  } else {
    history.push(`/page-not-found`);
  }

  return (
    <div className="container">
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-12 col-md-9">
          <Header size="small" style={{ fontSize: 32 }} title={pageHeader} />
          <ArticleBlockItem
            imageStyle={{ height: 420 }}
            mainArticle={true}
            articleItem={articlesData[5]}
          />
          <ArticlesBlock quantity={11}>
            <ReactPaginate
              previousLabel={"Назад"}
              nextLabel={"Далі"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              initialPage={initialPageNumber}
              pageCount={100}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </ArticlesBlock>
        </div>
        <div className="d-none d-md-block col-md-3 ">
          <NewsBlock />
          <LastJournalBanner />
          <BannersPanel secondBanner={false} />
        </div>
      </div>
    </div>
  );
}
export default Articles;
