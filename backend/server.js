var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
var urlencodeParser = bodyParser.urlencoded({ extended: false });
const userRoute = require('./routes/user.Routes');

app.use(cors({
  origin: '*'
}))
app.use('/api/v1/user', urlencodeParser, userRoute);

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})