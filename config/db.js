require('dotenv').config()

let mysql = require("mysql")

function connMySQL() {

    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

}

module.exports = () => {
    return connMySQL;
}