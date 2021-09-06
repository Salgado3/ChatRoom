//setting up dotenv
require('dotenv').config({ path: "./config/.env" })
const express = require("express");
const mongoose = require("mongoose");
const Item = require('./models/items');
const app = express();
app.use(express.urlencoded({extended: true}));
const mongodb = process.env.MongoDB_Key;

mongoose.connect(mongodb)
.then(()=> console.log("connected to Db"))
.catch((err)=> console.log(err))



//setting express to run on ejs
app.set("view engine", "ejs");
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

//routes

app.get("/", (req, res) => {
  res.redirect("/get-items")
});

app.get('/get-items', (req,res)=>{
 
  Item.find()
  .then(result=> 
  res.render("index", { items:result })
  )
  .catch(err=> console.log(err))
})


app.get("/add-item.ejs", (req, res) => {
  res.render("add-item");
});

app.post('/items', (req,res)=>{
console.log(req.body)
const item = Item(req.body)
item.save().then(()=>{
  res.redirect('/get-items')
}).catch((err)=>console.log(err))

})

app.use((req, res) => {
  res.render("error");
});
