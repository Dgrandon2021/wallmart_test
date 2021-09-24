const { Router } = require('express')

const ruta = Router()

const controllerProducto = require('../controllers/producto.controller.js')

ruta.get('/',controllerProducto.getProductos)

ruta.get('/:id',controllerProducto.getProducto)

module.exports = ruta