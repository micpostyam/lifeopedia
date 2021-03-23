import React from 'react';
import ArticlePoster from "./ArticlePoster";

const Banner = (props) => {
  const article = props.articles[0];
  const articles = props.articles.slice(1,6);
  return (
    <div className={"banner"}>
      <div className={"slider-inner"}>
        {article ?
          <ArticlePoster article={article}>
            <span className={"text-orange font-weight-bold"}>Lorem ipsum dolor sit amet, consectetur</span>
          </ArticlePoster>
          : ""}
      </div>
      <div className="slider-indicator d-flex">
        {articles.map(el => (
          <ArticlePoster key={el.id} article={el}/>
        ))}
      </div>
    </div>
  );
};

export default Banner;
