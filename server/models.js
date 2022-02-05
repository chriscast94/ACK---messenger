const { Schema, model } = require('mongoose');


const messageSchema = new Schema({
    user: {
        type: String,
        trim: true
    },

    text: {
        type: String,
        required: 'You need to leave a message!',
        trim: true
    }
})

const Message = model('Message', messageSchema);

module.exports = Message;