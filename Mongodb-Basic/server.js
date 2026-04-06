const express = require('express');
const app = express();
const usermodel = require('./model/user.model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('server home page');
});

// crud
// create
app.get('/create', async(req, res) => {
    let createUser = await usermodel.create({
    
     username: "test3",
     name: "test3_user",
     eamil: "test3@gmail.com",
  })   

  res.send(createUser);
});


// read
// all user
app.get('/all', async(req, res) => {
 let allUser = await usermodel.find(); 
 res.send(allUser);
    
});

// specific user - first only

app.get('/read', async(req, res) => {
 let User = await usermodel.findOne({username: "test1"}); 
 res.send(User);
    
});

// all user based on query
app.get('/user', async(req, res) => {
 let Userdata = await usermodel.find({username: "test1"}); 
 res.send(Userdata);
    
});

// update
app.get('/update', async(req, res) => {
let update = await usermodel.findOneAndUpdate(
    {username: "test1"}, // find query --> what to find
    {username:"coder", email:"coder@devloper.com" }, // update query --> what is change
    {new:true}
);
res.send(update);
});

// delete
app.get('/delete', async(req, res) => {
await usermodel.findOneAndDelete({username: "coder"}); // find query
res.redirect("/all");
});



app.listen(3000, () => {
    console.log('server is running');
});

// monday
