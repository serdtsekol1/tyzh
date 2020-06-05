import React from "react";
import "./css/press_item.scss";


function PressItem(){
    /* Used in all press listed items: news list, articles list, columns list */
    return (
    <div className="articleInfo">
    <Link to={`/article/${props.articleItem.id}`}>
    <p className="article-block-title">
        {props.articleItem.article_title}
    </p>
    </Link>
    <p className="article-block-abstract">
    {props.articleItem.article_abstract}
    </p>
    <DateAndAuthor
    date={props.articleItem.date}
    author={props.articleItem.author}
    />
    </div>
    )
}