import React, { Component } from 'react';
import axios from "axios";
// import { CommentList, CommentListItem, CommentBox } from "../../components/EventDetail/Comments";
import CommentBox from "../../components/EventDetail/Comments/commentBox";
import CommentList from "../../components/EventDetail/Comments/commentList";
import CommentListItem from "../../components/EventDetail/Comments/commentListItem";
import EventDescription from '../../components/EventDetail/EventDescription/EventDescription';
import GoogleApiWrapper from '../../components/Map/EventMap/EventMap';
import "../../components/EventDetail/Eventpage/eventpagestyle.css";

class EventDetail extends Component {

    state = {
        name: "",
        loggedUser : sessionStorage.getItem("userId"),
        description: "",
        id: "",
        commentBody: "",
        comments: [],
        guests: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onHandleClick = event => {
        event.preventDefault();
        axios.post("/api/comments", {
            text: this.state.commentBody,
            UserId: this.state.loggedUser,
            EventId: this.state.id
        })
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            });
    };

    joinEvent = event => {
        console.log("TESTSTEST");
        event.preventDefault();
        console.log(this.state.loggedUser);
        console.log(this.state.id);
        axios.post("/api/guests", {
            userId: this.state.loggedUser,
            eventId: this.state.id
        })
        .then(resp => {
            console.log(resp);
        })
        .catch(err => {
            console.log(err);
        })
    }


    componentDidMount() {
        // console.log("TESTSTE");
        const id = this.props.match.params.id;
        axios.get("/api/eventdetail/" + id)
            .then(resp => {
                // console.log(resp);
                this.setState({
                    name: resp.data.name,
                    description: resp.data.description,
                    id: resp.data.id
                })
            });
        axios.get("/api/comments/")
            .then(resp => {
                // console.log(resp);
                this.setState({
                    comments: resp.data
                })
            });
        axios.get("/api/guests/")
        .then(resp => {
            this.setState({
                guests: resp.data
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
                        <button type='button' onClick={this.joinEvent} className='joinbutton'>Join</button>
                    </div>
                </div>


                <div className="row justify-content-center">
                    <div className='col-sm-auto'>
                        <div align="center">
                            <GoogleApiWrapper position="relative" className='map' />
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
                <div>
                    <CommentBox
                        handleChange={this.handleInputChange}
                        handleClick={this.onHandleClick}
                    />
                    <CommentList>
                        {this.state.comments.map(comment => {
                            return (
                                <CommentListItem
                                key = {comment.id}
                                userName = {comment.User.firstName}
                                imageUrl = {comment.User.imageUrl}
                                commentBody = {comment.text}
                                postDate = {comment.createdAt}
                                 />
                            );
                        })};
                </CommentList>
                </div>
            </div>
        );
    }
}



export default EventDetail;
