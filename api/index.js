const http = require("http");
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 1234;

const resJson = JSON.parse(fs.readFileSync("./products.json").toString());

app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

app.get("/", (req, res) => res.json(resJson));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
