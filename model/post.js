var mongoose = require("mongoose"),
    schema = mongoose.Schema;

var post = new Schema({
    title : {
        type: String
    },
    author : {
        type: String
    },
    text : {
        type: String
    },
    published : {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("post", post);