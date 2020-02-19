import React from "react";
import { NavLink } from "react-router-dom";
import "./css/category.scss";
import categories from "../common/categories.json";

function CategoryLink(props) {
  return (
    <NavLink to={"/articles/" + props.categoryInfo.category_id}>
      <div style={props.style}>
        <div
          className="category-wrap"
          style={{ borderLeftColor: props.categoryInfo.category_color }}
        >
          <p className="category">{props.categoryInfo.category_name}</p>
        </div>
      </div>{" "}
    </NavLink>
  );
}

export default CategoryLink;
