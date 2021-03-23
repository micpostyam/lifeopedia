import React from 'react';

const Comment = (props) => {
  const {cname, ctext, cdate} = props.comment;

  return (
    <div>
      <h5>{cname}</h5>
      <p className={"mb-0"}>{ctext}</p>
      <small>{cdate}</small>
      <hr className={"mt-1"}/>
    </div>
  );
};

export default Comment;
