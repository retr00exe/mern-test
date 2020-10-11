const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const chalk = require('chalk');

const exercisesApi = require('./routes/api/exercises');
const usersApi = require('./routes/api/users');

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
 .connect(uri, {
     useNewUrlParser: true,
     useCreateIndex: true
 })
 .then(() => console.log(chalk.black.bgMagenta(`MongoDB connected ... \n Happy hacking Mekel ;)`)))
 .catch(error => console.log(error))

app.use('/exercises', exercisesApi);
app.use('/users', usersApi);

app.listen(PORT, () => {
    console.log(chalk.black.bgYellow(`Server is running on port : ${PORT}`));
}) 