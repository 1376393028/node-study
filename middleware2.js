const express = require('express');
const app = express();
const bodyParser = require('./custom-body-parser');

app.use(bodyParser);

app.post('/user', (req, res) => {
    res.send(req.body);
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})