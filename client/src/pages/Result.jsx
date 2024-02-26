import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YouLose from "./YouLose";
import YouWin from "./YouWin";

export default function Result() {
  const [id, setId] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    getMaxId();
  }, []);

  const getMaxId = async () => {
    try {
      const response = await fetch(`/api/games/`);
      const data = await response.json();
      let index = data.length;
      getResult(data[index - 1].id);
    } catch (err) {
      console.log(err);
    }
  };
  const getResult = async (id) => {
    try {
      const response = await fetch(`/api/games/${id}/sum`);
      const data = await response.json();
      console.log(data[0].total);
      setResult(data[0].total);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3 className="shrikhand-regular">
        You got {result} correct answers! This means
      </h3>

      {result > 3 ? <YouWin /> : <YouLose />}

      {/* <div>
        Click here to reveal your ending:
        <div>
          {result > 2 ? (
            <Link to={`/YouWin`}> Result</Link>
          ) : (
            <Link to={`/YouLose`}> Result</Link>
          )}
        </div> 
      </div>*/}
    </>
  );
}
