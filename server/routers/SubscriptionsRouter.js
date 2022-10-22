const express = require('express');
const router = express.Router();

const subsBLL = require('../BLL/subscriptionsBLL');

router.get('/', async (req,res) => {
        const subs = await subsBLL.getSubs();
      return  res.json(subs);
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const subs = await subsBLL.getById(id);
    res.status(200).json(subs);
} catch (error) {
    res.status(500).json(error)
}
})


router.put('/:id', async (req, res) => {
try {
  const { id } = req.params;
  const obj = req.body;
  const status = await subsBLL.updateSubs(id, obj);
  res.status(200).json(status);
} catch (e) {
  res.status(500).json(e);
}
});

router.delete('/:id', async (req, res) => {
try {
  const { id } = req.params;
  const status = await subsBLL.deleteSubs(id);
  res.status(200).json(status);
} catch (e) {
  res.status(500).json(e);
}
});

router.post('/' , async (req,res) => {
const obj = req.body;
const subs = await subsBLL.addSubs(obj);
res.json(subs);
})

module.exports = router;