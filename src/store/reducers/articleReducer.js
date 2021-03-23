import {ADD_ARTICLE, ADD_COMMENT, ADD_VUE} from "./constants/actionTypes";

const initialState = {
  articles: [],
  comments: [],
  vues: []
};

function articleReducer(state = initialState, action) {
  let nextState;
  switch (action.type){
    case ADD_ARTICLE:
      nextState = {
        ...state,
        articles: [...state.articles, action.value],
      };
      return nextState || state;
    case ADD_COMMENT:
      nextState = {
        ...state,
        comments: [...state.comments, action.value],
      };
      return nextState || state;
    case ADD_VUE:
      nextState = {
        ...state,
        vues: [...state.vues, action.value],
      };
      console.log(nextState.vues)
      return nextState || state;
    default:
      return state;
  }
};

export default articleReducer;
