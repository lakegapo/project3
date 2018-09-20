import React, { Component } from "react";
import axios from "axios";

class UserView extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    console.log(this.props.match)
    const id = this.props.match.params.id;
    axios.get("/api/user/"+ id)
    .then(resp => {
      console.log(resp);
      this.setState({user: resp.data})
    })
    .catch(e => {
      console.error(e);
    })
  }
  userDisplay = () => {
    return(
      <div>
        {this.state.user.email}
      </div>
    )
  }
  render() {
    return (
      <div>
          {this.userDisplay()}
      </div>
    );
  }
}

export default UserView;
