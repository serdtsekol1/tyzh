import React, { useState, useEffect}  from "react";
import ReactPaginate from "react-paginate";
import { useHistory, Redirect } from "react-router-dom";
import config from "react-global-configuration";
import axios from 'axios';

import PressreleaseBlockItem from "../fragments/PressreleaseBlockItem";
import PressreleasesBlock from "../fragments/PressreleasesBlock";
import BannersPanel from "../fragments/BannersPanel";
import Header from "../common/Header";

import SkeletonArticlesBlock from "../loading_skeletons/SkeletonArticlesBlock";
import SkeletonMainArticle from "../loading_skeletons/SkeletonMainArticle";

function Pressreleases({match}) {
  const [pressreleases, setPressreleases] = useState([]);
  const [page, setPage] = useState(match.params.page);
  const [pagesCount, setPagesCount] = useState(0);
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  let initialPageNumber = 0;
  if (match.params.page) initialPageNumber = match.params.page - 1;

  useEffect (()=>{
    setLoading(true);

    const fetchPressreleases = async (page) => {
      let limit = 11;
      let apiUrl = `${config.get("apiDomain")}/pressreleases/?limit=${limit}&offset=${(page-1)*limit}`;

      await axios.get(apiUrl)
        .then(res =>{
          setPressreleases(res.data.results);
          setPagesCount(Math.floor(res.data.count/limit)+1);
          setLoading(false);
        })
        .catch(err => history.push("/page-not-found")
        );
     };

      if (page!=match.params.page) fetchPressreleases(match.params.page);
      else fetchPressreleases(page);
    },[page,match.params.page]);

    const handlePageClick = async (data) => {
      history.push(`/PressReleases?page=${data.selected+1}`);
      setPage(data.selected+1);
      match.params.page = data.selected+1;
    };

  let mainPressrelease = pressreleases.slice(0,1)
    .map(pressreleases => (
      <PressreleaseBlockItem
        mainPressrelease={true} key={pressreleases.id} pressreleaseItem={pressreleases} />
    ));

  let pageHeader = "Останні прес-релізи";

  return (
    <div>
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

              {mainPressrelease}

              <PressreleasesBlock quantity={10} pressreleases={pressreleases.slice(1,11)} noShowMore={true}>
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
              </PressreleasesBlock>
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
export default Pressreleases;