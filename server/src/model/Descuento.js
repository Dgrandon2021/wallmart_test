const { Schema, model } = require('mongoose')

const discountSchema = new Schema({   
    brand:{type: String},
    threshold:{type: Number},
    discount:{type: Number}
});


module.exports = model("Descuento", discountSchema);