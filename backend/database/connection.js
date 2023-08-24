var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("Connect to database successfully!");
})

module.exports = connection;