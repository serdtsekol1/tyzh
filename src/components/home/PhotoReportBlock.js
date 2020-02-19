import React from "react";
import photoReportsData from "../photoReportData";
import PhotoReportItem from "../fragments/PhotoReportItem";
import Fragment from "../fragments/Fragment";
import Header from "../common/Header";

function PhotoReportBlock() {
  const photoReportsComponents = photoReportsData.map(photoReport => (
    <PhotoReportItem key={photoReport.id} reportItem={photoReport} />
  ));
  return (
    <Fragment size="big">
      <Header size="big" title="Фоторепортаж" />
      {photoReportsComponents[0]}

      <div className="row small-photo-reports-wrap">
        <div className="col-4 d-none d-md-block">
          {photoReportsComponents[1]}
        </div>
        <div className="col-4  d-none d-md-block">
          {photoReportsComponents[2]}
        </div>
        <div className="col-4  d-none d-md-block">
          {photoReportsComponents[3]}
        </div>
      </div>
    </Fragment>
  );
}

export default PhotoReportBlock;
