import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Design from "./pages/Design";
import Style from "./pages/Style";
import Travel from "./pages/Travel";
import Food from "./pages/Food";
import Aws from "./pages/Aws";
import Login from "./pages/Login";
import AddArticle from "./pages/AddArticle";
import ArticleView from "./pages/ArticleView";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/design" exact component={Design} />
        <Route path="/style" exact component={Style} />
        <Route path="/travel" exact component={Travel} />
        <Route path="/food" exact component={Food} />
        <Route path="/aws" exact component={Aws} />
        <Route path="/login" exact component={Login} />
        <Route path="/addarticle" exact component={AddArticle} />
        <Route path="/article" exact component={ArticleView} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
