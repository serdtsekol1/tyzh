import React from "react";

import HomeAuthorsBlockItem from "./HomeAuthorsBlockItem.js";
import Fragment from "../fragments/Fragment";
import Header from "../common/Header";

import authorsData from "../columnData.json";

function HomeAuthorsSmallBlock() {
  const authorsComponents = authorsData.map(author => (
    <HomeAuthorsBlockItem size="small" key={author.id} columnItem={author} />
  ));
  return (
    <div className="authors-small-block">
      <Header size="small" title="Останні колонки" />
      <Fragment size="medium">{authorsComponents.slice(0, 4)}</Fragment>
    </div>
  );
}
export default HomeAuthorsSmallBlock;
