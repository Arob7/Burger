const express = require("express");
require("dotenv").config();
var PORT = process.env.PORT || 8080;

var app = express();
console.log(`application running on http://localhost:${PORT}`);
