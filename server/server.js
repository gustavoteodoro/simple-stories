var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json('Hello World!');
});

app.listen(3001, function () {
    console.log('Server running on port 3001');
});