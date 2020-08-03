import React from 'react';
import {Link} from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';

import Button from "../common/Button";
import JournalsFooter from "../fragments/JournalsFooter";
import Fragment from '../fragments/Fragment';
import BannersPanel from '../fragments/BannersPanel';
import ColumnsBlock from "../fragments/ColumsBlock";
import "./journalItem.scss";
import Header from '../common/Header';
import SubscriptionBanner from '../fragments/SubscriptionBanner';
import ArticlesBlock from '../fragments/AtriclesBlock';

function JournalTemplate(props) {
    let journal = props.journalItem? props.journalItem: {};
    let today = new Date();
    let options = { month: 'long', day: 'numeric'};
    let date = "";
    date = new Date(journal.created_ts).toLocaleDateString('uK-UK', options);
    

    return <div className="container">
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
            <div className="col-12">
            <Fragment size="big" noShowMore={true}>
                
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="profile" title="Зміст">

                    </Tab>
                    <Tab eventKey="articles" title="Статті">
                        {/* <ArticlesBlock quantity={6} /> */}
                    </Tab>
                    <Tab eventKey="home" title="Колонки">
                        {/* <ColumnsBlock columns={} quantity={3} /> */}
                    </Tab>
                    
                
                </Tabs>
                <div className="row">
                    <div className="col-12 col-md-9"></div>
                    <div className="col-12 col-md-3">
                    <BannersPanel />
                    </div>
                </div>
            </Fragment>
            <SubscriptionBanner />
            <Header size="big" title="Інші номери"/>
            <JournalsFooter />
            </div>
        </div>
    </div>

}

export default JournalTemplate;