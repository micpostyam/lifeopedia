import React from 'react';
import Article from "./Article";

const CatArticles = (props) => {
  const {articles, category, all, showAll, vues, comments} = props;

  let validArticles = articles;
  if(!all){
    validArticles = articles.filter(
      item => item.category === category,
    );
  }

  let articleMinList = validArticles;
  if(!showAll){
    articleMinList = validArticles.slice(0, 2);
  }

  return (
    <>
    {
      articleMinList.length ?
        <section className={"catarticles mb-2"}>
          <h2 className={"cat-title p-3 mb-3 text-capitalize"}>{category}</h2>
          <div className={"row"}>
            {articleMinList.map(el => (
              <div className={"col-6"} key={el.id}>
                <Article article={el} vues={vues} comments={comments} />
              </div>
            ))}
          </div>
        </section>
      :
        ""
    }
    </>
  );
};

export default CatArticles;
