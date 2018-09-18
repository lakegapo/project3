import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import EventList from './pages/eventList/eventList';

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
              <Switch>
                <Route exact path = "/" exact component = {LandingPage} />
                <Route exact path = "/eventlist" component = {EventList} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
