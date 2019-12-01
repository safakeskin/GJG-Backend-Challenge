const userModel = require("../models/user");
const uniqid = require("uniqid");


const getUser = async ( condition = {} ) => {
    const user = await userModel.findOne(condition).lean();
    if (!user){
        throw new Error("User not found!");
    }
    const countCondition = {
        "points": {
            "$gt": user.points
        }
    };
    const {user_id, display_name, points} = user;
    const rank = await userModel.countDocuments(countCondition).then(r => r+1);
    return {
        user_id,
        display_name,
        points,
        rank
    };
};

const createUser = async credentials => {
    const {user_id = uniqid(), display_name, country} = credentials;
    const record = new userModel({user_id, display_name, points: 0, country});
    return await record.save();
};

module.exports = {getUser, createUser};