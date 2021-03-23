import React from 'react';

const ArticlePoster = (props) => {
  const {category, src, titre, alt} = props.article;
  const {children} = props;
  return (
    <div className={"poster"}>
      <div className={"poster-head d-flex align-items-start flex-column"}>
        { category ? <h4 className={"mb-auto m-2 p-2 font-weight-bold text-white bg-poster-head"}>{category}</h4> : ""}
        { titre ? <h3 className={"m-2 p-2 font-weight-bold text-white bg-poster-head"}>{children ? children : titre}</h3> : ""}
      </div>
      <img className="d-block w-100" src={src} alt={alt ? alt : "Image poster"}/>
    </div>
  );
};

export default ArticlePoster;
