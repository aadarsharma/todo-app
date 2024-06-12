const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://admin:%40Darsh.56763@cluster0.von7nfx.mongodb.net/paytm")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false,
    }
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo,
};