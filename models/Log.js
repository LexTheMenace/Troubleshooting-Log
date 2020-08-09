mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
    technology: {
        type: String,
        required: [true, 'Please add the technology'], 
        unique: true
    },
    errCode: {
        type: String, required: [true, 'Please add the error name/code']
    },
    errMsg: {
        type: String, required: [true, 'Please add the error message']
    },
    solutions: {
        type: [Schema.Types.Mixed]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
         default: false
    },
    count: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model('Log', LogSchema)