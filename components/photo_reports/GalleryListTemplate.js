import React, { useState, useEffect, useRef } from "react"
import ReactPaginate from "react-paginate"
import Router, { useRouter } from "next/router"
import Skeleton from "react-loading-skeleton";

import Header from "../common/Header";
import BannersPanel from "../fragments/BannersPanel";
import PhotoReportItem from "../fragments/PhotoReportItem";
import LastJournalBanner from "../fragments/LastJournalBanner";
import GorizontalAdBanner from "../fragments/GorizontalAdBanner";


function GalleryListTemplate(props) {
  const pageHeader = "ФОТОРЕПОРТАЖ"
  let articles = props.articles.results

  const router = useRouter()
  const query = router.query
  const articlesRef = useRef(null)

  let initialPageNumber = 0
  if (query.page) initialPageNumber = query.page - 1
  let pagesCount = Math.floor(props.articles.count/13)

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
    query.page = page.selected + 1
    router.push({
      pathname: path,
      query: query,
    })
    if (articlesRef.current) {
      articlesRef.current.scrollIntoView()
    }
  }

  const firstPhoto = articles[0];
  const link = "Gallery";

  const photoReportsComponents = articles.slice(1,13).map(photoReport => (
        <div className="col-12 col-md-6" key={photoReport.id+100}>
            <PhotoReportItem key={photoReport.id} reportItem={photoReport} link={link} />
        </div>
      ));

  return (
    <div>
      <div ref={articlesRef} className="container">
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col-12">
            <Header size="small" style={{ fontSize: 32 }} title={pageHeader} />
          </div>
          <div className="col-12">
            {loading && <Skeleton duration={1} height={1800} width={'100%'}/>}
            {!loading &&
              <PhotoReportItem key={firstPhoto.id} main={true} reportItem={firstPhoto} link={link} />
            }
          </div>
          {photoReportsComponents}
          <div className="col-12">
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
      </div>
    </div>
  );
}


export default GalleryListTemplate;
