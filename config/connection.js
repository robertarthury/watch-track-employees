const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'rootpass',
  database: 'election'
});


module.exports = connection;
