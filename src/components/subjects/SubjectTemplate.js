import React from "react";

import "../common/css/post.scss";


function SubjectTemplate(props) {
  return (
    <div>
      <div className="container">
        <div>Спецтема</div>
        <h1 className="big-post-header ">{props.subject.title}</h1>
      </div>
      <div>
        <img
          className="main-article-image"
          src={props.subject.image1}
          alt="Картинка: {props.subject.title}"
        />
      </div>
    </div>
  );
}

export default SubjectTemplate;
