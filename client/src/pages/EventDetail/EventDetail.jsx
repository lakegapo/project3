import React, { Component } from 'react';
import axios from "axios";
import EventDescription from '../../components/EventDetail/EventDescription/EventDescription';
import GoogleApiWrapper from '../../components/Map/EventMap/EventMap';
import "../../components/EventDetail/Eventpage/eventpagestyle.css";
import { Navbar } from "../../components/Navbar/Navbar";
import "./EventDetail.css";
import JoinEventButton from '../../components/EventButton/JoinEventButton'
import EventAddress from '../../components/EventDetail/EventAddress/EventAddress'


 class EventDetail extends Component {

    state = {
        name: "",
        address: "",
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
                    address: resp.data.address,
                    description: resp.data.description
                })
            });
    };

  render() {
    
    return (
      <div>       
        <Navbar />
        <div className="container-fluid">
      <div id='EventPageStyle' className="container-fluid">

          <div className="row justify-content-center">
            <div className="col-sm-auto" align='center'>
              <h1 className='eventName'>Event Name {this.state.name}</h1>
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
              <EventAddress body={this.state.address}/>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-auto">
              <EventDescription body={this.state.description}/>
            </div>
          </div>

        </div>  
      </div>      
        </div>   
      
        // <div className="container-fluid">

        //   <div className="row justify-content-center">
        //     <div className="col-sm-auto" align='center'>
        //       <h1 className='eventName'>{this.state.name}</h1>
        //     </div>
        //   </div>

        //   <div className="row justify-content-center">
        //     <JoinEventButton/>
        //   </div>


        //   <div className="row justify-content-center">
        //     <div className='col-sm-auto'>
        //       <div align="center">
        //         <GoogleApiWrapper position="relative" className='map'/>
        //       </div>
        //     </div>
        //   </div>

        //   <div className="row justify-content-center gapDiv">
        //     <div className="col-sm-auto">
        //       <EventDescription 
        //         body={this.state.description}
        //       />
        //     </div>
        //   </div>

        // </div>        
    );
  }
}



export default EventDetail;
