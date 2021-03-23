import React from 'react';
import {FaArrowAltCircleUp, FaCommentAlt, FaEye} from "react-icons/all";

const PopArticleElt = (props) => {
  const {titre, vue, comment} = props.article;
  return (
    <article className={"article-details p-2 border mt-0 bg-white"}>
      <div>
        <p className={"text-truncate"}>{titre}</p>
      </div>
      <div className={"d-flex justify-content-end"}>
        <div className={"m-2"}>
          <FaArrowAltCircleUp className={"text-orange"}/>
          <small className={"p-1"}>0</small>
        </div>
        <div className={"m-2"}>
          <FaEye className={"text-orange"}/>
          <small className={"p-1"}>{vue}</small>
        </div>
        <div className={"m-2"}>
          <FaCommentAlt className={"text-orange"}/>
          <small className={"p-1"}>{comment}</small>
        </div>
      </div>
    </article>
  );
};

export default PopArticleElt;
