import React from 'react';
import {FaCommentAlt, FaEye} from "react-icons/all";

const ArticleDetails = (props) => {
  const {details} = props.article;
  let vue = props.vues.filter(
    item => item.art_id === props.article.id,
  );
  let comment = props.comments.filter(
    item => item.art_id === props.article.id,
  );
  return (
    <div className={"article-details p-2"}>
      <div>
        <p className={"text-truncate"}>{details}</p>
      </div>
      <div className={"d-flex justify-content-end"}>
        <div className={"m-2 text-orange"}>
          <FaEye/>
          <small className={"p-1"}>{vue.length}</small>
        </div>
        <div className={"m-2 text-orange"}>
          <FaCommentAlt/>
          <small className={"p-1"}>{comment.length}</small>
        </div>
        <div className={"m-2 text-orange"}>
          <span>0</span>
          <span className={"p-1"}>mins read</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
