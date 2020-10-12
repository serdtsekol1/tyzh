import React from 'react';
import {Link} from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';

import Button from "../common/Button";
import JournalsFooter from "../fragments/JournalsFooter";
import Fragment from '../fragments/Fragment';
import BannersPanel from '../fragments/BannersPanel';
import ColumnsBlock from "../fragments/ColumsBlock";

import Header from '../common/Header';
import GorizontalAdBanner from '../fragments/GorizontalAdBanner';
import ArticlesBlock from '../fragments/AtriclesBlock';
import ArticleBlockItem from "../fragments/ArticleBlockItem";
import ColumnsBlockItem from "../fragments/ColumnsBlockItem";
import MetaTags from "../common/MetaTagsComponent";

import "./journalItem.scss";
import "../common/css/tabs.scss";



function getDate(public_ts){
    const today = new Date();
    let options = { month: 'long', day: 'numeric' ,  timeZone: 'UTC'};
    let date = new Date(public_ts).toLocaleDateString('uK-UK', options);
    if (new Date(public_ts).getYear() < today.getYear()) {
        options = {  year:'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'};
        date = new Date(public_ts).toLocaleDateString('uK-UK', options);
      }
    return date;
  }


function JournalTemplate(props) {
    let journal = props.journalItem? props.journalItem: {};
    
    let date = "";
    date = getDate(journal.created_ts);
    let publicationsComponents=[];
    if (journal.articles){
        publicationsComponents = journal.articles.map(publication => {
            if (publication.journal) return <ArticleBlockItem  key={publication.id} articleItem={publication} />;
            else return <ColumnsBlockItem  reverse={true} key={publication.id} columnItem={publication} />;
        });
    }
    return <div className="container">
        <MetaTags title={`Український тиждень № ${journal.localnum} (${journal.num})`} 
          abstract={`Український тиждень № ${journal.localnum} (${journal.num})`} 
          ct100={true} keywords={`Український тиждень № ${journal.localnum} (${journal.num})`} 
          image={journal.image1}
          />
        <div className="row journal-header-wrap">
            <div className="col-12 col-md-4">
                <img className="journal-big-cover" src={journal.image1}/>
            </div>
            <div className="col-12 col-md-8">
                <div className="journal-info-wrap">
                    <div>
                    <p className="big-journal-title">Журнал «Український тиждень»</p>
                    <p className="big-journal-number">{`№ ${journal.localnum} (${journal.num})`}</p>
                    <p className="big-journal-date"> від {date}</p>
                    <Link to="/">
                        <Button title="Передплата" redButton={true}/>
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 journal-page">
            <Fragment size="big" noShowMore={true}>
                
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        
                    <Tab eventKey="profile" title="Зміст">
                    <div className="row">
                            <div className="col-12 col-md-9">
                            {publicationsComponents}
                            <a className="subsc-button-centered subsc-button" href="https://old.tyzhden.ua/InfoCenter/Subscription/">
                                <Button title="Передплата" redButton={true} />
                            </a>
                            </div>
                            <div className="col-12 col-md-3">
                            <BannersPanel my={true}  adriver_id="adriver-journal1" adriver={true} admixer_id="admixed-journal1" admixer={true}/>
                            </div>
                        </div>
                        
                    </Tab>
                    <Tab eventKey="articles" title="Статті">
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <ArticlesBlock  articles={journal.publications?journal.publications:[]} redButton={true} 
                                showMoreTitle="Передплата" showMoreHref={"https://old.tyzhden.ua/InfoCenter/Subscription/"}/>
                              

                            </div>
                            <div className="col-12 col-md-3">
                            <BannersPanel ria={true} my={true}  />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="home" title="Колонки">
                        <div className="row">
                            <div className="col-12 col-md-9">
                            <ColumnsBlock columns={journal.columns?journal.columns:[]} 
                            showMoreHref={"https://old.tyzhden.ua/InfoCenter/Subscription/"} showMoreTitle="Передплата" redButton={true}/>
                            
                            </div>
                            <div className="col-12 col-md-3">
                            <BannersPanel my={true} ria={true} />
                            </div>
                        </div>
                    </Tab>
                    
                
                </Tabs>
               
            </Fragment>
            <GorizontalAdBanner ukrnet={true} mixadvert={true} yottos={true}/>
            <Header size="big" title="Інші номери"/>
            <JournalsFooter />
            </div>
        </div>
    </div>

}

export default JournalTemplate;