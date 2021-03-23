import React, {useRef, useState} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {FaListAlt, FaTag} from "react-icons/all";
import {connect} from "react-redux";
import {ADD_ARTICLE} from "../store/reducers/constants/actionTypes";

const AddArticle = (props) => {
  const [img, setImg] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder.jpg");
  const form = useRef(null);

  // will hold a reference for our real input file
  let inputFile = '';

  const submit = e => {
    e.preventDefault();
    const data = new FormData(form.current);
    let d = new Date();
    let article = {
      id: props.articles.length + 1,
      category: data.get("category"),
      titre: data.get("titre"),
      src: img,
      alt: "Article",
      tags: data.get("tags"),
      date: d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear(),
      vue: 0,
      comment: 0,
      text: data.get("text")
    };
    // dispatch action to reducer
    const action = {
      type: ADD_ARTICLE,
      value: article,
    };
    props.dispatch(action);
    document.getElementById("myform").reset();
  }

  // get image and store it with base64
  const _imChange = e => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }else{
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        let src = reader.result;
        setImg(src);
      };
    }
  }

  // function to trigger our input file click
  const handleClick = () => {
    inputFile.click();
  }

  return (
    <div>
      <Navigation login={1}/>
      <main className={"container-fluid p-5"}>
        <form className={"m-5 row"} onSubmit={submit} ref={form} id={"myform"}>
          <div className={"col-8"}>
            <div className="form-group">
              <input type="text" className="form-control border-0 bg-light" placeholder="Title" name="titre"/>
            </div>
          </div>
          <div className={"col-8"}>
            <div className="form-group">
              <label htmlFor="details" className={"bg-orange d-block p-2 pl-3 mb-0 label-text-art"}>Text</label>
              <textarea className="form-control mt-0 shadow-sm text-art" id="details" rows="3" defaultValue={"Tell" +
              " your story"} name="text"></textarea>
            </div>
            <button type="submit" className="btn btn-orange mr-2 art-btn">Save</button>
            <button type="submit" className="btn btn-orange art-btn">Publish</button>
          </div>
          <div className={"col-4"}>
            <div className="file-field">
              <div className="z-depth-1-half mb-4">
                <img src={img} className="img-fluid"
                     alt="example placeholder"/>
              </div>
              <div className="d-flex justify-content-center mb-2">
                <div className="btn btn-orange float-left" onClick={handleClick}>
                  <span>Choose file</span>
                  <input type="file" accept=".jpeg, .png, .jpg" name="src" className={"d-none"} ref={input => inputFile = input} onChange={e =>_imChange(e)} />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text  bg-orange">
                  <FaListAlt/>
                </span>
              </div>
              <select className="form-control" id="exampleFormControlSelect1" name="category">
                <option>Select Category</option>
                <option value="design">Design</option>
                <option value="style">Style</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
                <option value="aws">Aws</option>
              </select>
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-orange">
                  <FaTag/>
                </span>
              </div>
              <input type="text" className="form-control " placeholder="Articles tags" name="tags"/>
            </div>
            <small className="form-text text-muted d-block">Separate tags with a comma</small>
          </div>
        </form>
      </main>
      <Footer/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.articleReducer.articles
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
)(AddArticle);
