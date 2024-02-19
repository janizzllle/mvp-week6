import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>MVP week 6</div>
      <h1>possible lotr games:</h1>
      <div className="col">
        <h2>Game Idea 1: How well do you know lotr?</h2>
        <h3>- Fight your way out of gollums' cave</h3>
        <div className="box">
          How it works:
          <br></br>- The computer shuffles a random name of a lotr character
          <br></br>- then the player has to answer questions about this
          character
        </div>
        <div className="box">
          Given routes provided by the api:
          <ul>
            <li>Book names</li>
            <li>Movie names</li>
            <li>Quotes</li>
            <li>Characters including name, realm, and more</li>
          </ul>
        </div>
        <div className="box">
          example questions:
          <br></br>
          in which movie(s) does this person appear?
          <br></br>
          >> click on all listed movies that apply
          <br></br>
          <br></br>
          how old is the character?
          <br></br>>> choose 0 - 10, 10 - 30, 30 - 60 , 60 - 100, 100+
          <br></br>
          <br></br>
          is the following a quote of our character: "......"
          <br></br>>> yes / no
          <br></br>
        </div>
        <div>
          Instructions:
          <ol className="col">
            <li>Click a button "Go on an adventure"</li>
            <li>
              Answer first question by chosing out of a selection of options
            </li>
            <li>Click button "next question"</li>
            <li>keep going...</li>
            <li>Get your results</li>
          </ol>
          In the end, the player sees an overview of how many questions he got
          right
        </div>
        <br></br>
        When the player gets all answers right, he gets to flee Gollums cave.
        <img src="https://www.turn-on.de/media/webp/media/cache/article_images/media/cms/2019/03/gollum.webp?356188"></img>
        <br></br>If not he, has to stay there.
        <br></br>
        <img src="https://www.thenews.com.pk/assets/uploads/updates/2023-03-01/1045411_5982463_Untitled-1_updates.jpg"></img>
      </div>

      <br></br>

      <div className="col unspecified">
        Game 2: Find the character - which lotr character are we looking for?
        How it works:
      </div>
      <br></br>

      <h1>possible harry potter app:</h1>
      <div className="col">
        <h2>Game Idea 1: Which hp character are you</h2>
        <br></br>
        How it works:
        <br></br> - The player has to answer a set of questions
        <br></br> - According to each question, they are assigned a character
        <br></br>
        <br></br>
        Given routes provided by the api:
        <ul>
          <li>Name</li>
          <li>Height</li>
          <li>Eye color</li>
          <li>Hair color</li>
          <li>Species</li>
          <li>Biggest fear / Boggart</li>
        </ul>
        <br></br>
        <div>
          Instructions:
          <ol className="col">
            <li>
              Answer first question by chosing out of a selection of options
            </li>
            <li>Click button "next question"</li>
            <li>keep going...</li>
            <li>Get your results</li>
          </ol>
          In the end, the player sees an overview of which character they are
        </div>
      </div>
    </>
  );
}

export default App;
