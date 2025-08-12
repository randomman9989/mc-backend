const express = require('express');
const cors = require('cors');
const app = express();

const logger = require(`./logger`)
const fruits = require("./routes/fruits")

app.use(cors())
app.use(express.json());
app.use(logger)

app.get('/', (req, res) => {
   res.send('Hello Fruity!');
})


app.use('/fruits', fruits);

module.exports = app