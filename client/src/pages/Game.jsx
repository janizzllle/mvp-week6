import React from "react";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Game() {
  const characters = [
    {
      _id: "5cd99d4bde30eff6ebccfea0",
      name: "Gandalf",
    },
    {
      _id: "5cd99d4bde30eff6ebccfc15",
      name: "Frodo Baggins",
    },
    {
      _id: "5cd99d4bde30eff6ebccfd0d",
      name: "Samwise Gamgee",
    },
    {
      _id: "5cd99d4bde30eff6ebccfe7f",
      name: "Pippin",
    },
    {
      _id: "5cd99d4bde30eff6ebccfe7b",
      name: "Merry",
    },
    {
      _id: "5cd99d4bde30eff6ebccfc38",
      name: "Bilbo Baggins",
    },
    {
      _id: "5cd99d4bde30eff6ebccfbe6",
      name: "Aragorn",
    },
    {
      _id: "5cd99d4bde30eff6ebccfe9f",
      name: "Legolas",
    },
    {
      _id: "5cd99d4bde30eff6ebccfd23",
      name: "Gimli",
    },
    {
      _id: "5cd99d4bde30eff6ebccfd06",
      name: "Galadriel",
    },
    {
      _id: "5cd99d4bde30eff6ebccfc07",
      name: "Arwen",
    },
    {
      _id: "5cd99d4bde30eff6ebccfc57",
      name: "Boromir",
    },
    {
      _id: "5cd99d4bde30eff6ebccfe9e",
      name: "Gollum",
    },
    {
      _id: "5cd99d4bde30eff6ebccfea1",
      name: "Radagast",
    },
    {
      _id: "5cd99d4bde30eff6ebccfcc8",
      name: "Elrond",
    },
    {
      _id: "5cd99d4bde30eff6ebccfea4",
      name: "Saruman",
    },
    {
      _id: "5cd99d4bde30eff6ebccfea5",
      name: "Sauron",
    },
  ];

  const [randomQuote, setRandomQuote] = useState("");
  const [char_id, setChar_id] = useState();
  const options = {
    // apply a .get method
    method: "GET",
    headers: {
      accept: "application/json",
      // Authorization Bearer:
      Authorization: "Bearer Ss9eAfLed8eq6cMUKKf8",
    },
  };
  // ************************************************************************************************
  useEffect(() => {
    getQuotes();
  }, []);
  // ************************************************************************************************

  function randomizeQuote(quotes) {
    const item = quotes[Math.floor(Math.random() * quotes.length)];
    setRandomQuote(item.dialog);
  }
  // ************************************************************************************************

  function getRandomCharacterId() {
    const item = characters[Math.floor(Math.random() * characters.length)];
    return item._id;
  }
  // ************************************************************************************************

  // Get all Quotes by a certain character
  const getQuotes = async () => {
    let id = getRandomCharacterId();
    setChar_id(id);
    try {
      const result = await fetch(
        // Create a function to acess the api
        `https://the-one-api.dev/v2/character/${id}/quote`,
        options
      );
      const quotes = await result.json();
      randomizeQuote(quotes.docs);
    } catch (error) {
      console.log(error);
    }
  };
  // ************************************************************************************************

  // ************************************************************************************************

  // Take the players answer, compare it to the solution, and return a number 1 (for correct) and 0 (for wrong)
  // store this in the database

  // 1. create table in database
  // 2. describe table so that per question there is an id and an amount of points made (correct = 1, wrong = 0)
  // 3. take user input onClick and compare it to solution
  // if correct, add 1 to table_amountOfPoints
  // if wrong, add 0 to table_amountOfPoints
  // 4. When the game ends, compare amount of corrects to amount of wrongs
  // 4. return you win if correct > wrong, return you lose if c < w
  // 5. store this data so that it can be used in "/result"
  const getResult = () => {};

  // useMemo (variable that gets computed from other state)
  // difference to useState?
  const characterOptions = useMemo(() => {
    // I want to find the right one from the list of characters
    // with the rest of the list, I want to randomize it and get the first 3
    // then I want to create a new array with the right one and the 3 random ones
    // and randomize it again
    // and return it
    if (!randomQuote) return [];
    const rightCharacter = characters.find(
      (character) => character._id === char_id
    );
    const restOfCharacters = characters.filter(
      (character) => character._id !== char_id
    );
    const randomCharacters = restOfCharacters
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    const allCharacters = [rightCharacter, ...randomCharacters].sort(
      () => 0.5 - Math.random()
    );
    return allCharacters;
  }, [randomQuote]);

  // ************************************************************************************************

  function storeAnswer(event) {
    event.preventDefault();
    const answer = event.target.textContent;
    compareToSolution(answer);
  }
  // ************************************************************************************************

  function compareToSolution(answer) {
    const rightCharacter = characters.find(
      (character) => character._id === char_id
    );
    if (answer === rightCharacter.name) {
      const result = 1;
      console.log(result);
      // addAnswerToDB(result);
    } else {
      const result = 0;
      console.log(result);
      // addAnswerToDB(result);
    }
  }
  // ************************************************************************************************
  // const addAnswerToDB = async (result) => {
  //   // const response = await fetch(`/api/capitals/${project.capital_id}????????????????????????????????????????????`, {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify(newComment),
  //   // });

  //   try {
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // ************************************************************************************************

  return (
    <>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e0547c2-467a-4b92-a2fd-a014af686793/dail067-5778fe13-d603-43d3-8b6f-e205b8210f17.png/v1/fill/w_1600,h_550/lord_of_the_rings_png_title_by_workfromhomegal_dail067-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTUwIiwicGF0aCI6IlwvZlwvM2UwNTQ3YzItNDY3YS00YjkyLWEyZmQtYTAxNGFmNjg2NzkzXC9kYWlsMDY3LTU3NzhmZTEzLWQ2MDMtNDNkMy04YjZmLWUyMDViODIxMGYxNy5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.owJhwZy6_k11SCutQOVR_GX3AG_e8r-8BPxZkj7DpKk"></img>
      <div></div>
      <button type="button" onClick={getQuotes} className="quoteButton">
        New Quote
      </button>
      {randomQuote && <p className="quote">{randomQuote}</p>}

      {/* <div className="solution">
        solution:
        <div>
          {
            characters.find((character) => {
              return character._id === char_id;
            })?.name
          }
        </div>
      </div> */}
      <p>Who said this? Answer here:</p>
      <div>
        {characterOptions.map((character) => (
          <button
            key={character._id}
            className="answerbutton"
            onClick={storeAnswer}
          >
            {character.name}
          </button>
        ))}
      </div>

      <button>
        <Link to="/Result">End game</Link>
      </button>

      {/* <button>
        {" "}
        <Link to="/nextquestion">Next Question</Link>
      </button>

      */}
    </>
  );
}
