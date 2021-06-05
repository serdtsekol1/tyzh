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
        <title>Test</title>
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
