import React from "react";

function AuthorsBlockItem(props){

    let style = props.small ? "author-item-small" :"";
    return (
        <div className={`${style} author-item col-12 col-md-2`}>
            <img
            className="author_photo"
            src={require(`../../images/columns/${props.authorItem.author_photo}`)}
            alt={`Портрет:${props.authorItem.author}`}
          />
            <div className="authors-info">
                 <p className="author-name">{props.authorItem.author}</p>
                 <p className="author-columns-quantity">{props.authorItem.author_columns_quantity}</p>
            </div>
        </div>
    );
}

export default AuthorsBlockItem;