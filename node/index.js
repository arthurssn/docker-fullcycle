const express = require("express");
const app = express();
const port = 3000;

const configDB = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(configDB);

const createTable = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment primary key, name varchar(255))`;
connection.query(createTable);
const insert = `INSERT INTO people(name) values('Arthur')`;
connection.query(insert);
connection.end();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
