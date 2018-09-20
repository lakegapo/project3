import React from "react";
import { Container, Row, Col } from "../Grid";

export const EventsListItems = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="sm-12">
          <a href={props.title}><h3>Title: {props.title}</h3></a>
          <p>Summary: {props.summary}</p>
          <div>Starting Date: {props.date}</div>
        </Col>
      </Row>
    </Container>
  </li>
);
