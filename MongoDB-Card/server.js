const express = require('express');
const app = express();
const usermodel = require('./models/user.model');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('server homepage');
    res.render('index');
});

// create card
app.post('/create', async (req, res) => {
  let {fname, uname, email, img} = req.body;

   await usermodel.create({
    fullname: fname,
    username: uname,
    email: email,
    image: img,
   })
   res.redirect('/card');
});

// read card
app.get('/card', async (req, res) => {

    let allusers = await usermodel.find()
   res.render("card",{data: allusers});
});


app.listen(3000, () => {
    console.log("server is running");
});
