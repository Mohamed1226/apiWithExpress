const express = require("express");

const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.json());
app.use(cookieParser())
const db = require("./db.js");

dotenv.config({ path: "./config/config.env" });

db();

app.use("/", require("./index.js"));

app.listen(process.env.port);
