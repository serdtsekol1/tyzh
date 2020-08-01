import React from "react";
import { NavLink } from "react-router-dom";
import "./css/category.scss";
import categoties from "../common/categories.json";

function CategoryLink(props) {
  let category_color="#с0с0с0";
  if (
    categoties.filter(category => category.category_name == props.categoryInfo.journal.nameua)
      .length > 0
  ) {
    category_color = categoties.find(
      category => {
       
        return category.category_name == props.categoryInfo.journal.nameua;}
    ).category_color;
    console.log("LFIF",category_color,props.categoryInfo.journal.nameua);
  
  }
  let isSolid = props.solid?"category-wrap-solid":"category-wrap";
  return (
    <NavLink to={props? "/articles/" + props.categoryInfo.journal.nameua: "all-categories"}>
      <div style={props.style}>
        <div
          className={`${isSolid}`}
          style={props.solid? {background:category_color} :{ borderLeftColor: category_color }}
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
