const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
// Initialize an empty todos array
let todos = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, this is the To-Do list app!');


});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})


app.post('/add', (req, res) => {
    const { task } = req.body;
    if (task != null) {
        todos.push(task);
        res.redirect('/');
    } else {
        res.status(400).send('Bad request: Task parameter is missing');
    }
})

app.get('/todos', (req, res) => {
    res.json(todos);
})