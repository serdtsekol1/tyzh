import Layout from '../../../components/layout'
import Head from 'next/head'
import React, { useState, useEffect} from "react";
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router'

import ColumnsTab from "../../../components/fragments/ColumnsTab";
import NewsTab from "../../../components/fragments/NewsTab";
import ArticlesTab from "../../../components/fragments/ArticlesTab";
import PhotoreportsTab from "../../../components/fragments/PhotoreportsTab";

import BannersPanel from '../../../components/fragments/BannersPanel';
import MetaTags from "../../../components/common/MetaTagsComponent";

import SkeletonPublication from "../../../components/loading_skeletons/SkeletonPublication";

export default function Author({ data }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  let [author, setAuthor] = useState({});
  let [isNews, setIsNews] = useState(false);
  let [isPhotoreports, setIsPhotoreports] = useState(false);
  let [isArticles, setIsArticles] = useState(false);
  let [isColumns, setIsColumns] = useState(false);
  let [activeTab, setActiveTab] = useState("columns");
  useEffect (()=>{
    setLoading(true);

    const fetchData = async () => {

      let apiUrl = `${process.env.apiDomain}/authors/page/${router.query.id}`;
      await axios.get(apiUrl)
        .then(res =>{

          setAuthor(res.data);


        })
        .catch(err => console.log(err));
      apiUrl = `${process.env.apiDomain}/columns/author/${router.query.id}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{

          if (res.data.results.length){

            setIsColumns(true); }


        })
        .catch(err => console.log(err));
      apiUrl = `${process.env.apiDomain}/galleries/author/${router.query.id}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{

          if (res.data.results.length)
            setIsPhotoreports(true);

        })
        .catch(err => console.log(err));
      apiUrl = `${process.env.apiDomain}/publications/author/${router.query.id}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{
          console.log(res.data.results.length);
          if (res.data.results.length)
            setIsArticles(true);

        })
        .catch(err => console.log(err));
      apiUrl = `${process.env.apiDomain}/news/author/${router.query.id}/?limit=1`;
      await axios.get(apiUrl)
        .then(res =>{

          if (res.data.results.length)
            setIsNews(true);
          setLoading(false);

        })
        .catch(err => console.log(err));
    };

    fetchData();


  },[router.query.id]);

  useEffect(()=>{

    if(isArticles) {
      setActiveTab("articles")
    }
    if(isNews) {
      setActiveTab("news")
    }
    if(isPhotoreports) {
      setActiveTab("photo")
    }
    if(isColumns) {
      setActiveTab("columns")
    }

    switch (router.query.tab) {
      case "Publications":
        if(isArticles) setActiveTab("articles");
        break;
      case "News":
        if (isNews) setActiveTab("news");
        break;
      case "Gallery":
        if (isPhotoreports) setActiveTab("photo");
        break;
      case "Column":
        if (isColumns) setActiveTab("columns");
        break;
      default:
        router.push(`/Author/${router.query.id}`);
        break;
    }
  },[isNews,isColumns,isArticles,isPhotoreports,router.query.tab]);

  function hanldleChange(key){
    switch (key) {
      case "news":
        router.push(`/Author/${router.query.id}/News`);
        break;
      case "articles":
        router.push(`/Author/${router.query.id}/Publications`);
        break;
      case "photo":
        router.push(`/Author/${router.query.id}/Gallery`);
        break;
      case "columns":
        router.push(`/Author/${router.query.id}/Column`);
        break;
      default:
        router.push(`/Author/${router.query.id}`);
        break;
    }
  };

  return (
    <Layout>
      <Head>
        <title>{data.fullname2ua}</title>
      </Head>
      <div className="container">

        {loading && <SkeletonPublication article={true}/>}
        {!loading &&

        <div>
          <MetaTags title={data.fullname2ua}
                    abstract={data.fullname2ua}
                    ct100={true} keywords={data.fullname2ua}
                    noImage={true}
          />
          <div className="row column-header">
            <div className="col-3 col-md-2">
              <div className="column-author-photo-wrap">
                <img className="column-author-photo"
                     src={data.image1url}/>
              </div>
            </div>

            <div className="col-9 col-md-10 d-none d-md-block">
              <div className="author-info-wrap">

                <p className="big-post-header column-title ">{data.fullname2ua}</p>
                {/* <p className="author-info">{author.info?author.info:"На жаль, у нас немає інформації про цього автора"}</p>
              */}
              </div>
            </div>
            <div className="col-9 col-md-10 d-block d-md-none">
              <div className="mobile-column-author-info">
                <p className="column-author-name">{data.fullname2ua}</p>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 author-tabs">
              <Tabs defaultActiveKey={activeTab} id="uncontrolled-tab-example" onSelect={hanldleChange}>
                {isColumns?
                  <Tab eventKey="columns" title="Колонки">
                    <div className="row">
                      <div className="col-12 col-md-9">

                        <ColumnsTab authorId={router.query.id}/>
                      </div>
                      <div className="col-12 col-md-3">
                        <BannersPanel my={true} />
                      </div>
                    </div>

                  </Tab>
                  :""}
                {isNews?
                  <Tab eventKey="news" title="Новини">
                    <div className="row">
                      <div className="col-12 col-md-9">

                        <NewsTab authorId={router.query.id}/>

                      </div>
                      <div className="col-12 col-md-3">
                        <BannersPanel my={true} ria={true} />
                      </div>
                    </div>
                  </Tab>
                  :""}
                {isArticles?
                  <Tab eventKey="articles" title="Статті">
                    <div className="row">
                      <div className="col-12 col-md-9">

                        <ArticlesTab authorId={router.query.id}/>

                      </div>
                      <div className="col-12 col-md-3">
                        <BannersPanel my={true}  ria={true} />
                      </div>
                    </div>
                  </Tab>
                  :""}
                {isPhotoreports?
                  <Tab eventKey="photo" title="Фоторепортажі">
                    <div className="row">
                      <div className="col-12 col-md-9">
                        <PhotoreportsTab authorId={router.query.id}/>

                      </div>
                      <div className="col-12 col-md-3 banner-no-margin">
                        <BannersPanel ria={true} my={true}/>
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
    </Layout>
  )
}


export async function getServerSideProps(context) {
  let apiUrl = `${process.env.apiDomain}/authors/page/${context.params.id}`
  const res = await fetch(apiUrl)
  if (res.status == 200) {
    const data = await res.json()
    return { props: { data } }
  } else {
    return { notFound: true }
  }
}

