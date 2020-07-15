const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// Get all burgers
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", {
      burgers: data
    });
  });
});

// Create new burger
router.post("/api/burgers", function(req, res) {
  burger.insertOne(`burger_name = "${req.body.burger_name}"`, function(result) {
    res.json({id: result.insertId});
  });
});

// Update burger devour status
router.put("/api/burgers/:id", function(req, res) {
  let input =  "devoured = " + req.body.devoured;
  let id = "id = " + req.params.id;
  burger.updateOne(input, id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;