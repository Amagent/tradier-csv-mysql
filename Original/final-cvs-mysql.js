const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("bezkoder.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();

    // create a new connection to the database
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env._DATABASE,
    });

    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
          "INSERT INTO category (id, name, description, created_at) VALUES ?";
        connection.query(query, [csvData], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

stream.pipe(csvStream);
