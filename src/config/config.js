require('dotenv/config');

const {  MYSQL_HOST, MYSQL_PASSWORD,  MYSQL_DATABASE, MYSQL_USER, MYSQL_PORT } = process.env;

module.exports = {
  "development": {
    "username": MYSQL_USER || 'root',
    "password": MYSQL_PASSWORD || 'password',
    "database": MYSQL_DATABASE || 'carteiraDigital',
    "host": MYSQL_HOST,
    "port": MYSQL_PORT || '3000',
    "dialect": 'mysql'
  },
  "test": {
    "username": MYSQL_USER || 'root',
    "password": MYSQL_PASSWORD || 'password',
    "database": MYSQL_DATABASE || 'carteiraDigital',
    "host": MYSQL_HOST,
    "port": MYSQL_PORT || '3000',
    "dialect": 'mysql'
  },
  "production": {
    "username": MYSQL_USER || 'root',
    "password": MYSQL_PASSWORD || 'password',
    "database": MYSQL_DATABASE || 'carteiraDigital',
    "host": MYSQL_HOST,
    "port": MYSQL_PORT || '3000',
    "dialect": 'mysql'
  }
}
