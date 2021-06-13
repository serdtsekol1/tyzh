import React from "react";
import Link from "next/link";

function TagsPanel(props) {
  const tagComponents = props.tags.map(tag => (
    <Link href={`/Tag/${tag}`}>
      <a>
        <div className="tag" key={tag}>
          <p key={tag.toUpperCase()}>{tag}</p>
        </div>
      </a>
    </Link>
  ));
  return <div className="tags-panel">{tagComponents}</div>;
}

export default TagsPanel;
