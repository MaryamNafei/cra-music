import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Song.css";
import { IoMdPlay } from "react-icons/io";

function Song() {
  const { song } = useParams();

  const [music, setMusic] = useState({});

  async function getInfo() {
    const response = await fetch(
      `https://c6gddaht9j.execute-api.ca-central-1.amazonaws.com/dev/song/${song}`
    );
    const json = await response.json();
    setMusic(json);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="flex-wrapper-song">
      <div className="card-song">
        <div className="card-header-song"></div>
        <div className="flex-wrapper-song-2">
          <div className="card-body-song ">
            <h1>{music.artist}</h1>
            <h2> {music.song}</h2>
          </div>
          <button className="btn3">
            <IoMdPlay size="25px" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Song;
