import React, { Component } from 'react';
import axios from "axios";
export default EventDetail;
import EventDescription from '../../components/EventDetail/EventDescription';
import GoogleApiWrapper from '../../components/Map/EventMap/EventMap';
import "../../components/EventDetail/Eventpage/eventpagestyle.css";

 class EventDetail extends Component {
     
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get("/api/eventdetail/" + id)
            .then(resp => {
                console.log(resp);
                this.setState({
                    items: resp.data
                })
            });
    };

  render() {
    return (
      
        <div className="container-fluid">

          <div className="row justify-content-center">
            <div className="col-sm-auto" align='center'>
              <h1 className='eventName'>Event Name</h1>
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
              <EventDescription/>
            </div>
          </div>

        </div>        
    );
  }
}



export default EventDetail;
