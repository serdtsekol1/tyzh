import React, { useState, useEffect}  from "react";

import axios from 'axios';
import config from 'react-global-configuration';
import SkeletonPublication from "../loading_skeletons/SkeletonPublication";
import Router, { useRouter } from "next/router"
import SubjectTemplate from "./SubjectTemplate";
import SubjectArticles from "./SubjectArticles";


function Subject({ subjectData, ...match }) {
  const [subject, setSubject] = useState(subjectData);
  const [loading, setLoading] = useState(false);

  let subjectComponent;
  const router = useRouter()
  const query = router.query

  useEffect (() => {
    setLoading(true);

    const fetchData = async () => {
      let apiUrl = `${process.env.apiDomain}/subjects/${query.id}`;
      await axios.get(apiUrl)
        .then(res => {
          setSubject(res.data);
          setLoading(false);
        })
        .catch(err => router.push('/page-not-found/'));
    };

    if(subject) {
      setLoading(false);
    } else {
      fetchData();
    }


  }, [query.id]);

  subjectComponent = <SubjectTemplate subject={subject}/>;
  const subjectArticlesComponent = <SubjectArticles id={router.query.id} pageNum={router.query.page} />;

  return (
    <div>
    {loading && <SkeletonPublication article={true}/>}
    {!loading && <div>{subjectComponent}</div>}
    {!loading && <div>{subjectArticlesComponent}</div>}
    </div>
  );
}

export default Subject;
