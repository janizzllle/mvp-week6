import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterIds, setCharacterIds] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [randomId, setRandomId] = useState("5cd99d4bde30eff6ebccfc57");

  const options = {
    // apply a .get method
    method: "GET",
    headers: {
      accept: "application/json",
      // Authorization Bearer:
      Authorization: "Bearer Ss9eAfLed8eq6cMUKKf8",
    },
  };

  useEffect(() => {
    getCharacter();
    getQuote();
  }, []);

  function randomizeQuote() {
    const item = quotes[Math.floor(Math.random() * quotes.length)];
    setRandomQuote(item.dialog);
    console.log(item.dialog);
  }

  function randomizeCharacter() {
    const item = characterIds[Math.floor(Math.random() * characterIds.length)];
    setRandomId(item);
    console.log(randomId);
  }

  //
  const getCharacter = async () => {
    try {
      const result = await fetch(
        `https://the-one-api.dev/v2/character`,
        options
      );
      const response = await result.json();

      // *********************************************************************
      console.log(response.docs);
      setCharacters(response.docs);
      console.log(characters);
      // *********************************************************************

      setCharacterIds(characters.map((character) => character._id));
    } catch (error) {
      console.log(error);
    }
  };

  // Get all Quotes by a certain character
  const getQuote = async () => {
    try {
      const result = await fetch(
        // Create a function to acess the api
        `https://the-one-api.dev/v2/character/${randomId}/quote`,
        options
      );
      const response = await result.json();
      setQuotes(response.docs);
      // console.log(quotes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          randomizeQuote();
          randomizeCharacter();
        }}
        //  onClick={randomize(characterIds)}
        // onClick={randomize(quotes)}
        className="quoteButton"
      >
        New Quote
      </button>
      {randomQuote && <p className="quote">{randomQuote}</p>}

      <p>Who said this? Answer here:</p>
      <div>
        <button className="answerbutton"></button>
        <button className="answerbutton"></button>
        <button className="answerbutton"></button>
        <button className="answerbutton"></button>
      </div>
    </>
  );
}

export default App;

// return <li key={character._id}>{character._id}</li>;

// {
//  <ul>
//   {quotes.map((quote) => {
//     return (
//       <li key={quote._id}>
//         {quote.dialog} <br></br>
//         <br></br>
//       </li>
//     );
//   })}
// </ul>
// }
