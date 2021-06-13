import React, { useState, useEffect, useRef } from "react"
import ReactPaginate from "react-paginate"
import Router, { useRouter } from "next/router"

import Header from "../common/Header";
import ColumnsBlock from "../fragments/ColumsBlock";
import BannersPanel from "../fragments/BannersPanel";
import LastJournalBanner from "../fragments/LastJournalBanner";
import GorizontalAdBanner from "../fragments/GorizontalAdBanner";

import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";


function ColumnListTemplate(props) {
  const pageHeader = "Останні колонки"

  let articles = props.articles.results

  const router = useRouter()
  const query = router.query
  const articlesRef = useRef(null)

  let initialPageNumber = 0
  if (query.page) initialPageNumber = query.page - 1
  let pagesCount = Math.floor(props.articles.count/10)

  const [users, setArticles] = useState([])

  const [loading, setLoading] = useState(false)
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    setArticles(articles)
    Router.events.on("routeChangeStart", startLoading)
    Router.events.on("routeChangeComplete", stopLoading)
    return () => {
      Router.events.off("routeChangeStart", startLoading)
      Router.events.off("routeChangeComplete", stopLoading)
    }
  }, [articles])

  const handlePagination = page => {
    const path = router.pathname
    query.page = parseInt(page.selected)+1
    router.push({
      pathname: path,
      query: query,
    })
    if (articlesRef.current) {
      articlesRef.current.scrollIntoView()
    }
  }

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
                <SkeletonArticlesBlock quantity={10} />
              </div>
            }
            {!loading &&
              <div>
                 <ColumnsBlock  noShowMore={true} columns={articles} quantity={10}>
                  <GorizontalAdBanner mixadvert={true} redTram={true} randomBoolean={(Math.random() >= 0.5)}/>
                </ColumnsBlock>
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
          <BannersPanel admixer_id="admixed-articles" custom_banner={true} admixer={true} adriver={true} adriver_id="adriver-articles"  />
        </div>
        </div>
      </div>
    </div>
  );
}


export default ColumnListTemplate;
