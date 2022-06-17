const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const indexRouter = express.Router();
const json = express.json();
const { UserCtrl } = require('./userCtrl.js');

if (process.env.PORT) {
    console.log('ENV PORT', process.env.PORT);
}

app.get('/users', UserCtrl.getUsersController);
app.post('/users', json, UserCtrl.postUsersController);
app.put('/users', UserCtrl.putUsersController);
app.delete('/users', UserCtrl.deleteUsersController);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});