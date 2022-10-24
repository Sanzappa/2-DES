const mysql2 = require("mysql2");

const con = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'blobs'
});

module.exports = con