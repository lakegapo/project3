import React from 'react'
import './EventAddress.css'

const EventAddress = props => (
    <div id="eventDescription" className="container">
        <div className="container-fluid">
            <h2 className="eventDescriptionHeader">Where</h2>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-12">
                <a className='addressStyle fa'> &#xf017; {props.address} {props.citystate} {props.zip}</a>
            </div>
        </div>
    </div>
)



export default EventAddress; 