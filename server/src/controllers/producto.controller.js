const productoController = {}

const Producto = require('../model/Producto')

productoController.getProductos = (req,res) => {
    const listProds = Producto.find()
    res.json(listProds)
}
productoController.getProducto = (req,res) => {}
productoController.addProductos = (req,res) => {}
productoController.delProductos = (req,res) => {}

module.exports = productoController;