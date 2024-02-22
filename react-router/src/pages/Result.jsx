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
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e0547c2-467a-4b92-a2fd-a014af686793/dail067-5778fe13-d603-43d3-8b6f-e205b8210f17.png/v1/fill/w_1600,h_550/lord_of_the_rings_png_title_by_workfromhomegal_dail067-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTUwIiwicGF0aCI6IlwvZlwvM2UwNTQ3YzItNDY3YS00YjkyLWEyZmQtYTAxNGFmNjg2NzkzXC9kYWlsMDY3LTU3NzhmZTEzLWQ2MDMtNDNkMy04YjZmLWUyMDViODIxMGYxNy5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.owJhwZy6_k11SCutQOVR_GX3AG_e8r-8BPxZkj7DpKk"></img>
      <div></div>
      {/* Access database and return number of correct and wrong answers in separata variable each*/}
      <h1>Here are your results </h1>
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
