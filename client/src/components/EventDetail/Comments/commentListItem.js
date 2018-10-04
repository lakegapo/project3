import React from "react";
import moment from 'moment';
import './commentBox.css';

const CommentListItem = props => (
  
  <div id="commentContainer" className="container">
    <div className="container-fluid">
      <p className='userName'>{props.userName}</p>
    </div>

    <div className="row justify-content-center">
      <div className="col-sm-12">
      <img className='avatar' src={props.imageUrl}/>
      <div className="dateAndComment">
        <p>{moment(props.postDate).format("MMM Do, YYYY hh:mm A")}</p>
        <div>{props.commentBody}</div>
      </div>
      </div>
    </div>  
  </div>
  
);

export default CommentListItem