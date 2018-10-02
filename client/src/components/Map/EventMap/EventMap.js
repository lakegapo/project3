import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '290px',
    height: '220px',
    border: "3px solid #f76c6c",
    marginLeft: "30px",
    borderRadius: "5px",
    boxShadow: "3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"

  }

export class MapContainer extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    lat: this.props.geoLat,
    long: this.props.geoLong
  }
    render() {
      return (
        <Map 
        google={this.props.google} 
        zoom={11} 
        style={style}
        initialCenter={{
            lat: this.state.lat,
            lng: this.state.long
          }}
        >
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
              {/* <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div> */}
          {/* </InfoWindow> */}
        </Map>
      );
    }
  }
 
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCxubm463ms-PFfjtji3HziARII4kd1_tM")
  })(MapContainer)