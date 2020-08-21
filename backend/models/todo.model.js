const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {type: String, required: true},
    complete: {type: Boolean, required: true},
    due_on: {type: Date, required: true}
},{
    timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;

