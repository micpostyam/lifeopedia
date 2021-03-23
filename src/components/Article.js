import React from 'react';
import ArticlePoster from "./ArticlePoster";
import ArticleDetails from "./ArticleDetails";
import {Link} from "react-router-dom";

const Article = (props) => {
  return (
    <article className={"border"}>
      <Link to={"/article?id="+props.article.id}>
        <ArticlePoster article={props.article}/>
        <ArticleDetails article={props.article} vues={props.vues} comments={props.comments}/>
      </Link>
    </article>
  );
};

export default Article;
