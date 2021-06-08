import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import config from "react-global-configuration";

import { useRouter } from 'next/router'

import ColumnsTab from "../fragments/ColumnsTab";
import ArticlesTab from "../fragments/ArticlesTab";
import PhotoreportsTab from "../fragments/PhotoreportsTab";

import BannersPanel from '../fragments/BannersPanel';
import Header from "../common/Header";

import SkeletonPublication from "../loading_skeletons/SkeletonPublication";


function FilterByTagPage(){
  const router = useRouter();
  const tag = router.query.tag

  const [loading, setLoading] = useState(false);
  let [isPhotoreports, setIsPhotoreports] = useState(false);
  let [isArticles, setIsArticles] = useState(false);
  let [isColumns, setIsColumns] = useState(false);
  let [activeTab, setActiveTab] = useState("articles");

  useEffect (()=>{
    setLoading(true);

    const fetchData = async () => {
      let apiUrl = `${process.env.apiDomain}/columns/tags/${tag}/?limit=1`;
      await axios.get(apiUrl)
        .then(res => {
          if (res.data.results.length){
            setIsColumns(true); }
        })
        .catch(err => console.log(err));

      apiUrl = `${process.env.apiDomain}/galleries/tags/${tag}/?limit=1`;
      await axios.get(apiUrl)
        .then(res => {
          if (res.data.results.length)
            setIsPhotoreports(true);

        })
        .catch(err => console.log(err));

      apiUrl = `${process.env.apiDomain}/publications/tags/${tag}/?limit=1`;
      await axios.get(apiUrl)
        .then(res => {
          if (res.data.results.length)
            setIsArticles(true);
            setLoading(false);
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }, [tag]);

  useEffect(()=>{
    if (isPhotoreports) setActiveTab("photo");
    if (isColumns) setActiveTab("columns");
    if (isArticles) setActiveTab("articles");
  }, [isColumns,isArticles,isPhotoreports])

    return (
     <div className="container">
      {loading && <SkeletonPublication article={true}/>}
      {!loading &&
      <div>
      <Header style={{paddingBottom:24}}title={`Всі матеріали, позначені тегом: ${tag}`}/>
      <div className="row">
          <div className="col-12 author-tabs">
            <Tabs defaultActiveKey={activeTab} id="uncontrolled-tab-example">
                  {isArticles?
                  <Tab eventKey="articles" title="Статті">
                      <div className="row">
                          <div className="col-12 col-md-9">
                              <ArticlesTab tag={tag}/>
                          </div>
                          <div className="col-12 col-md-3">
                          <BannersPanel my={true}  ria={true} />
                          </div>
                      </div>
                  </Tab>
                  :""}
                {isColumns?
                  <Tab eventKey="columns" title="Колонки">
                  <div className="row">
                          <div className="col-12 col-md-9">
                          <ColumnsTab tag={tag}/>
                          </div>
                          <div className="col-12 col-md-3">
                          <BannersPanel my={true} admixer_id="admixed-author-filter" admixer={true} ria={true} />
                          </div>
                      </div>
                  </Tab>
                  :""}
                  {isPhotoreports?
                  <Tab eventKey="photo" title="Фоторепортажі">
                      <div className="row">
                          <div className="col-12 col-md-9">
                          <PhotoreportsTab tag={tag}/>

                          </div>
                          <div className="col-12 col-md-3 banner-no-margin">
                          <BannersPanel ria={true} my={true}  />
                          </div>
                      </div>
                  </Tab>
                  :""}
              </Tabs>
                    </div>
             </div>
      </div>
      }
    </div>
    );
}

export default FilterByTagPage;
