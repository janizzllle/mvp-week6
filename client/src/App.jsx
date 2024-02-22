import { useEffect, useState } from "react";
import "./App.css";

function App() {
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
  // const [characters, setCharacters] = useState([]);
  // const [characterIds, setCharacterIds] = useState([]);
  // const [quotes, setQuotes] = useState([]);
  // const [randomId, setRandomId] = useState("5cd99d4bde30eff6ebccfc57");

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
    console.log(char_id);
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
    console.log(char_id);
    try {
      const result = await fetch(
        // Create a function to acess the api
        `https://the-one-api.dev/v2/character/${char_id}/quote`,
        options
      );
      console.log(char_id);
      const quotes = await result.json();
      randomizeQuote(quotes.docs);
    } catch (error) {
      console.log(error);
    }
  };
  // ************************************************************************************************

  console.log(char_id);
  // ************************************************************************************************

  return (
    <>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e0547c2-467a-4b92-a2fd-a014af686793/dail067-5778fe13-d603-43d3-8b6f-e205b8210f17.png/v1/fill/w_1600,h_550/lord_of_the_rings_png_title_by_workfromhomegal_dail067-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTUwIiwicGF0aCI6IlwvZlwvM2UwNTQ3YzItNDY3YS00YjkyLWEyZmQtYTAxNGFmNjg2NzkzXC9kYWlsMDY3LTU3NzhmZTEzLWQ2MDMtNDNkMy04YjZmLWUyMDViODIxMGYxNy5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.owJhwZy6_k11SCutQOVR_GX3AG_e8r-8BPxZkj7DpKk"></img>

      <div>
        <h1>So you know LOTR by heart? </h1>
        <p className="introtext">
          By answering all the questions in this game you can prove your
          extential LOTR knowledge once and for all!
        </p>
        <p className="introtext">Click on the button below to start a game</p>
      </div>

      <button type="button" onClick={getQuotes} className="quoteButton">
        New Quote
      </button>
      {randomQuote && <p className="quote">{randomQuote}</p>}
      <div>
        Character id in return statement {console.log(char_id)} is different to
        character id when calling getQuotes!
      </div>
      <div className="solution">
        solution:
        <div>
          {characters.map((character) => {
            if (character._id === char_id) {
              return character.name;
            }
          })}
        </div>
      </div>
      <p>Who said this? Answer here:</p>
      <div>
        <button className="answerbutton">
          {characters[Math.floor(Math.random() * characters.length)].name}
        </button>
        <button className="answerbutton">
          {characters[Math.floor(Math.random() * characters.length)].name}
        </button>
        <button className="answerbutton">
          {characters[Math.floor(Math.random() * characters.length)].name}
        </button>
        <button className="answerbutton">
          {characters.map((character) => {
            if (character._id === char_id) {
              return character.name;
            }
          })}
        </button>
      </div>

      {/* <button>
        {" "}
        <Link to="/nextquestion">Next Question</Link>
      </button>

      */}
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
