// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'react'
// });

// connection.connect(function(err) {
//   if (err) {
//     throw err;
//   }
//   console.log("Connect to database successfully!");
// })

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'react',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection established successfully');
}).catch(err => {
  console.log('Unable to connect: ' + err);
});

module.exports = sequelize;