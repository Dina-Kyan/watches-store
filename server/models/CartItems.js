const mongoose = require('mongoose');

const CartItemsSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    raiting: {
        type: Number,
        default: 0
    },
    gender: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true,
        min: 1
    }
})

module.exports = mongoose.model('CartItems', CartItemsSchema);