const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const expressApp = express();
const cors = require("cors");

const api = require("./src/app");

expressApp.use(
  cors({
    origin: "http://localhost:4200",
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ['GET','POST', 'OPTIONS']
  })
);

expressApp.use(bodyParser.json());

expressApp.use(bodyParser.urlencoded({ extended: false }));

expressApp.use(api);

http.createServer(expressApp).listen(4000, () => {
  console.log("Listening to https://localhost:4000");
});
