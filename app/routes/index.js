const express = require("express");
const router = express.Router();

`localhost:3000/api/`;
router.get("/", (req, res) => {
  res.status(200).json({ message: "From the API" });
});

router.post("/", () => {
  console.log("Request body >>>", req.body);
});

module.exports = router;
