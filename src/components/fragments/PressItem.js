import React from "react";
import {Link} from "react-router-dom";
import DateAndAuthor from "./DateAndAuthor";
import "./css/press_item.scss";



function getDate(public_ts){
    const today = new Date();
    today.setHours(today.getHours() + 3);
    let options = {  month: 'long', day: 'numeric' ,  timeZone: 'UTC'};
    let timeOptions = {  hour: 'numeric', minute: 'numeric',  timeZone: 'UTC'};
    let date = new Date(public_ts).toLocaleDateString('uK-UK', options);
    if (new Date(public_ts).getDate() === today.getDate()) { 
        date = new Date(public_ts).toLocaleTimeString('uK-UK', timeOptions);
        date = `Cьогодні, ${date}`;
    }
    if (new Date(public_ts).getYear() < today.getYear()) {
        options = {  year:'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'};
        date = new Date(public_ts).toLocaleDateString('uK-UK', options);
      }


    return date;
  }

function PressItem(props){
    /* Used in all press listed items: news list, articles list, columns list */
    
    const today = new Date();
    today.setHours(today.getHours() + 3);
      
    return (
    <div className="pressInfo">
    {((new Date(props.pressItem.public_ts) )>today)?
    
        <p className="press-title press-title-disabled">
            {props.pressItem.title}
        </p>
    :
      (props.type != "pressreleases") ?
        <Link to={`/${props.type}/${props.pressItem.id}`}>
            <p className="press-title press-title-hover">
                {props.pressItem.title}
            </p>
        </Link> :
        <a class="press-title press-title-hover" href={`https://old.tyzhden.ua/PressReleases/${props.pressItem.id}`}>{props.pressItem.title}</a>
    }
    <p className="press-abstract">
    {props.pressItem.abstract}
    </p>
    <DateAndAuthor
    date={getDate(props.pressItem.public_ts)}
    author={props.pressItem.authors? props.pressItem.authors: (props.pressItem.author?[props.pressItem.author]:null)}
    />
    </div>
    )
}

export default PressItem;