const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * User Schema with necessary fields
 */
const UserSchema = new Schema({
    user_id: {type: String, required: true, unique: true},
    display_name: {type: String, required: true, unique: true},
    points: Number,
    rank: Number
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = {
    Model: UserModel,
    Schema: UserSchema
};