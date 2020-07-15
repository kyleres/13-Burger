const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection(
        {
            host: "localhost",
            port: 3000,
            user: "root",
            password: "MySQL@8400",
            database: "burgers_db"
        }
    );
};

connection.connect();

module.exports = connection;