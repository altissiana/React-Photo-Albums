import React, { Component } from "react";
import "../styles/base.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Albums</h1>

        <div id="container">
          <div id="wrapper">
            <Link to={"/Album/1"}>
              <div className="box1">
                <img
                  src="https://images.unsplash.com/photo-1547051501-350b4385f7aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
                  height="450"
                  width="200"
                />
              </div>
              <div className="centered1">Architecture</div>
            </Link>

            <Link to={"/Album/2"}>
              <div className="box2">
                <img
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  height="450"
                  width="200"
                />
              </div>
              <div className="centered2">Nature</div>
            </Link>

            <Link to={"/Album/3"}>
              <div className="box1">
                <img
                  src="https://images.unsplash.com/photo-1552874624-448f857074ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  height="450"
                  width="200"
                />
              </div>
              <div className="centered3">Animals</div>
            </Link>

            <Link to={"/Album/4"}>
              <div className="box2">
                <img
                  src="https://images.unsplash.com/photo-1516592673884-4a382d1124c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  height="450"
                  width="200"
                />
              </div>
              <div className="centered4">Rock Climbing</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
