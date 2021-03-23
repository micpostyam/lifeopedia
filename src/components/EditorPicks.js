import React from 'react';
import Piks from "./Piks";

const EditorPicks = (props) => {
  const {articles} = props;
  const randArticles = articles.sort(() => Math.random() - 0.5).slice(0, 4);
  return (
    <div className={"p-5"}>
      <h2 className={"text-center mb-5"}>Editor's Picks</h2>
      <section className={"row"}>
        {randArticles.map(el => (
          <Piks key={el.id} article={el}/>
        ))}
      </section>
    </div>
  );
};

export default EditorPicks;
