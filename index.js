const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.json({message: "Hello, world!"}));

app.listen(6060, () => console.log("Started."))