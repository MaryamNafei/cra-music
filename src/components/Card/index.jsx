import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { IoMdPlay } from "react-icons/io";

const Card = ({ music }) => {
  return (
    <div className="card">
      <div className="card-header"></div>
      <div className="flex-wrapper-2">
        <div className="card-body ">
          <Link to={`/artist/${music.artist}`}>
            <h3>{music.artist}</h3>
          </Link>
          <Link to={`/song/${music.song}`}>
            <h3>{music.song}</h3>
          </Link>
        </div>
        <button className="btn">
          <IoMdPlay size="25px" />
        </button>
      </div>
    </div>
  );
};
export default Card;
