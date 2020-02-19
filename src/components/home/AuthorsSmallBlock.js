import React from "react";

import AuthorsBlockItem from "./AuthorsBlockItem.js";
import Fragment from "../fragments/Fragment";
import Header from "../common/Header";

import authorsData from "../columnData.json";

function AuthorsSmallBlock() {
  const authorsComponents = authorsData.map(author => (
    <AuthorsBlockItem size="small" key={author.id} columnItem={author} />
  ));
  return (
    <div className="authors-small-block">
      <Header size="small" title="Останні колонки" />
      <Fragment size="medium">{authorsComponents.slice(0, 4)}</Fragment>
    </div>
  );
}
export default AuthorsSmallBlock;
