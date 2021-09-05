//setting up dotenv
require('dotenv').config({ path: "./config/.env" })
const express = require("express");
const mongoose = require("mongoose");
const Item = require('./models/items');
const app = express();
const mongodb = process.env.MongoDB_Key;

mongoose.connect(mongodb)
.then(()=> console.log("connected to Db"))
.catch((err)=> console.log(err))



//setting express to run on ejs
app.set("view engine", "ejs");
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.get('/create-item', (req,res)=>{
  const Item = new Item({
    name: "phone",
    price: 2000
  }) 
  Item.save()
  .then(result=> res.send(result))
})



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
