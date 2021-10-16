/** @format */

const mysql = require("mysql");
// const fs = require("fs");

const connection = mysql.createConnection({
  host: "172.105.48.158",
  user: "user",
  password: "password",
  database: "db",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("MySQL => The solution is: ", results[0].solution);
});

// connection.query('SELECT * FROM persons', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// const person  = {phone: 112312, name: 'Hello MySQL'};
// const query = connection.query('INSERT INTO persons SET ?', person, function (error, results, fields) {
//   if (error) throw error;
//   // Neat!
//   console.log("create: ", results)
// });

connection.end();
