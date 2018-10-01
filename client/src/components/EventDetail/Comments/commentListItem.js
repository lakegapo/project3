import React from "react";
import { Container, Row, Col } from "../../Grid";

const CommentListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="sm-3">
          <p>{props.userName}</p>
          <img src={props.imageUrl}/>
        </Col>
        <Col size="sm-9">
          <p>Posting Date: {props.postDate}</p>
          <div>{props.commentBody}</div>
        </Col>
      </Row>
    </Container>
  </li>
);

export default CommentListItem;