const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    ToDo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("ToDo", TodoSchema);