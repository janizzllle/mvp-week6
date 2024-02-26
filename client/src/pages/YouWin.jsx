import React from "react";
import { Link } from "react-router-dom";

export default function YouWin() {
  return (
    <>
      <h1 className="shrikhand-regular">you win!</h1>
      <p>Now grab the ring an run! </p>
      <img
        className="resultimgs"
        src="https://themidult.com/wp-content/uploads/2021/04/lord-of-the-rings-gollum-angry-nasty-personality.png"
      ></img>
      <div>
        <button>
          <Link to="/">New game</Link>
        </button>
      </div>
    </>
  );
}
