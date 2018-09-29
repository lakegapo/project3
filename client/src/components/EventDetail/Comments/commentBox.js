import React from "react";
import { Container, Row, Col } from "../../Grid";

const CommentBox = props => (
  <div>
  <textarea onChange={props.handleChange} name="commentBody" id="editAddress" rows="2"></textarea>
  <button onClick={props.handleClick}>Click Here</button>
</div>
);

export default CommentBox;
