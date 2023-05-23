const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors=require('cors')
app.use(cors())
app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: false }));
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
  const AuthorSchema = new mongoose.Schema({
    author:String,
    title:String
  });
  const MyModel = mongoose.model('Modelnames',AuthorSchema);
  DB_PASSWORD=process.env.DB_PASSWORD
DB_CONNECTION=process.env.DB_CONNECTION
DB_CONNECTION=DB_CONNECTION.replace("<password>",DB_PASSWORD)
  mongoose.connect(DB_CONNECTION)
  .then(() => console.log('Connected!'));
app.get('/api', (req, res) => {
  res.send('Hello World!')
})
app.get("/api/authors", async(req, res) => { //GETALLL 
    const authors=await MyModel.find()
      res.status(200).send(authors)
  });
app.get("/api/authors/:id", async(req, res) => { //GETBYID
    const id = req.params.id;
    const author = await MyModel.findById(id)
      res.status(200).send(author)
  });
app.delete("/api/authors/:id", async(req, res) => { //DELeTE
    const id = req.params.id;
    const author = await MyModel.findByIdAndDelete(id)
     res.status(203).send(author)
  });
app.post("/api/authors",async(req, res) => {   //post
    const { author,title } = req.body;
    const newAuthors = new MyModel({
        author: author,
      title: title
    });
   await  newAuthors.save()
    res.status(201).send("created");
  });
app.put("/api/authors/:id",async (req, res) => {  //put
    const id = req.params.id;
    const { author,title} = req.body;
    const existedAuthors =await MyModel.findByIdAndUpdate(id,{author:author, title:title})
      res.status(200).send(existedAuthors);
  });
  PORT  = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})