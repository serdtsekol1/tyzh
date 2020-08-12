import React from "react";
import {Link} from "react-router-dom";
import DateAndAuthor from "./DateAndAuthor";
import "./css/press_item.scss";


function PressItem(props){
    /* Used in all press listed items: news list, articles list, columns list */
    const today = new Date();
    //today.setDate(today.getDate() - 5);
    let options = {  month: 'long', day: 'numeric' };
    let timeOptions = {  hour: 'numeric', minute: 'numeric' };
    let date = new Date(props.pressItem.created_ts).toLocaleDateString('uK-UK', options);
    if (new Date(props.pressItem.created_ts).getDate() === today.getDate()) { 
        date = new Date(props.pressItem.created_ts).toLocaleTimeString('uK-UK', timeOptions);
        date = `Cьогодні, ${date}`;
    }
    
      
    return (
    <div className="pressInfo">
    {((new Date(props.pressItem.public_ts))>today)?
    
        <p className="press-title press-title-disabled">
            {props.pressItem.title}
        </p>
    :
        <Link to={`/${props.type}/${props.pressItem.id}`}>
        <p className="press-title press-title-hover">
            {props.pressItem.title}
        </p>
        </Link>
    }
    <p className="press-abstract">
    {props.pressItem.abstract}
    </p>
    <DateAndAuthor
    date={date}
    author={props.pressItem.authors? props.pressItem.authors: (props.pressItem.author?[props.pressItem.author]:null)}
    />
    </div>
    )
}

export default PressItem;