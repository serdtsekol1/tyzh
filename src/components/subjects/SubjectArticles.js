import React, { useState, useEffect}  from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
import config from "react-global-configuration";
import axios from 'axios';

import BannersPanel from "../fragments/BannersPanel";
import Header from "../common/Header";
import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ColumnsBlockItem from "../fragments/ColumnsBlockItem";
import Fragment from "../fragments/Fragment";

import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import SkeletonMainArticle from "../loading_skeletons/SkeletonMainArticle";


function SubjectArticles({match}) {
  const [subjectArticles, setSubjectArticles] = useState([]);
  const [page, setPage] = useState(match.params.page);
  const [pagesCount, setPagesCount] = useState(0);
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  let initialPageNumber = 0;
  if (match.params.page) initialPageNumber = Number(match.params.page) - 1;

  useEffect (()=>{
    setLoading(true);

    const fetchSubjectArticles = async (page) => {
      let limit = 10;
      let apiUrl = `${config.get("apiDomain")}/subjects/articles/${match.params.id}/?limit=${limit}&offset=${(page-1)*limit}`;

      await axios.get(apiUrl)
        .then(res =>{
          setSubjectArticles(res.data.results);
          setPagesCount(Math.floor(res.data.highest_count/limit)+1);
          setLoading(false);
        })
        .catch(err => history.push("/page-not-found")
        );
     };

      if (page !== match.params.page) fetchSubjectArticles(match.params.page);
      else fetchSubjectArticles(page);
    }, [page, match.params.page, match.params.id, history]);

    const handlePageClick = async (data) => {
      history.push(`/Subject/${match.params.id}/page=${data.selected+1}`);
      setPage(data.selected+1);
      match.params.page = data.selected+1;
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
              onPageChange={handlePageClick}
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
