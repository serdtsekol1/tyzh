import React from "react";
import AuthorsBlockItem from "./AuthorsBlockItem";
import Fragment from "../fragments/Fragment";
import authorsData from "../columnData.json";


function AuthorsBlock(props){
    const authorsComponents = authorsData
    .slice(0, parseInt(props.quantity))
    .map(author => (
      <AuthorsBlockItem key={author.id} authorItem={author} />
    ));
    return (
        <div>
            <Fragment
                size="big"
                showMoreLink="/columns"
                showMoreTitle = "Більше авторів"
                >
                <div class="row">
                    {authorsComponents}
                </div>
                {props.children}
            </Fragment>
           
        </div>
    );
}

export default AuthorsBlock;