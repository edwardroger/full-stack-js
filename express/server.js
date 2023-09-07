var express = require('express');
var app = express();

app.get('/hello-world', function(req, res) {
    res.send('Hello world');
});

app.get('/test', function(req, res) {
    res.send('This is test page');
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
});