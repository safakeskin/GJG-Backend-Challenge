const userModel = require("../models/user");
const uniqid = require("uniqid");


const getUser = async ( condition = {} ) => {
    const user = await userModel.findOne(condition).lean();
    if (!user){
        throw new Error("User not found!");
    }
    console.log(user);
    const countCondition = {
        "points": {
            "$gt": user.points
        }
    };
    const rank = await userModel.countDocuments(countCondition);
    return {
        ...user,
        rank
    };
};

const createUser = async credentials => {
    const {user_id = uniqid(), display_name} = credentials;
    const record = new userModel({user_id, display_name, points: 0});
    return await record.save();
};

module.exports = {getUser, createUser};