import React, { Component } from 'react';
import { EventsList, EventsListItems } from "../Events";

export class ListedEvents extends Component {

  state = {
    items: []
  }

  componentDidMount = () => {
    // GRAB API

    let url = `http://localhost:3000/api/routes/index.routes/events`;

    fetch(url)
    .then(res => res.json())
    .then((result) => {

      let array = this.state.items.push(result);

      this.setState({
          isLoaded: true,
          items: array
      });
    }, (error) => {
        console.log(error);
        }
    )  
 }

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
                                title={item.title}
                                href={item.title}
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