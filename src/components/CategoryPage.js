import React from 'react';
import Navigation from "./Navigation";
import CatArticles from "./CatArticles";
import SuggArticles from "./SuggArticles";
import PopArticles from "./PopArticles";
import Footer from "./Footer";

const CategoryPage = (props) => {
  const {category, articles, vues, comments} = props;
  return (
    <div>
      <Navigation/>
      <main className={"container-fluid"}>
        <div className={"row p-5"}>
          <section className={"col-8"}>
            <CatArticles category={category} articles={articles} showAll={true} vues={vues} comments={comments}></CatArticles>
          </section>
          <aside className={"col-4"}>
            <SuggArticles articles={articles}/>
            <PopArticles articles={articles}/>
          </aside>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default CategoryPage;
