var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET scores listing. */
// router.get points at the BACK END!!! so the "/" doesn't have anything to do with the front end or its URL
router.get("/", async function (req, res, next) {
  try {
    const response = await db("SELECT * FROM games;");
    res.send(response.data);
  } catch (err) {
    console.log(err.message);
  }
  // alternatively: THEN-CATCH-METHOD:
  // await db("SELECT * FROM games;")
  //   .then((results) => {
  //     res.send(results.data);
  //   })
  //   .catch((err) => res.status(500).send(err));
});

// Get all the info on a specific game
router.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const response = await db(`SELECT * FROM games WHERE game_id = ${id};`);
    res.send(response.data);
  } catch (err) {
    console.log(err.message);
  }
});

// Get the game total for a specific game
router.get("/:id/total", async function (req, res) {
  try {
    const id = req.params.id;
    const response = await db(
      `select game_total from games where game_id = ${id};`
    );
    res.send(response.data);
  } catch (err) {
    console.timeLog(err.message);
  }
});

// Inserting the amount of points I made for a question after having chosen an answer
router.post("/", async function (req, res, next) {
  try {
    const {
      quote_id,
      points,
      quote_text,
      solution_text,
      player_answer,
      game_id,
    } = req.body;

    await db(
      `insert into questions (quote_id, points, quote_text, solution_text, player_answer, game_id) values (${quote_id}, ${points}, "${quote_text}", "${solution_text}", "${player_answer}", ${game_id});`
    );
    const results = await db("SELECT * FROM questions;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Once the game is over: Update the game_total in my users_info with the sum of the points I made during the game
router.put("/:id/game_total", async (req, res) => {
  try {
    const { id } = req.params;

    await db(
      `UPDATE games SET game_total = (select sum(points) FROM questions WHERE game_id = ${id}) WHERE game_id = ${id};`
    );
    const results = await db("SELECT * FROM games ORDER BY game_id ASC;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get specific answer that a certain player has given to a certain question
router.get("/:game_id/:quote_id/player_answer", async (req, res) => {
  try {
    const { game_id, quote_id } = req.params;
    const response = await db(
      `SELECT player_answer FROM questions WHERE game_id = ${game_id} and quote_id = ${quote_id};`
    );

    res.send(response.data);
  } catch (err) {
    console.log(err.message);
  }
});

// Get solution to a certain question of a certain game
router.get("/:game_id/:quote_id/solution_text", async (req, res) => {
  try {
    const { game_id, quote_id } = req.params;
    const response = await db(
      `SELECT solution_text FROM questions WHERE game_id = ${game_id} and quote_id = ${quote_id};`
    );

    res.send(response.data);
  } catch (err) {
    console.log(err.message);
  }
});

//
//
//
//
//
//
//
//
//
//
//
//
// Get the amount of points for a specific question
// q stands for the number of the question
// Careful: Doesn't work anymore using the adjusted database!!!!
router.get("/:id/:q", async function (req, res) {
  try {
    const { id, q } = req.params;
    const response = await db(`select q${q}  from games where id = ${id};`);
    res.send(response.data);
  } catch (err) {
    console.timeLog(err.message);
  }
});

// the "/" below means, that I access my back-end at "/" (which btw stand for "/api/games" as defined in app.js in line 17),
// Careful: Doesn't work anymore using the adjusted database!!!!
router.post("/", async function (req, res, next) {
  try {
    const { q1, q2, q3, q4, q5 } = req.body; // VERY IMPORTANT: req.body is what gets sent from my front-end via (method: "x" ....) to my backend!
    // Postman therefor only simulates my front end sending data to my backend
    // meaning that if I don't have a front-end fetch to the backend yet, I can work with postman
    const game_total = 100;

    await db(
      `INSERT INTO games (q1, q2, q3, q4, q5, user_id, game_total) values ("${q1}", "${q2}","${q3}", "${q4}","${q5}", 1, ${game_total});`
    );
    const results = await db("SELECT * FROM games;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
