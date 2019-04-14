import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/base.css";
import axios from "axios";

import Home from "./Home";
import Album from "./Album";
import Inside from "./Inside";

// class App extends Component {
//   render() {
//     return (
const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Album/:id" component={Album} />
      <Route path="/Inside" component={Inside} />
    </div>
  </Router>
);
//   }
// }

export default App;
