import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="shrikhand-regular">So you know LOTR by heart? </h1>

        <div className="introtext">
          By answering all the questions in this game you can prove your
          extential LOTR knowledge once and for all!
        </div>
        <br />
        <div>Instructions:</div>

        <br />
        <div className="introtext">
          Click on the button below to start a game
        </div>
      </div>
      <button>
        <Link to="/Game">Play!</Link>
      </button>
    </>
  );
}
