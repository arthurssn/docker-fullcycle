const express = require("express");
const mysql = require("mysql2");
const app = express();

const configDB = {
  host: "node-mysql",
  user: "root",
  password: "password",
  database: "nodeapp",
};

const connection = mysql.createConnection(configDB);

const createTable = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`;
connection.query(createTable, (err) => {
  if (err) {
    console.error("Erro ao criar tabela:", err.stack);
  } else {
    const insert = `INSERT INTO people(name) VALUES('Arthur')`;
    connection.query(insert);

    connection.query("SELECT * FROM people", (err, results) => {
      if (err) {
        console.error("Erro ao consultar usuários:", err.stack);
      } else {
        const list = results.map((user) => `<li>${user.name}</li>`).join("");

        app.get("/", (req, res) => {
          res.send(`<h1>Full Cycle Rocks!</h1></br><ul>${list}</ul>`);
        });

        app.listen(3000, () => {
          console.log("Rodando na porta 3000");
        });
      }
    });
  }
});

process.on("exit", () => {
  connection.end();
});
