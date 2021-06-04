import React from "react";
import {Link} from "react-router-dom";
import "./css/tags.scss";

function TagsPanel(props) {
  const tagComponents = props.tags.map(tag => (
    <Link to={`/Tag/${tag}`}>
    <div className="tag" key={tag}>
      <p key={tag.toUpperCase()}>{tag}</p>
    </div>
    </Link>
  ));
  return <div className="tags-panel">{tagComponents}</div>;
}

export default TagsPanel;
