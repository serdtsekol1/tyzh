import React from "react";
import "./css/authors_block.scss";

function AuthorsBlockItem(props){
    return (
        <div className="author-item col-12 col-md-2">
            <img
            className="author_photo"
            src={require(`../../images/columns/${props.authorItem.author_photo}`)}
            alt={`Портрет:${props.authorItem.author_name}`}
          />
            <div className="authors-info">
                 <p className="author-name">{props.authorItem.author_name}</p>
                 <p className="author-columns-quantity">{props.authorItem.author_columns_quantity}</p>
            </div>
        </div>
    );
}

export default AuthorsBlockItem;