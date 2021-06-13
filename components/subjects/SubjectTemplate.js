import React from "react";


function SubjectTemplate(props) {
  return (
    <div>
      <div className="container">
        <div className="subtitle">Спецтеми</div>
        <h1 className="big-post-header subject-header">{props.subject.title}</h1>
      </div>
      <div>
        <img
          className="main-article-image subject-image"
          src={props.subject.image1}
          alt="Картинка спецтеми"
        />
      </div>
    </div>
  );
}

export default SubjectTemplate;
