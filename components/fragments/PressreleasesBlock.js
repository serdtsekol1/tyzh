import React, { useState, useEffect}  from "react";
import config from "react-global-configuration";
import axios from 'axios';
import SkeletonNewsBlock from "../loading_skeletons/SkeletonNewsBlock";
import PressreleaseBlockItem from "./PressreleaseBlockItem";

import Fragment from "../fragments/Fragment";


function PressreleasesBlock(props) {
  const [loading, setLoading] = useState(false);
  const [pressreleases, setPressReleases] = useState([]);
  let pressreleasesComponents = "";

  useEffect (()=>{
    setLoading(true);
    const fetchPressReleases = async () => {
      let limit = props.quantity;
      let apiUrl = `${process.env.apiDomain}/pressreleases/?limit=${limit}`;
      await axios.get(apiUrl)
      .then(res =>{ 
        setPressReleases(res.data.results);
        setLoading(false);
        })
      .catch(err => console.log(err));  
      };
      fetchPressReleases();
  }, [props.quantity]);
  // if (props.lastArticles){
  //   pressreleasesComponents = pressreleases.map(pressrelease => (
  //     <PressreleaseBlockItem small={true} mainArticle ={true} key={pressrelease.id} pressreleaseItem={pressrelease} />
  //   ));
  // }
  // else {
    pressreleasesComponents = props.pressreleases
      .map(pressrelease => (
        <PressreleaseBlockItem categorial={props.categorial} key={pressrelease.id} pressreleaseItem={pressrelease} />
      ));
  // }

    
  return (
    <div>
    {loading && <div><SkeletonNewsBlock/><SkeletonNewsBlock/><SkeletonNewsBlock/></div>}
       {!loading &&
      <Fragment
        size="big"
        noShowMore={props.noShowMore}
        showMoreLink={props.showMoreLink}
        redButton={props.redButton}
        showMoreTitle={props.showMoreTitle}
        showMoreHref ={props.showMoreHref}
      >
        {pressreleasesComponents}
        {props.children}
      </Fragment>
      }
      </div>
  );
}

export default PressreleasesBlock;
