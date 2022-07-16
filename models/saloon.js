const mongoose = require('mongoose')

const saloonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String
    },
    rating: {
        type: Number
    },
    completeAddress: {
        type: String,
        required: true
    },
    landmark: {
        type: String
    },
    loc: {
        type: Array,
        required: true
    },
    openStatus: {
        type: boolean,
        default: false
    },
    images: {
        type: Array,
        default: []
    },
    services: {
        type: Array,
        default: []
    },
    contact: {
        type: Array,
        default: []
    },
    openingTime: {
        type: Number,
        required: true
    },
    closingTime: {
        type: Number,
        required: true
    }
})

const saloonModel = new mongoose.model('saloon', saloonSchema)