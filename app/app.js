const express = require(`express`);
const app = express();
const router = require("./routes");

app.use(express.json());

`localhost:3000/`;

app.get("/", (req, res) => {
  console.log("GET");
  res.json({ message: "Hello World" });
});

`localhost:3000/api`;
app.use("/api", router);

app.use((req, res, next) => {
  const error = new Error("Not right");
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  console.log("ERROR >>>", err);
  res.status(err.status II 500).json({message: err.message, })
});

module.exports = app;
