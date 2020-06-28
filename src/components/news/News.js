import React from "react";
import Header from "../common/Header";
import NewsBlock from "../fragments/NewsBlock";
import BannersPanel from "../fragments/BannersPanel";
import newsData from "../newsData.json";
import PressItem from "../fragments/PressItem";
import LastJournalBanner from "../fragments/LastJournalBanner";

function News({match}){
    const newsComponents = newsData.map(news => <PressItem id={news.id} pressItem={news}/>)
    return (
        <div className="container">
          <div className="row" style={{ marginTop: 10 }}>
            <div className="col-12">
              <Header  size="small" style={{ fontSize: 32 }} title="Новини" />
              <div className="row">
                <div className="col-12 col-md-9">
                <NewsBlock quantity={20} />
                </div>
                <div className="col-12 col-md-3">
                    <LastJournalBanner/>
                  <BannersPanel/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default News;