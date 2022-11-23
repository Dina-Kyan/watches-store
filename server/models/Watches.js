const mongoose = require('mongoose');

const WatchesSchema = mongoose.Schema({
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
        default: Date.now
    },
    img: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Watches', WatchesSchema);