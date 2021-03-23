import React from 'react';

const SuggArticleElt = (props) => {
  const {category, src, titre, alt} = props.article;
  return (
    <article className={"border mb-3"}>
      <img className="d-block w-100" src={src} alt={alt ? alt : "Image poster"}/>
      <div className={"text-center pt-2"}>
        <h5 className={"text-orange"}>{category}</h5>
        <h4 className={"text-uppercase"}>{titre}</h4>
      </div>
    </article>
  );
};

export default SuggArticleElt;
