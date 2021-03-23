import { createStore} from "redux";
import storage from 'redux-persist/lib/storage';
import {persistCombineReducers} from 'redux-persist';

import articleReducer from "./reducers/articleReducer";


const rootPersistConfig = {
  key: 'root',
  storage,
};

export default createStore(
  persistCombineReducers(rootPersistConfig, {
    articleReducer
  }),
);

