const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.post('/todo', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload) {
        res.status(411).json({
            msg: 'You sent the wrong inputs',
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });
    res.status(201).json({
        msg: 'Todo created successfully',
    });
});

app.get('/todos', async function(req, res) {
    const todos = await todo.find({});
    res.status(200).json({
        todos: todos,
    });
});

app.put('/completed', async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload) {
        res.status(411).json({
            msg: 'You sent the wrong inputs',
        });
        return;
    }
    await todo.update({
        _id: req.body.id,
    }, {
        completed: true,
    })
    res.status(200).json({
        msg: 'Todo updated successfully',
    });
});

app.listen(3000);