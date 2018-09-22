import React, { Component } from 'react';
import axios from "axios";

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
    // state = {  }
    render() {
        return (
            <div className='container'>
                <h1>Event Name</h1>
                <button>Join</button>
                <img alt='map' src='https://via.placeholder.com/200x200' />

                <h2>Event Description</h2>

                <span>Address:</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac tortor neque. Sed quam dui, vulputate vitae scelerisque sit amet, venenatis vel purus. Aliquam aliquam pharetra efficitur. Suspendisse scelerisque malesuada dolor, et lobortis neque blandit id. Sed sit amet diam at nibh feugiat tempus nec quis erat. Ut laoreet euismod ante sed molestie. Nulla euismod blandit sapien, eget suscipit tortor fringilla in. Maecenas fermentum fringilla enim, ut volutpat nisl rhoncus quis.</p>

                <div>
                    <span>People Attending</span>
                </div>

                <div>
                    <span>Comments</span>
                </div>

            </div>
        );
    }
}

export default EventDetail;
import EventDescription from '../../components/EventDetail/EventDescription';
import GoogleApiWrapper from '../../components/Map/EventMap/EventMap';
import "../../components/EventDetail/Eventpage/eventpagestyle.css";


 class EventDetail extends Component {
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
