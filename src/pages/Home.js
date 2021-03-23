import React from 'react';
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import CatArticles from "../components/CatArticles";
import SuggArticles from "../components/SuggArticles";
import PopArticles from "../components/PopArticles";
import EditorPicks from "../components/EditorPicks";
import Footer from "../components/Footer";
import {connect} from "react-redux";
import {CAT_ARTICLE} from "../store/reducers/constants/actionTypes";

const Home = (props) => {
  const category = CAT_ARTICLE;
  const {articles, vues, comments} = props;
  // articles reverse order
  let articleReverse = [];
  for(let i= articles.length-1;i>=0;i--){
    articleReverse = [...articleReverse, articles[i]];
  }
  return (
    <div className="home">
      <Navigation/>
      <Banner articles={articleReverse}/>
      <main className={"container-fluid"}>
        <div className={"row p-5"}>
          <section className={"col-8"}>
            <CatArticles category={category[0]} articles={articleReverse} vues={vues} comments={comments} commentall={true}></CatArticles>
            {category.map((el, i) => (
              <CatArticles key={i} category={el} articles={articleReverse} vues={vues} comments={comments} ></CatArticles>
            ))}
          </section>
          <aside className={"col-4"}>
            <SuggArticles articles={articles}/>
            <PopArticles articles={articles}/>
          </aside>
        </div>
        <EditorPicks articles={articles}/>
      </main>
      <Footer/>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    articles: state.articleReducer.articles,
    comments: state.articleReducer.comments,
    vues: state.articleReducer.vues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => {
      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
