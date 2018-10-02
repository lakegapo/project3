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
<<<<<<< HEAD
                    <div className='descriptionStyle joinedList'>{props.children}</div>
=======
                    <div className='descriptionStyle joinedList'>{props.usersjoined[0]}</div>
>>>>>>> 7ea103a2a5db7eaed8f8bde5ec396540fb02b322
                </div>
            </div>
        </div>
    )
}

export default PeopleJoined