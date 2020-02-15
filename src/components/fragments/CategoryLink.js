import React from "react";
import "./css/category.scss";

function CategoryLink(props) {
  return (
    <div style={props.style} className="category-wrap">
      <p
        style={{ borderLeftColor: props.categoryInfo.category_color }}
        className="category"
      >
        {props.categoryInfo.category_name}
      </p>
    </div>
  );
}

export default CategoryLink;
