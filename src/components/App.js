import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/base.css";

import AlbumList from "./AlbumList";
import AlbumView from "./AlbumView";
import ImageView from "./ImageView";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={AlbumList} />
          <Route path="/album/:id" component={AlbumView} />
          <Route path="/image/:id" component={ImageView} />
        </div>
      </Router>
    );
  }
}

export default App;
