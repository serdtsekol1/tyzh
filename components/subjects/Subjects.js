import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import config from "react-global-configuration";
import Skeleton from "react-loading-skeleton";


import ReactPaginate from "react-paginate";
import Header from "../common/Header";
import PhotoReportItem from "../fragments/PhotoReportItem";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import Fragment from "../fragments/Fragment";
import BannersPanel from "../fragments/BannersPanel";


function Subjects({match}){
    const [subjects, setSubjects] = useState([]);
    const [page, setPage] = useState(match.params.page);
    const [pagesCount, setPagesCount] = useState(0);
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    let initialPageNumber = 0;
    if (match.params.page) initialPageNumber = match.params.page - 1;

    useEffect (()=>{
      setLoading(true);

        const fetchData = async (page) => {
          let limit = 13;
          let apiUrl = `${process.env.apiDomain}/subjects/?limit=${limit}`;
          if (page)  apiUrl = `${apiUrl}&offset=${(page-1)*limit}`;

          await axios.get(apiUrl)
          .then(res =>{ 
            setSubjects(res.data.results);
            setPagesCount(Math.floor(res.data.count/limit)+1);
            setLoading(false);

            })
          .catch(err =>  history.push("/page-not-found"));  
          };
          if (page !== match.params.page) fetchData(match.params.page);
          else fetchData(page);
      }, [page, match.params.page, history]);

    const handlePageClick = async (data) => {
      history.push(`/Subject/page=${data.selected + 1}`);
      setPage();
      match.params.page = data.selected+1;
    };
    const link = "Subject";
    const firstPhotoReportsComponent = subjects.map(photoReport => (
        <PhotoReportItem key={photoReport.id} main={true} reportItem={photoReport} link={link} />
      ))[0];
    const photoReportsComponents = subjects.slice(1,13).map(photoReport => (
        <div className="col-12 col-md-6" key={photoReport.id+100}>
            <PhotoReportItem key={photoReport.id} reportItem={photoReport} link={link} />
        </div>
      ));

    return (
        <div className="container">
            <Header title="Спецтеми"/>
            <Fragment size="big" noShowMore={true}>
            <div className="row">
                <div className="col-12">
                {loading && <Skeleton duration={1} height={1800} width={'100%'}/>}
                {!loading && <div className="">{firstPhotoReportsComponent}</div>}
                </div>
                {photoReportsComponents}
            </div>
            <SubscriptionBanner />
            <div className="banner-mobile-only"></div>
            <div className="d-block d-md-none">
                <BannersPanel adriver={true} adriver_id="adriver-photo-panel" ria={true} my={true} />
            </div>
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
    );
}

export default Subjects;
