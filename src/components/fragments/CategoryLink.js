import React from "react";
import { NavLink } from "react-router-dom";
import "./css/category.scss";
import categoties from "../common/categories.json";

function CategoryLink(props) {
  let category_color="#CCCCCC";
  if (
    categoties.filter(category => category.category_name == props.categoryInfo.journal.nameua)
      .length > 0
  ) {
    category_color = categoties.find(
      category => category.category_name == props.categoryInfo.journal.nameua
    ).category_color;}
 
  return (
    <NavLink to={props? "/articles/" + props.categoryInfo.journal.nameua: "all-categories"}>
      <div style={props.style}>
        <div
          className="category-wrap"
          style={{ borderLeftColor: category_color }}
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