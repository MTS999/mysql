const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'new_user', // replace with your MySQL username
  password: 'new_password', // replace with your MySQL password
  database: 'CarRentalSystem'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

module.exports = connection;
