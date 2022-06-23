const express = require('express');
const userRt = express.Router();
const { UserCtrl } = require('./userCtrl.js');

userRt.get('/users', UserCtrl.getUsersController);
userRt.post('/users', UserCtrl.postUsersController);
userRt.put('/users', UserCtrl.putUsersController);
userRt.delete('/users', UserCtrl.deleteUsersController);

module.exports = userRt;