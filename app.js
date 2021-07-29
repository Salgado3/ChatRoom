const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add-item.html", (req, res) => {
  res.render("add-item");
});
app.set("view engine", "ejs");
app.listen(3000);
app.use((req, res) => {
  res.render("error");
});
