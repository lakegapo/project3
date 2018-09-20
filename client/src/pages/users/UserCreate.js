import React, { Component } from "react";
import axios from "axios";

class UserCreate extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    }
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value })
  submit = e => {
    e.preventDefault();
    axios.post("/api/user", {email: this.state.email})
    .then(resp => {
        window.location.assign("/user/" + resp.data.id);
    })
    .catch(e => {
      console.error(e)
    })
  }
  render() {
    return (
      <div>
          <form>
            <label>Email</label>
            <input type = "text" 
            name = "email" 
            placeholder = "asd@asd.net..." 
            value = {this.state.email}
            onChange = {this.onChange}
            />
            <button className = "btn btn-primary" onClick={this.submit}>submit</button>
          </form>
      </div>
    );
  }
}

export default UserCreate;
