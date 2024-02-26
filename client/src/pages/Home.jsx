import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="shrikhand-regular">
          So you know
          <br />
          LOTR by heart?{" "}
        </h1>

        <div className="introtext">
          By answering all the questions in this game you can prove your
          extential LOTR knowledge once and for all!
        </div>
        <br />
        <div className="instructions">
          <strong>Instructions:</strong>
        </div>
        <ul className="instructions">
          <li>A quote will appear on the screen</li>
          <li>Guess the character to which the quote belongs </li>
          <li>For each correct answer you earn one point</li>
          <li>For each wrong answer you will get zero points</li>
          <li>There will be 5 different quotes in total</li>
          <li>After 5 quotes, you can check you results</li>
          <li>Then you will find out, whether you win or loose!</li>
        </ul>

        <div className="introtext">
          Click on the button below to start the game
        </div>
      </div>
      <button>
        <Link to="/Game">Play!</Link>
      </button>
    </>
  );
}
