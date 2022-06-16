const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const indexRouter = express.Router();
const json = express.json();
let users = require('./users.js');

if (process.env.PORT) {
    console.log('ENV PORT', process.env.PORT);
}

function getUsersController(req, res) {
    res.send(users);
}

function postUsersController(req, res) {
    let id = users.length;

    users.push({
        id: ++id,
        ...req.body,
    });
}

function deleteUsersController(req, res) {
    const index = req.query;

    users = users.filter((user) => {
        return user.id !== +index.id
    });
}

app.get('/users', getUsersController);

app.post('/users', json, postUsersController);

// app.put('/user', (req, res) => {
//     res.send({name: 'Got a PUT request at /user', type: 'put'})
// })

app.delete('/users', deleteUsersController);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});