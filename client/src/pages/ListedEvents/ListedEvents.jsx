import React, { Component } from 'react';
import { EventsList, EventsListItems } from "../../components/Events";
import axios from "axios";
import { Row, Col } from '../../components/Grid'
import { Navbar } from "../../components/Navbar/Navbar";
import "./ListedEvents.css";
import { NoEventsYet } from '../../components/NoEventsYet/NoEventsYet';


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
            <div className="listedevents">
                <Navbar />
                    <Row>
                        <Col size="sm-12">
                            {!this.state.items.length ? (
                            <NoEventsYet />
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
            </div>
        )
    }
}