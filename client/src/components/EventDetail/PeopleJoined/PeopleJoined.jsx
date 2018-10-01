import React from 'react'
import './PeopleJoined.css'

const PeopleJoined = (props) => {
    return (
        <div id="eventDescription" className="container">
            <div className="container-fluid">
                <h2 className="eventDescriptionHeader">See Who Joined</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12">
                    <div className='descriptionStyle'>{props.children}</div>
                </div>
            </div>
        </div>
    )
}

export default PeopleJoined