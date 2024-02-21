var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.send({ title: "Express" });
  // try {
  //   res.send(results.data);
  // } catch (err) {
  //   console.log(err.message);
  // }
});

module.exports = router;
