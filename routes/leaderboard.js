const express = require('express');
const router = express.Router();

const {getLeaderboard} = require("../db/handlers/leaderboard");

router.get('/:country?', async (req, res) => {
    const {country} = req.params;
    try{
        const leaderboard = await getLeaderboard( country ? {country}: {});
        res.status(200).send(leaderboard);
    }catch (e) {
        console.log(e);
        res.status(500).send("Error occurred, contact with your service provider!");
    }
});

module.exports = router;