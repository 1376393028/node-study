const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('ok');
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})