
const mongoose = require('mongoose');

const FavoritesSchema = mongoose.Schema({
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
    }
})

module.exports = mongoose.model('Favorites', FavoritesSchema);