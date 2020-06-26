import React from "react";
import { NavLink } from "react-router-dom";
import "./css/category.scss";
import categories from "../common/categories.json";

function CategoryLink(props) {
  return (
    <NavLink to={props? "/articles/" + props.categoryInfo.journal.persistentname.toLowerCase(): "all-categories"}>
      <div style={props.style}>
        <div
          className="category-wrap"
          style={{ borderLeftColor: "#CCCCCC" }}
        >
          {props.categoryInfo.journal?
            <p className="category">{props.categoryInfo.journal.nameua}</p>
          :""}
        </div>
      </div>
    </NavLink>
  );
}

export default CategoryLink;
