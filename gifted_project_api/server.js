// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// GLOBAL VARIABLES 
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/gifts';

// DATABASE
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true});
db.on('open', () => {
    console.log('Mongo is connected for Sharon, Sheila, and Dana!')
});

// MIDDLEWARE 
app.use(express.json());


// LISTENER
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})


