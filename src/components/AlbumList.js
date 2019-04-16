import React, { Component } from "react";
import "../styles/base.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Heading from "./Heading";
import GridView from "./GridView";
import axios from "axios";

class AlbumList extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/albums").then(resp => {
      const items = resp.data.map(item => {
        return {
          path: "/album/" + item.id,
          url: item.pic,
          name: item.name,
          id: item.id
        };
      });
      this.setState({ items });
    });
  }

  render() {
    return (
      <div>
        <Heading>My Albums</Heading>
        <GridView items={this.state.items} />

        {/* <Link to={"/Album/1"}>
          <div className="box1" />
          <div className="centered1">Architecture</div>
        </Link>

        <Link to={"/Album/2"}>
          <div className="box2" />
          <div className="centered2">Nature</div>
        </Link>

        <Link to={"/Album/3"}>
          <div className="box1" />
          <div className="centered3">Animals</div>
        </Link>

        <Link to={"/Album/4"}>
          <div className="box2" />
          <div className="centered4">Rock Climbing</div>
        </Link> */}
      </div>
    );
  }
}

export default AlbumList;
