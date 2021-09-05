const express = require("express");
const app = express();
const Mongodb = MongoDB_Key
app.set("view engine", "ejs");
app.listen(3000);


//setting up dotenv
require('dotenv').config({ path: "./config/.env" })

app.get("/", (req, res) => {
  const items = [
    { name: "mobile phone", price: 1000 },
    { name: "book", price: 30 },
    { name: "computer", price: 2000 },
  ];
  res.render("index", { items });
});

app.get("/add-item.ejs", (req, res) => {
  res.render("add-item");
});

app.use((req, res) => {
  res.render("error");
});
