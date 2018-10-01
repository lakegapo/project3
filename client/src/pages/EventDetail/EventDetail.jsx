import React, { Component } from 'react';
import axios from "axios";
// import { CommentList, CommentListItem, CommentBox } from "../../components/EventDetail/Comments";
import CommentBox from "../../components/EventDetail/Comments/commentBox";
import CommentList from "../../components/EventDetail/Comments/commentList";
import CommentListItem from "../../components/EventDetail/Comments/commentListItem";
import EventDescription from '../../components/EventDetail/EventDescription/EventDescription';
import GoogleApiWrapper from '../../components/Map/EventMap/EventMap';
import { Navbar } from "../../components/Navbar/Navbar";
import JoinEventButton from '../../components/EventButton/JoinEventButton'
import EventAddress from '../../components/EventDetail/EventAddress/EventAddress'
import PeopleJoined from '../../components/EventDetail/PeopleJoined/PeopleJoined';
import "./EventDetail.css";


class EventDetail extends Component {

    state = {
        name: "",
        loggedUser: sessionStorage.getItem("userId"),
        address: "",
        cityState: "",
        zip: "",
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
        event.preventDefault();
        // console.log(this.state.loggedUser);
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
                    id: resp.data.id,
                    address: resp.data.address1,
                    cityState: resp.data.citystate,
                    zip: resp.data.zip
                })
            });
        axios.get("/api/comments/" + id)
            .then(resp => {
                // console.log(resp);
                this.setState({
                    comments: resp.data
                })
                // console.log(this.state.comments);
            });
        axios.get("/api/guests/" + id)
            .then(resp => {
                console.log("guests", resp, "///////");
                // this.setState({
                    // guests: resp.data
                // })
            });
    };

    render() {

        return (
            <div>
                <Navbar />
                <div id='EventPageStyle' className="container-fluid">

                    <div className="row justify-content-center">
                        <div className="col-sm-auto" align='center'>
                            <h1 className='eventName'>{this.state.name}</h1>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-auto" align='center'>
                            <JoinEventButton onClick={this.joinEvent}/>
                        </div>
                    </div>


                    <div className="row justify-content-center">
                        <div className='col-sm-auto'>
                            <div className="mapWrapper">
                                <GoogleApiWrapper />
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center gapDiv">
                        <div className="col-auto">
                            <EventAddress address={this.state.address} citystate={this.state.cityState} zip={this.state.zip} />
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-auto">
                            <EventDescription description={this.state.description} timestampCreated={this.state.timestampCreated} />
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-auto lastDiv">
                            <PeopleJoined usersjoined={this.state.guests} />
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-auto lastDiv">
                            <CommentBox
                                handleChange={this.handleInputChange}
                                handleClick={this.onHandleClick}
                            />
                            <CommentList>
                                {this.state.comments.map(comment => {
                                    return (
                                        <CommentListItem
                                            key={comment.id}
                                            userName={comment.User.firstName}
                                            imageUrl={comment.User.imageUrl}
                                            commentBody={comment.text}
                                            postDate={comment.createdAt}
                                        />
                                    );
                                })};
                            </CommentList>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}



export default EventDetail;
