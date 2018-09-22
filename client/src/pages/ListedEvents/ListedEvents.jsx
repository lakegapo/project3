import React, { Component } from 'react';
import { EventsList, EventsListItems } from "../../components/Events";
import axios from "axios";
import { Container, Row, Col } from '../../components/Grid'

export class ListedEvents extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    // GRAB API
    console.log("TEST2")
    axios.get("/api/events")
    .then(resp => {
        console.log(resp.data);
        this.setState({
            items: resp.data
        })
    });
 };

    render () {
        return (
            <Container>
                <Row>
                    <Col size="sm-12">
                        {!this.state.items.length ? (
                        <h1 className="text-center">No events have been created yet.</h1>
                        ) : (
                        <EventsList>
                            {this.state.items.map(item => {
                            return (
                                <EventsListItems
                                key={item.id}
                                title={item.name}
                                href={item.id}
                                description={item.description}
                                />
                            );
                            })}
                        </EventsList>
                        )}
                    </Col>
                </Row>
          </Container>
        )
    }
}