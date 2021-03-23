import React, {useEffect, useRef} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {BsFillBookmarkFill, FaArrowAltCircleUp, FaEye, FaLinkedin, FaTwitter} from "react-icons/all";
import SuggArticles from "../components/SuggArticles";
import PopArticles from "../components/PopArticles";
import Comment from "../components/Comment";
import {connect} from "react-redux";
import {ADD_COMMENT, ADD_VUE} from "../store/reducers/constants/actionTypes";

const ArticleView = (props) => {
  const form = useRef(null);

  const {articles, comments} = props;
  // articles reverse order
  let articleReverse = [];
  for(let i= articles.length-1;i>=0;i--){
    articleReverse = [...articleReverse, articles[i]];
  }

  // get the current article
  let params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  let current = articles.filter(
    item => item.id === id,
  );
  current = current[0];

  // submit comment
  const submit = e => {
    e.preventDefault();
    const data = new FormData(form.current);
    let d = new Date();
    let comment = {
      id: props.comments.length + 1,
      cname: data.get("cname"),
      ctext: data.get("ctext"),
      cdate: d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear(),
      art_id: id
    };
    // dispatch action to reducer to add comment
    const action = {
      type: ADD_COMMENT,
      value: comment,
    };
    props.dispatch(action);
    document.getElementById("myform").reset();
  }

  // show comments
  let artComments = comments.filter(
    item => item.art_id === id,
  );

  // add view on component vue
  useEffect(() => {
    const action = {
      type: ADD_VUE,
      value: { art_id: id }
    };
    props.dispatch(action);
  });

  return (
    <div>
      <Navigation/>
      <main className={"container p-3"}>
        <div className={"row"}>
          {
            current ?
              <section className={"col-8"}>
                <h4 className={"text-orange mt-3 text-uppercase"}>{current.category}</h4>
                <h3>{current.titre}</h3>
                <p className={"text-orange"}>By micpostyam</p>
                <div className={"d-flex justify-content-between"}>
                  <div>{current.date}</div>
                  <div className={"d-flex justify-content-end"}>
                    <div className={"mr-2"}>
                      <FaEye className={"text-orange"}/>
                      <small className={"p-1"}>{current.vue}</small>
                    </div>
                    <div className={"mr-2"}>
                      <FaArrowAltCircleUp/>
                      <small className={"p-1"}>{current.comment}</small>
                    </div>
                    <div>
                      <BsFillBookmarkFill/>
                    </div>
                  </div>
                </div>
                <article>
                  <img className="d-block w-100" src={current.src} alt={"article"}/>
                  <p>{current.text}</p>
                  <div className={"border border-left-0 border-right-0 border-orange pt-2 pb-2 d-flex" +
                  " justify-content-between"}>
                    <div>tags: {current.tags}</div>
                    <div>
                      <FaLinkedin className={"m-1 text-primary"}/>
                      <FaTwitter className={"m-1 text-info"}/>
                    </div>
                  </div>
                </article>
                <aside>
                  <div className={"d-flex justify-content-between align-items-center mt-3"}>
                    <div className={"mr-2"}>
                      <span>{current.comment} Comments</span>
                    </div>
                    <div className={"mr-2"}>
                      <button className={"btn btn-orange art-btn"}>Post a comment</button>
                    </div>
                  </div>
                  <div className={"bg-white border mt-1"}>
                    <div className={"p-3"}>
                      {artComments.map(el => (
                        <Comment key={el.id} comment ={el} />
                      ))}
                    </div>
                    <div className={"p-2"}>
                      <form onSubmit={submit} ref={form} id={"myform"}>
                        <label htmlFor="textComment">Name</label>
                        <input type="text" className="form-control mb-3 art-btn bg-orange-light border-0" name="cname"/>
                        <label htmlFor="textComment">Comment</label>
                        <textarea className="form-control art-btn bg-orange-light border-0" id="textComment" rows="3" name="ctext"></textarea>
                        <div className={"m-2"}>
                          <button type={"submit"} className={"btn btn-orange art-btn"}>Comment</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </aside>
              </section>
              :""
          }
          <aside className={"col-4"}>
            <SuggArticles articles={articleReverse}/>
            <PopArticles articles={articleReverse}/>
          </aside>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.articleReducer.articles,
    comments: state.articleReducer.comments,
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
)(ArticleView);
