import React, { useState, useEffect} from "react";
import axios from 'axios';
import config from "react-global-configuration";

import PhotoReportItem from "../fragments/PhotoReportItem";
import Fragment from "../fragments/Fragment";
import Header from "../common/Header";


function PhotoReportBlock() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (()=>{
    setLoading(true);
    const fetchData= async () => {
      let limit = 4;
      let apiUrl = `${config.get("apiDomain")}/galleries/?limit=${limit}`;
      await axios.get(apiUrl)
      .then(res =>{ 
        setGalleries(res.data.results);
        setLoading(false);
      })
      .catch(err => console.log(err));
     };
     fetchData();
  },[]);

  const photoReportsComponents = galleries.slice(1,4).map(photoReport => (
    <PhotoReportItem key={photoReport.id} reportItem={photoReport} />
  ));
  return (
    <Fragment size="big" showMoreLink="/Gallery">
      <Header size="big" title="Фоторепортаж" />
      <div className="d-none d-md-block">
       <PhotoReportItem  main={true} reportItem={galleries[0]} />
      </div>

      <div className="row small-photo-reports-wrap">
        <div className="col-12 col-md-4 ">
          {photoReportsComponents[0]}
        </div>
        <div className="col-12 col-md-4  ">
          {photoReportsComponents[1]}
        </div>
        <div className="col-12 col-md-4">
          {photoReportsComponents[2]}
        </div>
      </div>
    </Fragment>
  );
}

export default PhotoReportBlock;
