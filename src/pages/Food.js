import React from 'react';
import CategoryPage from "../components/CategoryPage";
import {connect} from "react-redux";

const Food = (props) => {
  const {articles, vues, comments} = props;
  // articles reverse order
  let articleReverse = [];
  for(let i= articles.length-1;i>=0;i--){
    articleReverse = [...articleReverse, articles[i]];
  }
  return (
    <CategoryPage category={"food"} articles={articleReverse} vues={vues} comments={comments}/>
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
)(Food);
