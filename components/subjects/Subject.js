import React, { useState, useEffect}  from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios';
import config from 'react-global-configuration';
import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import SubjectTemplate from "./SubjectTemplate";
import SubjectArticles from "./SubjectArticles";

import "../common/css/post.scss";


function Subject({ match }) {
  const [subject, setSubject] = useState({});
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  let subjectComponent;

  useEffect (() => {
    setLoading(true);

    const fetchData = async () => {
      let apiUrl = `${process.env.apiDomain}/subjects/${match.params.id}`;
      await axios.get(apiUrl)
        .then(res => {
          setSubject(res.data);
          setLoading(false);
        })
        .catch(err => history.push('/page-not-found/'));
    };

    fetchData();

  }, [match.params.id, history]);

  subjectComponent = <SubjectTemplate subject={subject}/>;
  const subjectArticlesComponent = <SubjectArticles match={match} />;

  return (
    <div>
    {loading && <SkeletonPublication article={true}/>}
    {!loading && <div>{subjectComponent}</div>}
    {!loading && <div>{subjectArticlesComponent}</div>}
    </div>
  );
}

export default Subject;
