import React from 'react';
import PopArticleElt from "./PopArticleElt";

const PopArticles = (props) => {
  const {articles} = props;
  const randArticles = articles.sort(() => Math.random() - 0.5).slice(0, 4);
  return (
    <section>
      <h3 className={"text-center border p-3 mb-0"}>Suggested Articles</h3>
      {randArticles.map(el => (
        <PopArticleElt key={el.id} article={el}/>
      ))}
    </section>
  );
};

export default PopArticles;
