const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const json = express.json();
const userRt = require('./userRt.js');

(async () =>{ 
    await mongoose.connect('mongodb://localhost:27017/node');
})();

if (process.env.PORT) {
    console.log('ENV PORT', process.env.PORT);
}

app.use(json);
app.use(userRt);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});