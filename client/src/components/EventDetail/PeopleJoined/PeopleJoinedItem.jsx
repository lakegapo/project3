import React from "react";
import { Container, Row, Col } from "../../Grid";

const PeopleJoinedItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="sm-12">
          <p>{props.firstName}</p>
          <div><img src={props.imageUrl} /></div>
        </Col>
      </Row>
    </Container>
  </li>
);

export default PeopleJoinedItem;