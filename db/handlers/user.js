const User = require("../models/user");
const uniqid = require("uniqid");

const {Model} = User;


const getUser = async ( condition = {} ) => {
    return Model.find(condition);
};

const createUser = async credentials => {
    const {user_id = uniqid(), display_name} = credentials;
    const record = new Model({user_id, display_name, points: 0});
    return await record.save();
};

module.exports = {getUser, createUser};