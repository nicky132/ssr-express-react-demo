import React from "react";
import ReactDOMServer from "react-dom/server";

import Demo from "./components/demo";
const express = require("express");
const fs = require("fs");
const app = express();
const config = {
  port: 8000,
};

app.get("/", (req, res) => {
  var index = fs.readFileSync("./public/index.html");
  // renderToString, renderToStaticMarkup
  var demo = ReactDOMServer.renderToString(<Demo />);
  var html = index.toString().replace("hello~!", demo);
  res.send(html);
});

app.listen(config.port, () => {
  console.log(`启动: 127.0.0.1:${config.port}`);
});
