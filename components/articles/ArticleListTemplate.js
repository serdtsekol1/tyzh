import React, { useState, useEffect, useRef } from "react"
import ReactPaginate from "react-paginate"
import Router, { useRouter } from "next/router"

import categoties from "../common/categories.json";
import Header from "../common/Header";
import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ArticlesBlock from "../fragments/AtriclesBlock";
import BannersPanel from "../fragments/BannersPanel";
import LastJournalBanner from "../fragments/LastJournalBanner";
import GorizontalAdBanner from "../fragments/GorizontalAdBanner";

import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import SkeletonMainArticle from "../loading_skeletons/SkeletonMainArticle";


function ArticleListTemplate(props) {
  const pageHeader = props.category.name
  const initialCategory = props.category.slug
  let categorial = true
  if (initialCategory === "Publications") {
    categorial = false
  }

  let articles = props.articles.results

  const router = useRouter()
  const query = router.query
  const articlesRef = useRef(null)

  let initialPageNumber = 0
  let pagesCount = Math.floor(props.articles.count/10)

  const [loading, setLoading] = useState(false)
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading)
    Router.events.on("routeChangeComplete", stopLoading)
    return () => {
      Router.events.off("routeChangeStart", startLoading)
      Router.events.off("routeChangeComplete", stopLoading)
    }
  }, [articles])

  const handlePagination = page => {
    const path = router.pathname
    query.page = page.selected + 1
    router.push({
      pathname: path,
      query: query,
    })
    if (articlesRef.current) {
      articlesRef.current.scrollIntoView()
    }
  }

  let mainArticle = articles[0]

  return (
    <div>
      <div ref={articlesRef} className="container">
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col-12 col-md-9">
          <div className="">
            <Header size="small" style={{ fontSize: 32 }} title={pageHeader} />
            {loading &&
              <div>
                <p className="skeleton-header"></p>
                <SkeletonMainArticle/>
                <SkeletonArticlesBlock quantity={10} />
              </div>
            }
            {!loading &&
              <div>
                <ArticleBlockItem
                  mainArticle={true} categorial={categorial} key={mainArticle.id} articleItem={mainArticle} />
                <ArticlesBlock categorial ={categorial} quantity={10} articles={articles.slice(1,11)} noShowMore={true}>
                  <GorizontalAdBanner mixadvert={true} redTram={true} randomBoolean={(Math.random() >= 0.5)}/>
                </ArticlesBlock>
              </div>
            }
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
                onPageChange={handlePagination}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
        <div className="d-none d-md-block col-md-3">
          <LastJournalBanner />
          <BannersPanel rubric={initialCategory} admixer_id="admixed-articles" custom_banner={true} admixer={true} adriver={true} adriver_id="adriver-articles"  />
        </div>
        </div>
      </div>
    </div>
  );
}


export default ArticleListTemplate;
