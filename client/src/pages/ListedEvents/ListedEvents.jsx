import React, { Component } from 'react';
import { EventsList, EventsListItems } from "../../components/Events";
import axios from "axios";
import { Row, Col } from '../../components/Grid'
import { Navbar } from "../../components/Navbar/Navbar";
import "./ListedEvents.css";

export class ListedEvents extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    // GRAB API
    const citystate = this.props.match.params.citystate;
    const category = this.props.match.params.category;
    axios.get("/api/events/" + citystate + "/" + category)
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
            </div>
        )
    }
}