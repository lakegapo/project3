import React from "react";
import { Container, Row, Col } from "../Grid";
import "./EventsListItems.css";

export const EventsListItems = props => (
  <li id="eventslistitems" className="list-group-item">
    <Container>
      <Row fluid>
        <Col size="sm-12">
          <a href={`/eventdetail/${props.href}`}><h3>Title: {props.title}</h3></a>
          <p>Summary: {props.description}</p>
          <div>Starting Date: {props.date}</div>
        </Col>
      </Row>
    </Container>
  </li>
);
