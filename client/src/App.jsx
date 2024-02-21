import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function App() {
  const characters = [
    {
      _id: "5cd99d4bde30eff6ebccfe9e",
      name: "Smeagol",
    },
    {
      _id: "5cd99d4bde30eff6ebccfc15",
      name: "Legolas",
    },
  ];
  // const [characters, setCharacters] = useState([]);
  // const [characterIds, setCharacterIds] = useState([]);
  // const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  // const [randomId, setRandomId] = useState("5cd99d4bde30eff6ebccfc57");
  const options = {
    // apply a .get method
    method: "GET",
    headers: {
      accept: "application/json",
      // Authorization Bearer:
      Authorization: "Bearer Ss9eAfLed8eq6cMUKKf8",
    },
  };

  // Problem: When clicking on the Button "new quote" I want to call the getQuote function again, using the random Id,
  // otherwise the character id stays the same always
  //

  useEffect(() => {
    getQuotes();
  }, []);

  function randomizeQuote(quotes) {
    const item = quotes[Math.floor(Math.random() * quotes.length)];
    // console.log(quotes);
    setRandomQuote(item.dialog);
  }

  function getRandomCharacterId() {
    const item = characters[Math.floor(Math.random() * characters.length)];
    return item._id;
  }

  // Get all Quotes by a certain character
  const getQuotes = async () => {
    const char_id = getRandomCharacterId();

    try {
      const result = await fetch(
        // Create a function to acess the api
        `https://the-one-api.dev/v2/character/${char_id}/quote`,
        options
      );
      const quotes = await result.json();

      randomizeQuote(quotes.docs);
    } catch (error) {
      console.log(error);
    }
  };

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
      <button
        type="button"
        onClick={(event) => {
          getQuotes();
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
        <button className="answerbutton">Gandalf</button>
        <button className="answerbutton">Frodo</button>
        <button className="answerbutton">Bilbo</button>
        <button className="answerbutton">Sam</button>
        <button className="answerbutton">Pippin</button>
        <button className="answerbutton">Merry</button>
        <button className="answerbutton">Aragorn</button>
        <button className="answerbutton">Gimli</button>
        <button className="answerbutton">Legolas</button>
        <button className="answerbutton">Arwen</button>
        <button className="answerbutton">Elrond</button>
        <button className="answerbutton">Galadriel</button>
        <button className="answerbutton">Radagast </button>
        <button className="answerbutton">Boromir </button>
        <button className="answerbutton">Eowyn </button>
        <button className="answerbutton">Gollum</button>
        <button className="answerbutton">Saruman</button>
        <button className="answerbutton">Sauron</button>
      </div>

      {/* <button>
        {" "}
        <Link to="/nextquestion">Next Question</Link>
      </button>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/nextquestion" element={<NextQuestions />} />
        <Route path="/results" element={<Results />} />
      </Routes> */}
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
