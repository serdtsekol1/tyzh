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

import SkeletonPublication from "../../../components/loading_skeletons/SkeletonPublication";

export default function Author({ data }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  let [author, setAuthor] = useState({});
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
  },[isColumns,isArticles,isPhotoreports,router.query.tab]);

  function hanldleChange(key){
    switch (key) {
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
        <link rel="canonical" href={`https://tyzhden.ua/Author/${data.id}`}/>
        
        <meta name="title" content={data.fullname2ua}/>
        <meta name="description" content={data.fullname2ua}/>
        <meta id="ctl00_meta2" name="keywords" content={data.tags}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua/Author/${data.id}`}/>
        <meta property="og:title" content={data.fullname2ua}/>
        <meta property="og:description" content={data.fullname2ua}/>
        <meta property="og:image" content={data.image1url}/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua/Author/${data.id}`}/>
        <meta property="twitter:title" content={data.fullname2ua}/>
        <meta property="twitter:description" content={data.fullname2ua}/>
        <meta property="twitter:image" content={data.image1url}/>
      </Head>
      <div className="container">

        {loading && <SkeletonPublication article={true}/>}
        {!loading &&

        <div>
       
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

