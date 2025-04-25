const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

const dotenv = require('dotenv').config({path: "../.env"}); // Load environment variables from .env file 


let stream = fs.createReadStream("datos_tradier.csv");
let csvData = [];
let csvStream = fastcsv
  .parse({ ignoreEmpty: true })
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();

    // create a new connection to the database
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,  
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_DATABASE_TRADIER,
    });

    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        //"SET SESSION sql_mode = ''" no se si se excribe asi. Pero poniendo INSERT IGNORE no da error
        // connection.query("SET SESSION sql_mode = ''", (error, response) => {
        let query =
          "INSERT IGNORE INTO tradier_historial01 (symbol, price, type, description, quantity , commission, amount, date) VALUES ?";
        connection.query(query, [csvData], (error, response) => {
          console.log(error || response);
        });
        console.log("Connected to the database!");
      // close the connection
      connection.end(error => {
        if (error) {
          console.error(error);
        } else {
          console.log("Connection closed!");
        }
      });
      }
    });
    //console.log("csvData", csvData);
  });
//console.log("stream", stream);
  stream.pipe(csvStream);


  console.log("al final");
