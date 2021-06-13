import React, { useState, useEffect, useRef}  from "react";
import ReactPaginate from "react-paginate";
import config from "react-global-configuration";
import axios from 'axios';

import BannersPanel from "../fragments/BannersPanel";
import Header from "../common/Header";
import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ColumnsBlockItem from "../fragments/ColumnsBlockItem";
import Fragment from "../fragments/Fragment";
import Router, { useRouter } from "next/router"

import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";


function SubjectArticles({pageNum, id,...match}) {
  const [subjectArticles, setSubjectArticles] = useState([]);
  const [page, setPage] = useState(pageNum);
  const [pagesCount, setPagesCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const query = router.query

  let initialPageNumber = 0;
  if (pageNum) initialPageNumber = Number(pageNum) - 1;

  useEffect (()=>{
    setLoading(true);

    const fetchSubjectArticles = async (page) => {
      let limit = 10;
      let apiUrl = `${process.env.apiDomain}/subjects/articles/${id}/?limit=${limit}&offset=${(page-1)*limit}`;

      await axios.get(apiUrl)
        .then(res =>{
          setSubjectArticles(res.data.results);
          setPagesCount(Math.floor(res.data.highest_count/limit)+1);
          setLoading(false);
        })
        .catch(err => router.push("/page-not-found")
        );
     };

      if (page !== pageNum) fetchSubjectArticles(pageNum);
      else fetchSubjectArticles(page);
    }, [page, pageNum, id]);

  const handlePagination = page => {
    query.page = parseInt(page.selected)+1
    router.push(`/Subject/${id}?page=${query.page}`)
  };

  let pageHeader = "Зміст";
  let publicationsComponents = subjectArticles.map(publication => {
    if (publication.journal) return <ArticleBlockItem  key={publication.id} articleItem={publication} />;
    else return <ColumnsBlockItem  reverse={true} key={publication.id} columnItem={publication} />;
  });

  return (
    <div>
      <div className="container">
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col-12 col-md-9">
            {loading && <div>
              <p className="skeleton-header"></p>
              <SkeletonArticlesBlock quantity={10} /></div>}
            {!loading &&
            <div className="">
              <Header size="small" style={{ fontSize: 32 }} title={pageHeader} />
            <Fragment size="big" noShowMore={true}>
              {publicationsComponents}
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
            </Fragment>
            </div>
            }
          </div>


          <div className="d-none d-md-block col-md-3 ">
            <BannersPanel admixer_id="admixed-articles" admixer={true} ria={true} adriver_id="adriver-articles"  />
          </div>
        </div>

      </div>
    </div>

  );
}

export default SubjectArticles;
