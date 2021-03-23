import React from 'react';
import {FaArrowAltCircleUp, FaCommentAlt, FaEye} from "react-icons/all";
import {Link} from "react-router-dom";

const PopArticleElt = (props) => {
  const {titre, vue, comment} = props.article;
  return (
    <article className={"article-details p-2 border mt-0 bg-white"}>
      <Link to={"/article?id="+props.article.id}>
        <div>
          <p className={"text-truncate text-dark"}>{titre}</p>
        </div>
        <div className={"d-flex justify-content-end"}>
          <div className={"m-2"}>
            <FaArrowAltCircleUp className={"text-orange"}/>
            <small className={"p-1 text-dark"}>0</small>
          </div>
          <div className={"m-2"}>
            <FaEye className={"text-orange"}/>
            <small className={"p-1 text-dark"}>{vue}</small>
          </div>
          <div className={"m-2"}>
            <FaCommentAlt className={"text-orange"}/>
            <small className={"p-1 text-dark"}>{comment}</small>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PopArticleElt;
