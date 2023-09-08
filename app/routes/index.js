const express = require("express");
const router = express.Router();

`localhost:3000/api/:id`;

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("params >>>", id);
  res.status(200).json({ message: "From the API" });
});

`localhost:3000/api/`;

router.get("/", (req, res) => {
  res.status(200).json({ message: "From the API" });
});

`localhost:3000/api/:id`;


router.delete("/:id", (req, res) => {
  let car = {
    "color": "red",
    "type" : "Bmw"
  }
  const todo = cars.splice(4, 0, car);
  const todos = cars.splice();
  const id = req.params.id;
  console.log("params >>>", id);
  res.status(200).json({ message: "From the API" });
});

router.post("/", (req, res) => {
  console.log("Request body >>>", req.body);
  const data = req.body.data;
  res.status(200).json({ message: "We got the request", data });
});

`localhost:3000/api/:id`;

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  console.log("params >>>", id);
  res.status(200).json({ message: "Look for code" });
});

module.exports = router;
