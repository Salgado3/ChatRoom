const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("./views/index.html");
});

app.listen(3000);
