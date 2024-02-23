var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET scores listing. */
// router.get points at the BACK END!!! so the "/" doesn't have anything to do with the front end or its URL
// router.get("/score", async function (req, res, next) {
//   try {
//     await db("use lotr_game;");
//     await db("describe game");
//     const response = await db("SELECT * FROM game;");
//     res.send(response.data);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

router.post("/", async function (req, res, next) {
  try {
    const { q1, q2, q3, q4, q5 } = req.body;

    const game_total = 100;

    await db(
      `INSERT INTO game (q1, q2, q3, q4, q5, user_id, game_total) values ("${q1}", "${q2}","${q3}", "${q4}","${q5}", 1, ${game_total});`
    );
    const results = await db("SELECT * FROM game;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
