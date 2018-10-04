import React from "react";
import "./commentBox.css";

const CommentBox = props => (
  <div className="commentBoxDiv">
    <div className="row justify-content-center">
      <div className="col-sm-auto">
        <textarea onChange={props.handleChange} name="commentBody" id="editAddress" cols="47" rows="3" placeholder="Comment here..."></textarea>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-sm-auto">
        <button className="btn commentButton" onClick={props.handleClick}>Comment</button>
      </div>
    </div>
  </div>
);

export default CommentBox;
