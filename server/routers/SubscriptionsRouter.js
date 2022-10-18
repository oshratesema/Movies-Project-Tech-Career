const express = require('express');
const router = express.Router();

const subsBLL = require('../BLL/SubscriptionsBLL');

router.get('/', async (req,res) => {
    const subs = await subsBLL.getSubs();
    res.json(subs);
})

router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const obj = req.body;
      const status = await personsBLL.updatePerson(id, obj);
      res.status(200).json(status);
    } catch (e) {
      res.status(500).json(e);
    }
  });
  
module.exports = router;