const express = require("express");
const fs = require("fs");
const app = express();
const config = {
  port: 8000,
};

app.get("/", (req, res) => {
  // res.send('hello~!!');
  var index = fs.readFileSync("./public/index.html");
  var html = index.toString();
  res.send(html);
});

app.listen(config.port, () => {
  console.log(`启动: 127.0.0.1:${config.port}`);
});
