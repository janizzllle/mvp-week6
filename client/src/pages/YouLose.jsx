import React from "react";
import { Link } from "react-router-dom";

export default function YouLose() {
  return (
    <>
      <h1 className="shrikhand-regular">you lose!</h1>
      <p>Now you will stay here with Gollum forever...</p>
      <img
        className="resultimgs"
        src="https://www.looper.com/img/gallery/gollums-entire-backstory-explained/intro-1584137078.jpg"
      ></img>
      <div>
        <button>
          <Link to="/">New game</Link>
        </button>
      </div>
    </>
  );
}
