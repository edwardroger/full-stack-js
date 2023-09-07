var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
var urlencodeParser = bodyParser.urlencoded({ extended: false });
const userRoute = require('./routes/user.Routes');
const authRoute = require('./routes/auth.Routes');

app.use(cors({
  origin: '*'
}))
app.use(express.json());
app.use('/api/v1/user', urlencodeParser, userRoute);
app.use('/api/v1/auth', urlencodeParser, authRoute)

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})