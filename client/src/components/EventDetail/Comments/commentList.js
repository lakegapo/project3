import React from 'react';

const CommentList = props => (
    <ul className="list-group">{props.children}</ul>
  );
  
export default CommentList;