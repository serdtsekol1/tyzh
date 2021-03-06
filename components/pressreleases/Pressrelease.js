import React, { useState, useEffect}  from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios';
import SkeletonPublication from "../loading_skeletons/SkeletonPublication";

import PressreleaseTemplate from "./PressreleaseTemplate";


import "../common/css/post.scss";


function Pressrelease({ match }) {
  const [pressrelease, setPressrelease] = useState({});
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  let pressreleaseComponent;
  useEffect (()=>{
    setLoading(true);

    const fetchData = async () => {

      let apiUrl = `https://tyzhden.ua/api/pressreleases/${match.params.id}`;
      await axios.get(apiUrl)
        .then(res =>{

          setPressrelease(res.data);
          setLoading(false);



        })
        .catch(err => history.push('/page-not-found/'));
    };
    fetchData();

  }, [match.params.id, history]);
  pressreleaseComponent = <PressreleaseTemplate pressrelease={pressrelease}/>;

  return (
    <div>
      {loading && <SkeletonPublication article={true}/>}
      {!loading &&
      <div>{pressreleaseComponent}</div>
      }
    </div>
  );
}

export default Pressrelease;
