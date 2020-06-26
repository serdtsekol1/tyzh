import React from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
import Header from "../common/Header";
import PhotoReportItem from "../fragments/PhotoReportItem";
import SubscriptionBanner from "../fragments/SubscriptionBanner";
import Fragment from "../fragments/Fragment";
import BannersPanel from "../fragments/BannersPanel";

import photoReportsData from "../photoReportData.json";

function PhotoReports({match}){
   
    const firstPhotoReportsComponent = photoReportsData.map(photoReport => (
        <PhotoReportItem key={photoReport.id} reportItem={photoReport} />
      ))[0];
    const photoReportsComponents = photoReportsData.slice(1,13).map(photoReport => (
        <div className="col-12 col-md-6" key={photoReport.id+100}>
            <PhotoReportItem key={photoReport.id} reportItem={photoReport}/>
        </div>
      ));
    
    let history = useHistory();
    let initialPageNumber = 0;
    if (match.params.page) initialPageNumber = match.params.page - 1;
    function handlePageClick(data) {
        history.push(`/photoreports/page=${data.selected + 1}`);
    }
    return (
        <div className="container">
            
            <Header title="Фоторепортаж"/>
            <Fragment size="big" noShowMore={true}> 
            <div className="row">
                <div className="col-12">
                    {firstPhotoReportsComponent}
                </div>
                {photoReportsComponents}
            
            </div>
            <SubscriptionBanner />
            <div className="banner-mobile-only"></div>
            <div class="d-block d-md-none">
                <BannersPanel secondBanner={false}/>
            </div>
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
            </Fragment>
        </div>
    );
}

export default PhotoReports;