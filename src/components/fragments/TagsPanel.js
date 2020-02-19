import React from "react";
import "./css/tags.scss";

function TagsPanel(props) {
  const tagComponents = props.tags.map(tag => (
    <div className="tag" key={tag}>
      <p key={tag.toUpperCase()}>{tag}</p>
    </div>
  ));
  return <div className="tags-panel">{tagComponents}</div>;
}

export default TagsPanel;
