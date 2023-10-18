"use strict";
exports.__esModule = true;
require("dotenv/config");
var config = {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
};
module.exports = config;
