import React, { useState } from "react";
import { Link } from "react-router-dom";
import YouLose from "./YouLose";
import YouWin from "./YouWin";

export default function Result() {
  const correct = 3; // [correctAnswers, setCorrectAnswers] =useState();
  const wrong = 2; // [wrongAnswers, setWrongAnswers] =useState();
  const result = correct - wrong;

  return (
    <>
      {/* Access database and return number of correct and wrong answers in separata variable each*/}
      <h1 className="shrikhand-regular">Your score:</h1>
      <div>Number of correct answers: </div>
      <div>Number of wrong answers: </div>
      {/*  If number of correct answers bigger than number of wrong answers -> Link to Winners page */}
      {/*  If number of wrong answers bigger than number of correct answers -> Link to Losers page */}
      <div>
        Reveal your ending:
        {result > 0 ? (
          <Link to={`/YouWin`}> Result</Link>
        ) : (
          <Link to={`/YouLose`}> Result</Link>
        )}
      </div>
    </>
  );
}
