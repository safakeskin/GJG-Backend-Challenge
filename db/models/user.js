const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * User Schema with necessary fields
 */
const UserSchema = new Schema({
    user_id: {type: String, required: true, unique: true},
    display_name: {type: String, required: true, unique: true},
    points: {type: Number},
    rank: {type: Number},
    country: {type: String, default: 'tr'}
});

UserSchema.index({user_id: 1, points: -1});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;