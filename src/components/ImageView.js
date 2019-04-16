import React, { Component } from "react";
import "../styles/base.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ImageView extends Component {
  state = {
    image: "",
    albumId: 0
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:3001/images/${id}`).then(resp => {
      this.setState({
        image: resp.data.ur,
        albumId: resp.data.albumId
      });
    });
  }

  render() {
    return (
      <div className="imageView">
        <Link to={"/album/" + this.state.albumId}>Back to Album</Link>
        <div>
          <Link className="nav" to={"/"}>
            {" "}
            &lt;
          </Link>
          <img src={this.state.image} />
          <Link to="/">&gt;</Link>
        </div>
      </div>
    );
  }
}

export default ImageView;
