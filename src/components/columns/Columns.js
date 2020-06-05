import React from "react";
import Header from "../common/Header";
import AuthorsBlock from "../fragments/AuthorsBlock";
import BannersPanel from "../fragments/BannersPanel";

function Columns({match}){
    return (
        <div className="container">
          <div className="row" style={{ marginTop: 10 }}>
            <div className="col-12">
              <Header  size="small" style={{ fontSize: 32 }} title="Вибрані автори" />
              <AuthorsBlock quantity="6"></AuthorsBlock>
              <Header size="big" title="Останні публікації" />
              <div className="row">
                <div className="col-12 col-md-9">
                 
                </div>
                <div className="col-12 col-md-3">
                  <BannersPanel/>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
    
}

export default Columns;