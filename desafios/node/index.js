const express = require("express");
const app = express();

const list = `
  <li>docker</li>
  <li>docker-compose</li>
  <li>node</li>
  <li>express</li>
`;

app.get("/", (req, res) => {
  res.send(`<h1>Full Cycle Rocks!</h1></br><ul>${list}</ul>`);
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
