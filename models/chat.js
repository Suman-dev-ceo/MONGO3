const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from : {
        type: String,
        required : true,
    },
    to : {
        type : String,
        required : true,
    },
    msg : {
        type : String,
    },
    created_at : {
        type : Date,
        required : true,
    },
    modified_at: {
        type : Date,        
    }
});

const Chat = new mongoose.model('Chat',chatSchema);

module.exports = Chat;