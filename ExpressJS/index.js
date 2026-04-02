// create a express server

// package.JSON ==> TYPE = MODULE ==> IMPORT
// PACKAGE.JSON ==> TYPE = COMMONJS ==> CONST, REQUIRE

const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');

const app = express(); 

// middleware ==> middleware was run before route, call before function
// usecase : ahthorization, authentication, validation, error 
// user req -----> server 
// server res --> user
// (server req) server res --> user
// with middleware : user req --> middleware(server) --> server route 
app.use(function(req, res, next) {
    console.log(
        "middleware is running 🏃‍♂️"
    )
    next();
})
// login req --> middleware (check user into database) --> server route (profile)


// create a route
app.get("/", function (req, res ) {
    res.send("welcome to express.js 😊");
});
 
app.get("/profile", function (req, res ) {
    res.send("show profile page");
});

app.get("/login", function (req, res ) {
    const dirpath = path.resolve();
    const FilePath = path.join(dirpath, "pages","login.html");
    res.sendFile(FilePath);
});

// error handling:
// last listed route.
// always write after all routes because it will catch all the errors that are not handled by the previous routes.
app.use(function (req, res ) {
    res.status(404).send("page not found");
     res.status(500).send("something went wrong");
});

app.get("/singup", function (req, res ) {
    res.send("singup !! ");
});

app.listen(2026, () =>  console.log("server is running on port 2026") );