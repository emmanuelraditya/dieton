import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


import { home } from "./pages/home/home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
