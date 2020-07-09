const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title:{
        type: String,
    },
    done: {
        type: Boolean,
    }
});

const TodoModel = mongoose.model("User", TodoSchema);

module.exports = TodoModel;