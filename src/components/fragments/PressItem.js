import React from "react";
import {Link} from "react-router-dom";
import DateAndAuthor from "./DateAndAuthor";
import "./css/press_item.scss";


function PressItem(props){
    /* Used in all press listed items: news list, articles list, columns list */
    return (
    <div className="pressInfo">
    <Link to={`/${props.type}/${props.pressItem.id}`}>
    <p className="press-title">
        {props.pressItem.title}
    </p>
    </Link>
    <p className="press-abstract">
    {props.pressItem.abstract}
    </p>
    <DateAndAuthor
    date={props.pressItem.created_ts}
    author={props.pressItem.author? props.pressItem.author.fullnameua: null}
    />
    </div>
    )
}

export default PressItem;