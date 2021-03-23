import React from 'react';
import ArticlePoster from "./ArticlePoster";

const Piks = (props) => {
  const {subtitle} = props.article;
  return (
    <div className={"col-3"}>
      <ArticlePoster article={props.article}/>
      <p className={"text-center text-orange"}>{subtitle}</p>
    </div>
  );
};

export default Piks;
