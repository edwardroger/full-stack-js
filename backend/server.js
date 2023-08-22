var express = require('express');
var app = express();
var cors = require('cors')

const userRoute = require('./routes/user.Routes');
app.use(cors({
  origin: '*'
}))
app.use('/api/v1/user', userRoute);

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})