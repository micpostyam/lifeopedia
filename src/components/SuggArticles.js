import React from 'react';
import SuggArticleElt from "./SuggArticleElt";

const SuggArticles = (props) => {
  const {articles} = props;
  const randArticles = articles.sort(() => Math.random() - 0.5).slice(0, 3);
  return (
    <section>
      <h3 className={"text-center"}>Suggested Articles</h3>
      {randArticles.map(el => (
        <SuggArticleElt key={el.id} article={el}/>
      ))}
    </section>
  );
};

export default SuggArticles;
