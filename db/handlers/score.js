const userModel = require("../models/user");

const submit = async (score) => {
    const {user_id, score_worth} = score;
    const condition = {
        "user_id": user_id
    };
    const operation = {
        $inc: {
            points: score_worth
        }
    };
    return await userModel.updateOne(condition, operation);
};

module.exports = {submit};