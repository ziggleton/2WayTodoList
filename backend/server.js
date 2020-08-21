require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => console.log('Database connected successfully'));


const todosRouter = require('./routes/todos');

app.use('/todos', todosRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));