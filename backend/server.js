require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.DB_URI, {useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,})
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error(`There was an error: ${err}`));


const connection = mongoose.connection;
connection.once('open', () => console.log('Database open successfully'));


const todosRouter = require('./routes/todos');

app.use('/todos', todosRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));