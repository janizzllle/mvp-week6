var express = require("express");
var router = express.Router();

/* GET scores listing. */
// router.get points at the BACK END!!! so the "/" doesn't have anything to do with the front end or its URL
router.get("/score", async function (req, res, next) {
  try {
    await db("use lotr_game;");
    await db("describe game");
    const response = await db("SELECT * FROM game;");
    res.send(response.data);
  } catch (err) {
    console.log(err.message);
  }
});

// router.post("/game", async function (req, res, next) {
//   try {
//     const q1 = req.body.q1;
//     const q2 = req.body.q2;
//     const q3 = req.body.q3;
//     const q4 = req.body.q4;
//     const q5 = req.body.q5;
// const user_id = req.body.user_id;
// const game_total = req.body.game_total;
//     await db(
//       'INSERT INTO game (q1, q2, q3, q4, q5, user_id, game_total) values ("${q1}", "${q2}","${q3}", "${q4}","${q5}", ${user_id}, ${game_total});'
//     );
//     const results = await db("SELECT * FROM game;");
//     res.send(results.data);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

module.exports = router;
