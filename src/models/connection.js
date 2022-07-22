const mysql = require('mysql2/promise');
// require('dotenv').config();

const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'carteiraDigital',
  port: 3306,
});

module.exports = connection;
