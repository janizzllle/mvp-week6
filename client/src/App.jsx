import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    getCharacters();
  }, []);
  // 1.
  // Create a function to acess the api
  // and apply a .get method -> routes.api

  const getCharacters = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        // Authorization Bearer:
        Authorization: "Bearer Ss9eAfLed8eq6cMUKKf8",
      },
    };

    try {
      const result = await fetch(
        "https://the-one-api.dev/v2/character",
        options
      );
      const response = await result.json();
      setCharacters(response.docs);
      console.log(response.docs);
      console.log(response.docs[0]._id);
      // console.log(characters && characters);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul>
      {characters.map((character) => {
        <li key={character._id}>{character._id}</li>;
      })}
    </ul>
  );
}

export default App;
