import React from "react";
import "./commentBox.css";

const CommentBox = props => (
  <div>
  <textarea onChange={props.handleChange} name="commentBody" id="editAddress" cols="47" rows="3" placeholder="Comment here..."></textarea>
  <button className="btn commentButton" onClick={props.handleClick}>Comment</button>
</div>
);

export default CommentBox;
