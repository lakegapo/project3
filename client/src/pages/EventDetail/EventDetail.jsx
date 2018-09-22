import React, { Component } from 'react';
import axios from "axios";
import EventDescription from '../../components/EventDetail/EventDescription/EventDescription';
import GoogleApiWrapper from '../../components/Map/EventMap/EventMap';
import "../../components/EventDetail/Eventpage/eventpagestyle.css";

 class EventDetail extends Component {

    state = {
        name: "",
        description: "",
    }


    componentDidMount() {
        console.log("TESTSTE");
        const id = this.props.match.params.id;
        axios.get("/api/eventdetail/" + id)
            .then(resp => {
                console.log(resp);
                this.setState({
                    name: resp.data.name,
                    description: resp.data.description
                })
            });
    };

  render() {
    return (
      
        <div className="container-fluid">

          <div className="row justify-content-center">
            <div className="col-sm-auto" align='center'>
              <h1 className='eventName'>{this.state.name}</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-auto" align='center'>
              <button type='button' className='joinbutton'>Join</button>
            </div>
          </div>


          <div className="row justify-content-center">
            <div className='col-sm-auto'>
              <div align="center">
                <GoogleApiWrapper position="relative" className='map'/>
              </div>
            </div>
          </div>

          <div className="row justify-content-center gapDiv">
            <div className="col-sm-auto">
              <EventDescription 
                body={this.state.description}
              />
            </div>
          </div>

        </div>        
    );
  }
}



export default EventDetail;
