const router = require('express').Router();

let Todo = require('../models/todo.model');
const { json } = require('express');

router.route('/').get((req,res) => {
    Todo.find()
        .then( todos => res.json(todos))
        .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route('/add').post((req,res) => {
    
    const title = req.body.title;
    const complete = req.body.complete;

    const newtodo = new Todo(
        {
            title,
            complete
        }
    );

    newtodo.save()
        .then(() => res.json('todo added'))
        .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route('/:id').get((req,res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route('/:id').delete((req,res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('todo deleted'))
        .catch(error => req.status(400).json(`Error: ${error}`))
});

router.route('/update/:id').post((req,res) => {

    const filter = {_id: req.params.id};
    const update = {title: req.body.title, complete: req.body.complete};
    Todo.findOneAndUpdate(filter, update, {new: true})
        .then(() => res.json('todo updated'))
        .catch(error => res.status(400).json(`Error: ${error}`));
});

module.exports = router