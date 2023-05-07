const mongoose = require('mongoose')
const {Schema} = mongoose

const Product = mongoose.model(('Product'),new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    productID:{
        type: Number,
        required: true
    }
}))

module.exports = Product