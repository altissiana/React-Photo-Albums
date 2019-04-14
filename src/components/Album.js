import React, { Component } from "react";
import "../styles/base.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Inside from "./Inside";

class Album extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3001/images?albumId=${this.props.match.params.id}`)
      .then(resp => {
        this.setState({ images: resp.data });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Album</h1>
        <Link to={"/Inside/" + this.state.imageId}>
          <div className="item">
            {this.state.images.map(image => (
              <img
                src={image.image}
                style={{
                  width: 400,
                  height: 600,
                  // border: "1px solid #efefef",
                  margin: 10
                }}
              />
            ))}
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default Album;
