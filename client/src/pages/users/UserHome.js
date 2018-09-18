import React, { Component } from "react";
import axios from "axios";
class UserHome extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get("/api/user")
        .then(resp => {
            console.log(resp)
            this.setState({users: resp.data || []})
        })
        .catch(err => {
            console.error(err);
        })
    }
    renderUsers = () => {
        if(this.state.users.length > 0) {
            return this.state.users.map(usr => <tr>
                <td><a href = {"/user/" +usr.id}>view</a></td>
                <td>{usr.email}</td>
                </tr>);
        }
        else {
            return <p>No users Found :(</p>
        }
    }
  render() {
    return (
      <div>
          <h1>User Home</h1>
          <a className = "btn btn-primary " href = "/user/create">Create User</a>
          <table class = "table">
              <tr>
                  <th>View</th>
                  <th>E-Mail</th>
              </tr>
              <tbody>
                  {this.renderUsers()}
              </tbody>
          </table>
      </div>
    );
  }
}

export default UserHome;
