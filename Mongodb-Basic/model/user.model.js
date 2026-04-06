const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/mongodb-basic");

// schema ==> document structure --> document look and data validation
let userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
});

module.exports = mongoose.model('User', userSchema);
