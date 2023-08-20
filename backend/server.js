var express = require('express');
var app = express();
var cors = require('cors')

const userRoute = require('./routes/user.Routes');

app.use('/user', userRoute);

app.use(cors())
 app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})