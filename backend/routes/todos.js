const router = require('express').Router();

let Todo = require('../models/todo.model');
const { json } = require('express');

router.route('/').get((req,res) => {
    Todo.find()
        .then( todos => res.json(todos))
        .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route('/add').post((req,res) => {
    
    const {title, complete, due_on} = req.body
    // const title = req.body.description;
    // const complete = Number(req.body.duration);
    // const due_on = Date.parse(req.body.date);

    const newtodo = new Todo(
        {
            title,
            complete,
            due_on
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
        .then(() => res.json('Execrcise deleted'))
        .catch(error => req.status(400).json(`Error: ${error}`))
});

router.route('/update/:id').post((req,res) => {
    Todo.findById(req.params.id)
        .then(todo => {
            todo.title = req.body.title || todo.title;
            todo.complete = Number(req.body.complete) || Number(todo.complete);
            todo.due_on = Date.parse(req.body.due_on) || Date.parse(todo.due_on);

            todo.save()
                .then(() => res.json('todo updated!'))
                .catch(error => res.status(400).json(`Error: ${error}`));
            })
        .catch(error => res.status(400).json(`Error: ${error}`));
});

module.exports = router