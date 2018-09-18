import React, { Component } from 'react';
import LandingPage from "./components/LandingPage/LandingPage";
import EventList from "./components/eventList/eventList";
import EditForm from "./components/EditForm/EditForm";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Nav/> component will go here */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/eventlist" component={EventList} />
            <Route exact path="/create" component={EditForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
