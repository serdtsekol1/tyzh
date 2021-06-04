import React, { useState, useEffect} from "react";
import axios from 'axios';
import config from "react-global-configuration";

import PhotoReportItem from "../fragments/PhotoReportItem";
import Fragment from "../fragments/Fragment";
import Header from "../common/Header";


function SubjectBlock() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (()=>{
    setLoading(true);
    const fetchData= async () => {
      let limit = 2;
      let apiUrl = `${config.get("apiDomain")}/subjects/?limit=${limit}`;
      await axios.get(apiUrl)
      .then(res =>{ 
        setSubjects(res.data.results);
        setLoading(false);
      })
      .catch(err => console.log(err));
     };
     fetchData();
  }, []);

  const link = "Subject";
  const photoReportsComponents = subjects.map(item => (
    <PhotoReportItem key={item.id} reportItem={item} link={link} />
  ));
  return (
    <Fragment size="big" showMoreLink="/Subject">
      <Header size="big" title="Спецтеми" />
      <div className="row small-photo-reports-wrap">
        <div className="col-12 col-md-6">
          {photoReportsComponents[0]}
        </div>
        <div className="col-12 col-md-6">
          {photoReportsComponents[1]}
        </div>
      </div>
    </Fragment>
  );
}

export default SubjectBlock;
