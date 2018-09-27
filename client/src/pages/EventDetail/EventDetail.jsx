import React, { Component } from 'react';
import axios from "axios";
import EventDescription from '../../components/EventDetail/EventDescription/EventDescription';
import GoogleApiWrapper from '../../components/Map/EventMap/EventMap';
import JoinEventButton from '../../components/EventButton/JoinEventButton'
import EventAddress from '../../components/EventDetail/EventAddress/EventAddress'
import PeopleJoined from '../../components/EventDetail/PeopleJoined/PeopleJoined';
import './EventDetail.css'


 class EventDetail extends Component {

    state = {
        name: "Baseball",
        address: "123 Cool St. Irvine, CA 90123",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim orci tellus, id vestibulum odio dictum a. Nunc et eros magna. Aenean nec pellentesque augue. Etiam sit amet ullamcorper nisi, et euismod velit.",
        usersjoined: ['Eddie', 'jason', 'marvie', 'jonathan', 'hayden']
    }


    componentDidMount() {
        console.log("TESTSTE"); 
        const id = this.props.match.params.id;
        axios.get("/api/eventdetail/" + id)
            .then(resp => {
                console.log(resp);
                this.setState({
                    name: resp.data.name,
                    address: resp.data.address1,
                    cityState: resp.data.citystate,
                    zip: resp.data.zip,
                    description: resp.data.description,
                    timestampCreated: resp.data.updatedAt

                })
            });
    };

  render() {
    
    return (
      <div id='EventPageStyle' className="container-fluid">

          <div className="row justify-content-center">
            <div className="col-sm-auto" align='center'>
              <h1 className='eventName'>{this.state.name}</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-auto" align='center'>
            <JoinEventButton/>
            </div>
          </div>


          <div className="row justify-content-center">
            <div className='col-sm-auto'>
              <div>
                <GoogleApiWrapper/>
              </div>
            </div>
          </div>

          <div className="row justify-content-center gapDiv">
            <div className="col-sm-auto">
              <EventAddress address={this.state.address} citystate={this.state.cityState} zip={this.state.zip}/>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-auto">
              <EventDescription description={this.state.description} timestampCreated={this.state.timestampCreated}/>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-auto">
              <PeopleJoined usersjoined={this.state.usersjoined}/>
            </div>
          </div>

        </div>   
          
    );
  }
}



export default EventDetail;
