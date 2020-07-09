const express = require('express')
const app = express();
const routes = require('./routes/todo.routes')
const conexao = require('./mongodb.connect/monodb.connect')
conexao.connect();

app.use(express.json())

app.use("/", routes)


module.exports = app;