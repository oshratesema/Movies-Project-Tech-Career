const express = require('express');
const router = express.Router();

const usersBLL = require('../BLL/usersBLL');

router.get('/', async (req,res) => {
    const users = await usersBLL.getUsers()
    res.json(users);
})

module.exports = router;