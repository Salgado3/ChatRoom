const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/add-item.html", (req, res) => {
  res.sendFile("./views/add-item.html", { root: __dirname });
});
app.set("view engine", "ejs");
app.listen(3000);
app.use((req, res) => {
  res.sendFile("./views/error.html", { root: __dirname });
});
