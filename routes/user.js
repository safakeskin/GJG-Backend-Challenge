const express = require('express');
const router = express.Router();

const {getUser, createUser} = require("../db/handlers/user");

router.post('/create', async (req, res) => {
    const {body: {user_id, display_name, country}} = req;
    try{
        const user = await createUser({user_id, display_name, country});
        res.status(200).send(user);
    }catch (e) {
        console.log(e);
        res.status(500).send("Error occurred, contact with your service provider!");
    }
});

router.get('/profile', async (req, res) => {
    const {query: {user_id, display_name}} = req;

    try {
        const user = await getUser(user_id ? {user_id} : {display_name});
        res.status(200).send(user);
    }catch (e) {
        console.log(e);
        res.status(500).send("Error occurred, contact with your service provider!");
    }
} );

module.exports = router;