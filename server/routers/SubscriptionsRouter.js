const express = require('express');
const router = express.Router();

const subsBLL = require('../BLL/SubscriptionsBLL');

router.get('/', async (req,res) => {
    const subs = await subsBLL.getSubs();
    res.json(subs);
})

module.exports = router;