import React, { Component } from "react";
import "../styles/base.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Inside extends Component {
  state = {
    image: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3001/image?id=${this.props.match.params.id}`)
      .then(resp => {
        this.setState({ image: resp.data });
      });
  }

  render() {
    return (
      <div>
        <h1>Image</h1>
        <div id="wrap2">
          <div className="item">
            {this.state.image.map(image => (
              <img src={image} style={{ width: 600, height: 1000 }} />
            ))}
          </div>
          <div />
          <Link to={"/"}>
            <button id="bt">Go Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Inside;
