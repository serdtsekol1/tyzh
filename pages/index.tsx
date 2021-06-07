import React, { useState, useEffect} from "react";
import Link from 'next/link'
import Head from 'next/head'

import axios from 'axios';

import Layout from "../components/layout.js"
import HomeAuthorsBlock from "../components/home/HomeAuthorsBlock";
import HomeAuthorsSmallBlock from "../components/home/HomeAuthorsSmallBlock";
import PhotoReportBlock from "../components/home/PhotoReportBlock";
import SubjectBlock from "../components/home/SubjectBlock";
import VideoTranslation from "../components/home/VideoTranslation";

import ArticleBlockItem from "../components/fragments/ArticleBlockItem";
import ArticlesBlock from "../components/fragments/AtriclesBlock";
import BannersPanel from "../components/fragments/BannersPanel";
import JournalsFooter from "../components/fragments/JournalsFooter";
import Header from "../components/common/Header";

import Skeleton from "react-loading-skeleton";
import SkeletonArticlesBlock from "../components/loading_skeletons/SkeletonArticlesBlock";
import SkeletonMainArticle from "../components/loading_skeletons/SkeletonMainArticle";

import SubscriptionBanner from "../components/fragments/SubscriptionBanner";
import DonationBanner from "../components/fragments/DonationBanner";


function HomePage() {
    const [articles, setArticles] = useState([]);
    const [mainArticles, setMainArticles] = useState([]);
    const [videoTranslation, setVideoTranslation] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect (()=>{
        setLoading(true);
        const fetchArticles= async () => {
            let limit = 6;
            await axios.get(`https://tyzhden.ua/api/publications/?limit=${limit}`)
                .then(res =>{
                    setArticles(res.data.results);
                })
                .catch(err => console.log(err));
            await axios.get(`https://tyzhden.ua/api/publications/type/selected/`)
                .then(res =>{
                    setMainArticles(res.data.results);
                })
                .catch(err => console.log(err));
            await axios.get(`https://tyzhden.ua/api/videos/live/`)
                .then(res =>{
                    setVideoTranslation(res.data);
                    setLoading(false);
                })
                .catch(err => console.log(err));
        };
        fetchArticles();
    },[]);

    let mainArticle = mainArticles.slice(0,1)
        .map(article => (
            <ArticleBlockItem
                mainArticle={true} key={article.id} articleItem={article} />
        ));
    let articlesComponent = <ArticlesBlock quantity={5}  articles={articles.slice(0,5)}  showMoreLink="/Publications" />;

    return (
        <Layout home>
        <Head>
        <title>Аналітика, безпека, економіка, міжнародна політика, культура. Зміст має значення!</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="fb:app_id" content="966242223397117"/>
        <link rel="canonical" href="https://tyzhden.ua"/>    
        <meta name="title" content="Аналітика, безпека, економіка, міжнародна політика, культура. Зміст має значення!"/>
        <meta name="description" content="Сайт журналу &laquo;Український тиждень&raquo;. Формуємо порядок денний разом"/>
        <meta id="ctl00_meta2" name="keywords" content= "Аналітика, безпека, економіка, міжнародна політика, культура"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://tyzhden.ua`}/>
        <meta property="og:title" content="Аналітика, безпека, економіка, міжнародна політика, культура. Зміст має значення!"/>
        <meta property="og:description" content="Сайт журналу &laquo;Український тиждень&raquo;. Формуємо порядок денний разом"/>
        <meta property="og:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content={`https://tyzhden.ua`}/>
        <meta property="twitter:title" content="Аналітика, безпека, економіка, міжнародна політика, культура. Зміст має значення!"/>
        <meta property="twitter:description" content="Сайт журналу &laquo;Український тиждень&raquo;. Формуємо порядок денний разом"/>
        <meta property="twitter:image" content="https://tyzhden.ua/sharing_image.jpg"/>
        </Head>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-9">
                    {loading && <SkeletonMainArticle/>}
                    {!loading &&
                    <div>
                        {Object.keys(videoTranslation).length === 0 && videoTranslation.constructor === Object?
                            <div >{mainArticle}</div>
                            : <VideoTranslation videoTranslation={videoTranslation} />
                        }
                    </div>
                    }
                </div>
                <div className="d-none d-lg-block col-lg-3 col-xl-3">
                    <HomeAuthorsSmallBlock/>
                </div>
            </div>
            <SubscriptionBanner />

            {loading &&
            <p className="skeleton-header"><Skeleton height={30}></Skeleton></p>}
            {!loading &&
                <Link href="/Publications"><a><Header size="big" title="Статті" /></a></Link>
            }
            <div className="row">
                <div className="col-12 col-md-9">
                    {loading && <SkeletonArticlesBlock  quantity={5} />}
                    {!loading &&
                    <div >{articlesComponent}</div>
                    }
                </div>
                <div className="col-12 col-md-3">
                    <BannersPanel my={true} ria={true} />
                </div>
            </div>
            <SubjectBlock />
            <HomeAuthorsBlock />
            <DonationBanner />
            <PhotoReportBlock />
            <Link href="/Magazines"><a><Header size="big" title="Журнал «Український тиждень»"/></a></Link>
            <JournalsFooter />
        </div>
        </Layout>
    );
}

export default HomePage;
