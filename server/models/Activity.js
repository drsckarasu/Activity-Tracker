const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    startTime: {
        type: String,
        trim: true,
        required: true
    },
    finishTime: {
        type: String,
        trim: true,
        required: true
    },
    distance: {
        type: String,
        trim: true,
        required: true
    },
    typeActivity: {
        type: String,
        trim: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Activity', ActivitySchema);
