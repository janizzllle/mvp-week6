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

router.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const response = await db(`SELECT * FROM games WHERE game_id = ${id};`);
    res.send(response.data);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/:id/sum", async function (req, res) {
  try {
    const id = req.params.id;
    const response = await db(
      `select sum(q1 + q2 + q3 + q4 + q5) total from games where game_id = ${id};`
    );
    res.send(response.data);
  } catch (err) {
    console.timeLog(err.message);
  }
});

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

// ???????????
router.put("/:id/:game_total", async (req, res) => {
  try {
    const { id, game_total } = req.params;

    await db(`UPDATE games SET game_total = ${total} WHERE id = ${id};`);

    const results = await db("SELECT * FROM games ORDER BY id ASC;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
