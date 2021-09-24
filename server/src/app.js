
const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('dev'));

app.use("/api/productos", require('./rutas/productos.rutas'))

module.exports = app;