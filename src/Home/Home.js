import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../Header/Header";

function Home() {
  const [musics, setMusics] = useState([]);

  async function getInfo() {
    const response = await fetch(
      "https://c6gddaht9j.execute-api.ca-central-1.amazonaws.com/dev/musics"
    );
    const json = await response.json();
    setMusics(json);
  }

  useEffect(() => {
    getInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <h1 className="title">Recentely Played</h1>
      <div className="flex-wrapper">
        {musics.map((music) => {
          return <Card key={music.song} music={music} />;
        })}
      </div>
    </>
  );
}

export default Home;
