const express = require('express');
const router = express.Router();

const {submit} = require("../db/handlers/score");

router.post('/submit', async (req, res) => {
    const {body: {user_id, score_worth}} = req;
    try{
        const user = await submit({user_id, score_worth});
        res.status(200).send(user);
    }catch (e) {
        console.log(e);
        res.status(500).send("Error occurred, contact with your service provider!");
    }
});

module.exports = router;