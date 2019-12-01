const userModel = require("../models/user");

const getLeaderboard = async (condition ={}) => {
    const options = {sort:{points: -1}};
    const rankless = await userModel.find(condition, null, options).lean();
    return rankless.map(
        ({display_name, points, country}, idx) =>
            ({display_name, points, country, rank: idx + 1})
    );
};

module.exports = {getLeaderboard};