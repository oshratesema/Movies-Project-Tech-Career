const express = require('express');
const router = express.Router();

const memberBLL = require('../BLL/membersBLL');

router.get('/', async (req,res) => {
    try {
        const member = await memberBLL.getMembers();
        res.json(member);
    } catch (error) {
        res.status(500).json(error)
    }
   
})

router.get('/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const member = await memberBLL.getById(id);
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json(error)
    }
})
    

router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const obj = req.body;
      const status = await memberBLL.updateMember(id,obj)
      res.status(200).json(status);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const status = await memberBLL.deleteMember(id);
      res.status(200).json(status);
    } catch (e) {
      res.status(500).json(e);
    }
  });

 router.post('/' , async (req,res) => {
  const obj = req.body;
  const member = await memberBLL.addMember(obj);
  res.json(member);
 })
  
  
module.exports = router;