import React from "react";
import { Link } from "react-router-dom";
import "../styles/base.css";

const AlbumNav = props => (
  <nav>
    <ul>
      {props.albums.map(album => (
        <li key={"album-nav-" + album.id}>
          <Link to={`/album/${album.id}`}>{album.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default AlbumNav;
