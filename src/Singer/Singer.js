import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Singer() {
  const { artist } = useParams();
  const [musics, setMusics] = useState([]);

  async function getInfo() {
    const response = await fetch(
      `https://c6gddaht9j.execute-api.ca-central-1.amazonaws.com/dev/artist/${artist}`
    );
    const json = await response.json();

    setMusics(json);
  }

  useEffect(() => {
    getInfo();
  }, []);

  if (musics.length === 0) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="flex-wrapper">
      {musics.map((music) => {
        return <Card key={music.song} music={music} />;
      })}
    </div>
  );
}

export default Singer;
